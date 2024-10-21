const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({ name, email, password });
        await user.save();
        const token = createToken(user);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid credentials');

        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error('Invalid credentials');

        const token = createToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser };
