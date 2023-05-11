import { useState } from "react"
import {Button, Input, Box, Heading, InputGroup} from "@chakra-ui/react"
import axios from "axios"

const URLShortenerForm = () => {
    const [destination, setDestination] = useState("")
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        debugger
    }
    return <Box pos='relative'> Hi
        
        <form onSubmit={handleSubmit}><Button type="submit">CREATE SHORT URL</Button></form>
        
         </Box>
}

export default URLShortenerForm