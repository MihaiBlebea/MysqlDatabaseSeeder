import { MysqlConnector } from './MysqlConnector'
import { Field, Table } from './../models'

type DatabaseRow = {
    TABLE_NAME : string
    COLUMN_NAME : string
    DATA_TYPE : string
    IS_NULLABLE : string
    COLUMN_KEY : string
    COLUMN_DEFAULT : string
    EXTRA : string
}


export class Exporter
{
    private connection : MysqlConnector


    constructor(connection : MysqlConnector)
    {
        this.connection = connection
    }

    getTableNames()
    {
        return this.connection.query(`SHOW TABLES`).then((tables : any)=> {
            return tables.map((table : {})=> {
                return new Table(Object.values(table)[0].toString())
            })
        })
    }

    getTableSchema(table : Table) : Promise<Table>
    {
        return this.connection.query(
            `SHOW COLUMNS
             FROM ${ table.name }`).then((rows : any)=> {
                 table.addFields(rows.map((row : any)=> {
                     return new Field(
                         row.Field,
                         row.Type,
                         row.Null,
                         row.Key,
                         row.Default,
                         row.Extra)
                 }))
                 return table
             })
    }

    getFieldsInDatabase(databaseName : string)
    {
        return  this.connection.query(
            `SELECT * FROM information_schema.columns
             WHERE table_schema = ?
             ORDER BY table_name, ordinal_position`, [ databaseName ]).then((rows : DatabaseRow[])=> {

                 let createdTableNames = []
                 let tables : { [key : string] : Table } = {}
                 rows.forEach((row : DatabaseRow)=> {
                     if(!createdTableNames.includes(row.TABLE_NAME))
                     {
                         createdTableNames.push(row.TABLE_NAME)
                         tables[row.TABLE_NAME] = new Table(row.TABLE_NAME)
                     }
                 })

                 rows.forEach((row : DatabaseRow)=> {
                     let field = new Field(
                             row.COLUMN_NAME,
                             row.DATA_TYPE,
                             row.IS_NULLABLE,
                             row.COLUMN_KEY,
                             row.COLUMN_DEFAULT,
                             row.EXTRA)
                    tables[row.TABLE_NAME].addField(field)
                 })

                 return Object.values(tables)
             })
    }

}
