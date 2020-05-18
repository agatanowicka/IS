const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
require('dotenv').config()

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'iot.html'));
  });

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Dane kontaktowe </h3>
        <ul>
            <li> Email: ${req.body.email}</li>
        </ul>
        <h3>Wiadomość</h3>
        <p>${req.body.message}</p>
        `
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: process.env.user,
                pass: process.env.pass
            }
        });

        var mailOptions = {
            from: req.body.email,
            to: process.env.to,
            subject: 'IOTORCHARD',
            html: htmlEmail
        };

        transporter.sendMail(mailOptions,
            (error, info) => {
                if (error) {
                    res.status(404).send();
                } else {
                    res.status(200).send();
                }
            });
    })
})




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server listening an port ${PORT}`)
})