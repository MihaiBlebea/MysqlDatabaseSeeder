"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TableTruncator {
    constructor(connection) {
        this.connection = connection;
    }
    execute(table) {
        return this.connection.query(`TRUNCATE TABLE ${table.name}`);
    }
}
exports.TableTruncator = TableTruncator;
