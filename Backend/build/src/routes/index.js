"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shortUrlCtrl_1 = require("../controllers/shortUrlCtrl");
var validation_1 = __importDefault(require("../middleware/validation"));
var createUrlSchema_1 = __importDefault(require("../validationSchemas/createUrlSchema"));
var routes = function (app) {
    app.get('/testingMyApp', function (req, res) {
        return res.send('App is tested and ready!');
    });
    app.post('/api/shortUrl', (0, validation_1.default)(createUrlSchema_1.default), shortUrlCtrl_1.createShortUrl);
    app.get('/api/shortUrl/:shortId', shortUrlCtrl_1.handleRedirect);
    app.get('api/shortUrl/analytics', shortUrlCtrl_1.getAnalytics);
};
exports.default = routes;
