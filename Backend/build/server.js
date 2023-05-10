"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import  http  from "http"
var http_1 = require("http");
var app_1 = __importDefault(require("./src/app"));
var config_1 = __importDefault(require("config"));
var port = config_1.default.get("port");
var server = new http_1.Server(app_1.default);
server.listen(port, function () {
    console.log("This app is running on http://localhost:".concat(port));
});
