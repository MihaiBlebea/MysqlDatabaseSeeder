import { MysqlConnector } from './MysqlConnector';
import { Table } from './../models';
export declare class TableTruncator {
    private connection;
    constructor(connection: MysqlConnector);
    execute(table: Table): Promise<Object>;
}
