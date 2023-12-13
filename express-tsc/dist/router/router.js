"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.render('home', {});
});
exports.router.get('/catalog', (req, res) => {
    res.render('catalog', {});
});
exports.router.get('/about', (req, res) => {
    res.render('about', {});
});
//# sourceMappingURL=router.js.map