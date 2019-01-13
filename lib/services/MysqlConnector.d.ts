import { Connection, Pool } from 'mysql';
export declare class MysqlConnector {
    private host;
    private database;
    private user;
    private password;
    private port;
    private connection?;
    private pool?;
    private showQuery;
    constructor(host: string, database: string, user: string, password: string, port?: number);
    readonly databaseName: string;
    setup(options: {
        showQuery?: Boolean;
    }): void;
    connect(): Connection;
    createPool(): Pool;
    private isPoolAvailable;
    private isConnectionAvailable;
    query(query: string, params?: any): Promise<Object>;
    private logQuery;
}
