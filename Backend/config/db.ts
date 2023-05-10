import mongoose from 'mongoose';
import config from "config"


const db = async() =>{
    const dbUrl = config.get("dbUri") as string

    try {
        await mongoose.connect(dbUrl).then(() =>{
            console.log('Db is successfully connected!!')
        })
    } catch (error) {
        console.error(error)
    }
}

export default db