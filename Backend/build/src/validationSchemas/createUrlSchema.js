"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    body: (0, yup_1.object)({
        destination: (0, yup_1.string)().required("Pls destination is required!")
    })
});
