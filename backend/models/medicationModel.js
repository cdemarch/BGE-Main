const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    schedule: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Medication', medicationSchema);
