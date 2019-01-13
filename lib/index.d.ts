import { MysqlConnector } from './services';
import { Table } from './models';
export declare namespace DatabaseSeeder {
    const connect: (host: string, database: string, user: string, password: string, port?: number) => MysqlConnector;
    const seed: (connection: MysqlConnector, count?: Number) => Promise<void | Promise<void | Table>[]>;
    const truncate: (connection: any, tableName?: String) => Promise<Object>;
}
