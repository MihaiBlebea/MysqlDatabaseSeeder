import { MysqlConnector } from './MysqlConnector';
import { Table } from './../models';
export declare class Exporter {
    private connection;
    constructor(connection: MysqlConnector);
    getTableNames(): Promise<any>;
    getTableSchema(table: Table): Promise<Table>;
    getFieldsInDatabase(databaseName: string): Promise<Table[]>;
}
