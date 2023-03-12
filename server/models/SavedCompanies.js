const { Schema, model } = require('mongoose');



const schema = new Schema({
 
  companies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  ]
});

const savedCompanies = model('savedCompanies', schema);

module.exports = savedCompanies;
