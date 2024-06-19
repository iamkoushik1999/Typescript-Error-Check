import mongoose, { Document, Schema } from 'mongoose';

export interface IItem extends Document {
  name: string;
  description: string;
  price: number;
}

const itemSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const itemModel = mongoose.model<IItem>('Item', itemSchema);
export default itemModel;
