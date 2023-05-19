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
        default: () =>  nanoid(),
    },
    customId: {
        type: String,
        unique: true,
        required: true,
        default: () =>  nanoid(),
    },

    destination: {
        type: String,
        required: true,
    },
    // analytics: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'analytics',
    //     required: true,
    // },
  
    // I want to see number of clicks.
    clickCount: {
        type: Number,
        required: true,
        default: 0,
    },

});

//create a mongoose model
const shortUrl = mongoose.model<ShortUrl>('shortUrl', shortUrlSchema);
export default shortUrl;

// import mongoose from 'mongoose';

// interface ShortUrl extends mongoose.Document {
//   destination: string;
//   shortId: string;
// }

// const shortUrlSchema = new mongoose.Schema<ShortUrl>(
//   {
//     destination: {
//       type: String,
//       required: true,
//     },
//     shortId: {
//       type: String,
//       required: true,
//       unique: true,
//       default: () => {
//         let randomChars = '';
//         const possibleChars =
//           'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//         for (let i = 0; i < 6; i++) {
//           randomChars += possibleChars.charAt(
//             Math.floor(Math.random() * possibleChars.length)
//           );
//         }

//         return `https://slice.ly/${randomChars}`;
//       },
//     },
//   },
//   { timestamps: true }
// );



// export default mongoose.model<ShortUrl>('shortUrl', shortUrlSchema);
