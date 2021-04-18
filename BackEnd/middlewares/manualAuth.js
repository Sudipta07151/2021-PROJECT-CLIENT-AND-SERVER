const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/dev');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'No token found, Authorization DENIED!' });
    }
    try {
        const decoded = jwt.verify(token, jwtKey);
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'TOKEN IS INVALID' })
    }
}