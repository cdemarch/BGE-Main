const jwt = require('jsonwebtoken');

// Protect middleware function to verify JWT
const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from headers

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' }); // No token found
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to the request
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' }); // Token verification failed
    }
};

// Export the protect middleware
module.exports = { protect };
