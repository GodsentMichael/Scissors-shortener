import {object, string} from "yup"

export default object({
    body: object({
        destination: string().required("Pls destination is required!")
    })
    
})