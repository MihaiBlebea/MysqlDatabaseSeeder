import { MysqlConnector } from './MysqlConnector'
import { Table, Field } from './../models'



export class Seeder
{
    private connection : MysqlConnector


    constructor(connection : MysqlConnector)
    {
        this.connection = connection
    }

    private buildKeyString(fields : Field[])
    {
        let keys : String[] = []
        fields.forEach((field : Field)=> {
            if(field.name !== 'id')
            {
                keys.push(field.name)
            }
        })
        return `(${ keys.join(', ') })`
    }

    execute(table : Table)
    {
        let values = []
        table.values.forEach((value)=> {
            let row = []
            Object.keys(value).forEach((key)=> {
                if(key !== 'id')
                {
                    row.push(value[key])
                }
            })
            values.push(row)
        })

        return this.connection.query(
            `INSERT
             INTO ${ table.name }
             ${ this.buildKeyString(table.fields) }
             VALUES ?`, [values])
    }
}
