import { MysqlConnector } from './MysqlConnector'
import { Table } from './../models'


export class TableTruncator
{
    private connection : MysqlConnector


    constructor(connection : MysqlConnector)
    {
        this.connection = connection
    }

    execute(table : Table)
    {
        return this.connection.query(`TRUNCATE TABLE ${ table.name }`)
    }
}
