// Create a PDF model in your models/PDF.js file
const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  filename: String,
  // Add other properties as needed
});

module.exports = mongoose.model("PDF", pdfSchema);
