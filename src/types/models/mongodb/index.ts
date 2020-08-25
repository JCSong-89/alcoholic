import mongoose from 'mongoose';

const {Schema} = mongoose;

export interface item extends mongoose.Document {
    name: string,
    contry: string,
    description: string,
    score: number,
    ABV: string,
    maker: string,
    type: string,
    imageUrl: string,
    style: string,    
}

const alcoholSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contry: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  ABV: {
    type: String,
    required: true
  },
  maker: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  userRating: {
      type: Number,
  },
  reviewCount: {
    type: Number,
  },  
}, {timestamps: true});

export const itemModel = mongoose.model<item>('item', alcoholSchema)
