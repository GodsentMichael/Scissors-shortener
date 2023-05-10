// import  http  from "http"
import {Server} from 'http';
import app from "./src/app"
import config from "config"

const port = config.get("port")

const server = new Server(app)
server.listen(port, () => {
    console.log(`This app is running on http://localhost:${port}`)
})
