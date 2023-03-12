const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  cik: {
    type: Number,
    // required: true,
    // unique: true,
  },
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  ticker: { 
    type: String, 
    // required: true, 
    // unique: true 
  },
  exchange: { 
    type: String, 
    // required: true
   },
  revenue: String,
  revenue1: String,
  netIncome: String,
  cash: String,
  cashFlow: String,
  cashFlow1: String,
  eps: Number,
  eps1: Number,
  currentAsset: String,
  currentLiabilities: String,
  taxesPaid: String,
  taxesPaid1: String,
},
 {
  collection: 'company'
 }
);

const Company = model("Company", companySchema);

module.exports = Company;
