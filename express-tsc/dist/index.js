"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const router_1 = require("router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false })); // forms
app.use(express_ejs_layouts_1.default);
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// routing table
app.use(router_1.router);
app.listen(6161, () => console.log('server listen on port 6161'));
//# sourceMappingURL=index.js.map