const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://mealSaver:mealSaver@cluster0.cl4bv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'myFirstDatabase'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const mealsSchema = new Schema({
  name: String,
  listItems: Array,
  calories: Number,
  carbohydrates: Number,
  fat: Number,
  protein: Number,
});

const Meals = mongoose.model('meals', mealsSchema);

module.exports = { Meals };