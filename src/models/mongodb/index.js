import mongoose from 'mongoose';

const {Schema} = mongoose;

export default alcoholSchema = new Schema({
  name: String,
  contry: String,
  description: String,
  score: Number,
  ABV: String,
  maker: String,
  type: String,
  imageUrl: String,
  style: String,    
}, {timestamps: true});
