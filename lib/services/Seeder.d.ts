import { MysqlConnector } from './MysqlConnector';
import { Table } from './../models';
export declare class Seeder {
    private connection;
    constructor(connection: MysqlConnector);
    private buildKeyString;
    execute(table: Table): Promise<Object>;
}
