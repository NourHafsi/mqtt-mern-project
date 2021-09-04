const express = require('express');
const jwt = require('jsonwebtoken');
const { login, create } = require('../controllers/AuthController');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;
        const admin = await create(
            username,
            email,
            password
        );
        return res.status(200)
            .json(admin);
    } catch (e) {
        return res.status(e.code >= 100 && e.code < 600 ? e.code : 500)
        .json({
            error: true,
            message: e.message,
        });
    }    
})

router.post('/login', async (req, res) => {
    try {
        const {
            email,
            password,
        } = req.body;
        const user = await login(email, password);
        delete user.password;
        // eslint-disable-next-line no-underscore-dangle
        const {_id, email: emailUser, nom, prenom, photoProfil} = user;
        const token = jwt.sign({ user:{_id, emailUser, nom, prenom, photoProfil}}, "yoursecretkey", {
            expiresIn: '90d',
        });
        return res.status(200)
            .json({
                token,
                info: {_id, emailUser, nom, prenom, photoProfil},
            });
    } catch (e) {
        return res.status(e.code >= 100 && e.code <= 600 ? e.code : 500)
            .json({
                error: true,
                message: e.message,
            });
    }
});

module.exports = router;
