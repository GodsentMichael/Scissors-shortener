import mongoose from 'mongoose';
// import  shortUrl  from './shortUrlModel';


interface Analytics extends Document{
    // ShortUrl: shortUrl
}

const analyticsSchema = new mongoose.Schema({
    shortUrl: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shortUrl',
        required: true,
    },
   
},
{timestamps: true,}
);

const analytics = mongoose.model<Analytics>('analytics', analyticsSchema);
export default analytics;