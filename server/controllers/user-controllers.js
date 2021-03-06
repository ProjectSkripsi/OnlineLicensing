const User = require('../models/User')
const hash = require('../helpers/hash')
const Token = require('../models/Token')
const randomstring = require("randomstring");
const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
const bcrypt = require('bcryptjs')
require('dotenv').config()

module.exports = {
    signUp: (req, res) =>{
        let name = req.body.name
        let email = req.body.email
        let password = hash.encode(req.body.password)
        User.find({ email: email })
        .then(user => {
            if (user.length === 0) {
                User.create({
                    name,
                    email,
                    password
                })
                .then(newUser => {
                    let token = new Token({
                        _userId: newUser._id,
                        token: randomstring.generate(7)
                    })
                    token.save(function (err) {
                        if (err) { return res.status(500).json({ msg: err.message }); }
                        var transporter = nodemailer.createTransport(smtpTransport({ 
                            service: 'gmail',
                            host: 'smtp.gmail.com',
                            auth: {
                                user: process.env.EMAIL,
                                pass: process.env.PASSWORD
                            }
                        }));
                        var mailOptions = { 
                            from: 'no-reply@siup-makassar.info', 
                            to: newUser.email, 
                            subject: 'Account Verification', 
                            text: 'Hello,\n\n' + 'Please verify your account by the code: '+ token.token + '\n' 
                        };
                        transporter.sendMail(mailOptions, function (err) {
                            if (err) { return res.status(500).send({ msg: err.message }); }
                            res.status(200).json('A verification email has been sent to ' + newUser.email + '.');
                        });
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: `Please input name & password incorrect`
                    })
                })
            } else {
                res.status(400).json({
                    message: 'email already registered!'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },
    
    signin: (req, res) => {
        let email = req.body.email
        let password = req.body.password
        User.findOne({email: email})
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
            .then((result) => {
                if(result){
                    if(user.isVerified){
                        res.status(200).json({
                            err: false,
                            msg: `Succesfully Login`,
                            email: user.email,
                            name: user.name,
                            role: user.role,
                            token: hash.jwtEncode({
                                id: user._id,
                                name: user.name,
                                role: user.role
                            })
                        })
                    }else{
                        res.status(401).send({ 
                            type: 'not-verified', 
                            msg: 'Your account has not been verified.' 
                        }); 
                    } 
                } else{
                    res.status(400).json({
                        message: "Password is wrong"
                    })
                }
            })
            
        })
        .catch(err => {
            res.status(500).json({ 
                msg: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'
            })
        })
    },
            
    confirmation: (req, res) =>{
        console.log(req.body.token);
        
        Token.findOne({ token: req.body.token }, function (err, token) {
            
            if (!token) return res.status(400).json({ 
                type: 'not-verified', 
                msg: 'We were unable to find a valid token. Your token my have expired.' 
            });
            User.findOne({ _id: token._userId, email: req.body.email }, function (err, user) {
                if (!user) return res.status(400).json({ 
                    msg: 'We were unable to find a user for this token.' 
                });
                if (user.isVerified) return res.status(400).json({ type: 'already-verified', msg: 'This user has already been verified.' });
     
                // Verify and save the user
                user.isVerified = true;
                user.save(function (err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                    res.status(200).send("The account has been verified. Please log in.");
                });
            });
        });
    },

    resendToken: (req, res) =>{
        console.log(`masuk`);
        
        User.findOne({ email: req.body.email }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
            if (user.isVerified) return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });
     
            var token = new Token({ 
                _userId: user._id, 
                token: randomstring.generate() });
     
            token.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
     
                // Send the email
                var transporter = nodemailer.createTransport({ 
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }
                });
                var mailOptions = { 
                    from: 'no-reply@yourwebapplication.com', 
                    to: user.email, 
                    subject: 'Account Verification', 
                    text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api' + '\/users' + '\/confirmation\/' + token.token + '\n' 
                };
                transporter.sendMail(mailOptions, function (err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                    res.status(200).json('A verification email has been sent to ' + user.email + '.');
                });
            });
     
        });
    },

    getUser: (req, res) =>{
        User.find()
        .populate('request')
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getOne: (req, res) => {
        User.findById({_id: req.decoded.id})
        .then( response => {
            let user = {
                name: response.name,
                _id: response._id,
                email: response.email,
                role: response.role
            }
            res.status(200).json(user)
        })
        .catch( err => {
            res.status(500).json(err)
            console.log(`inii`,err);
            
        })
    },

    

}