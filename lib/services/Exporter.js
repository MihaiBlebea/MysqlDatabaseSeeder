"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./../models");
class Exporter {
    constructor(connection) {
        this.connection = connection;
    }
    getTableNames() {
        return this.connection.query(`SHOW TABLES`).then((tables) => {
            return tables.map((table) => {
                return new models_1.Table(Object.values(table)[0].toString());
            });
        });
    }
    getTableSchema(table) {
        return this.connection.query(`SHOW COLUMNS
             FROM ${table.name}`).then((rows) => {
            table.addFields(rows.map((row) => {
                return new models_1.Field(row.Field, row.Type, row.Null, row.Key, row.Default, row.Extra);
            }));
            return table;
        });
    }
    getFieldsInDatabase(databaseName) {
        return this.connection.query(`SELECT * FROM information_schema.columns
             WHERE table_schema = ?
             ORDER BY table_name, ordinal_position`, [databaseName]).then((rows) => {
            let createdTableNames = [];
            let tables = {};
            rows.forEach((row) => {
                if (!createdTableNames.includes(row.TABLE_NAME)) {
                    createdTableNames.push(row.TABLE_NAME);
                    tables[row.TABLE_NAME] = new models_1.Table(row.TABLE_NAME);
                }
            });
            rows.forEach((row) => {
                let field = new models_1.Field(row.COLUMN_NAME, row.DATA_TYPE, row.IS_NULLABLE, row.COLUMN_KEY, row.COLUMN_DEFAULT, row.EXTRA);
                tables[row.TABLE_NAME].addField(field);
            });
            return Object.values(tables);
        });
    }
}
exports.Exporter = Exporter;
