const Attendant = require('../models/Attendant');

exports.createAttendant = async (req, res) => {
  try {
    const attendant = await Attendant.create(req.body);
    res.status(201).json(attendant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAttendants = async (req, res) => {
  try {
    const attendants = await Attendant.find();
    res.json(attendants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAttendant = async (req, res) => {
  try {
    const attendant = await Attendant.findById(req.params.id);
    res.json(attendant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAttendant = async (req, res) => {
  try {
    const attendant = await Attendant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(attendant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAttendant = async (req, res) => {
  try {
    await Attendant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Attendant deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
