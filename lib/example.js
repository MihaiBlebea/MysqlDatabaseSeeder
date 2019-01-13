"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let connection = index_1.DatabaseSeeder.connect('127.0.0.1', 'playground_database', 'admin', 'root', 32800);
// DatabaseSeeder.seed(connection, 100)
index_1.DatabaseSeeder.truncate(connection);
