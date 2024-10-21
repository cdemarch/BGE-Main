const Medication = require('../models/medicationModel');

const getMedications = async (req, res) => {
    try {
        const medications = await Medication.find({ user: req.user._id });
        res.status(200).json(medications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addMedication = async (req, res) => {
    const { name, dosage, schedule } = req.body;

    try {
        const medication = new Medication({ name, dosage, schedule, user: req.user._id });
        await medication.save();
        res.status(201).json(medication);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getMedications, addMedication };
