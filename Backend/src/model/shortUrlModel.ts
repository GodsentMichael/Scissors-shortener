import mongoose, { Document } from 'mongoose';

let nanoid: any;

// Dynamically import nanoid
import('nanoid')
  .then((module) => {
    nanoid = module.customAlphabet('1234567890abcdefghijklmnopqrstuv', 6);
  })

//create a typescript interface
export interface ShortUrl extends Document {
    shortId: string;
    destination: string;
}

//create a mongoose schema
const shortUrlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: () => nanoid(),
    },
    destination: {
        type: String,
        required: true,
    },
});

//create a mongoose model
const shortUrl = mongoose.model<ShortUrl>('shortUrl', shortUrlSchema);
export default shortUrl;