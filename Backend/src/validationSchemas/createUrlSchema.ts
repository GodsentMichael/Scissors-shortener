import {object, string} from "yup"

import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';


export default object({
    body: object({
        destination: string().url("Must be a valid url").required("Pls destination is required!")

        
    })
    
})