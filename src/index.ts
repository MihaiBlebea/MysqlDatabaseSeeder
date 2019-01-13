import { Exporter, Seeder, Mapper, MysqlConnector, TableTruncator } from './services'
import { Table, Field } from './models'


export namespace DatabaseSeeder {
    export const connect = (host : string, database : string, user : string, password : string, port? : number)=> {
        return new MysqlConnector(host, database, user, password, port)
    }

    export const seed = (connection : MysqlConnector, count? : Number)=> {
        if(!count)
        {
            count = 100
        }
        let exporter = new Exporter(connection)
        return exporter.getFieldsInDatabase(connection.databaseName).then((tables : Table[])=> {
            return tables.map((table)=> {
                let i = 0
                while(i < count)
                {
                    let row = table.fields.map((field : Field)=> {
                        return Mapper.execute(field)
                    })
                    table.addValue(row)
                    i++
                }
                return table
            })
        }).then((tables : Table[])=> {
            let seeder = new Seeder(connection)
            return tables.map((table)=> {
                return seeder.execute(table).then((result)=> {
                    return table
                }).catch((error)=> {
                    console.log(error)
                })
            })
        }).catch((error : Error)=> {
            console.log(error)
        })
    }

    export const truncate = (connection, tableName? : String)=> {
        let truncator = new TableTruncator(connection)
        if(tableName)
        {
            let table = new Table(tableName)
            return truncator.execute(table)
        }

        let exporter = new Exporter(connection)
        exporter.getFieldsInDatabase(connection.databaseName).then((tables : Table[])=> {
            tables.map((table)=> {
                truncator.execute(table).then((result)=> {
                    console.log(`TABLE ${ table.name } WAS TRUNCATED`)
                }).catch((error)=> {
                    console.log(error)
                })
            })
        })
    }
}
