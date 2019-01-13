import chalk from 'chalk'
import * as dotenv from 'dotenv'

dotenv.config({ path: __dirname + '/../.env' })
const args = process.argv

import { DatabaseSeeder } from './index'



let connection = DatabaseSeeder.connect(
    process.env.LOCAL_MYSQL_HOST,
    process.env.LOCAL_MYSQL_DATABASE,
    process.env.LOCAL_MYSQL_USER,
    process.env.LOCAL_MYSQL_PASSWORD,
    process.env.LOCAL_MYSQL_PORT)


if(args[2] && args[2] === 'seed')
{
    if(args[3] && typeof parseInt(args[3]) === 'number')
    {
        DatabaseSeeder.seed(connection, parseInt(args[3])).then((promises)=> {
            console.log(chalk.green(`Tables seeded with ${ args[3] } rows`))
        })
    } else {
        DatabaseSeeder.seed(connection).then((result)=> {
            console.log(chalk.green(`Tables seeded with 100 rows`))
        })
    }

    console.log(chalk.green('Job done'))
}

if(args[2] && args[2] === 'truncate')
{
    if(args[3] && args[3].includes('table='))
    {
        DatabaseSeeder.truncate(connection, args[3].split('=')[1])
    } else {
        DatabaseSeeder.truncate(connection)
    }

    console.log(chalk.green('Job done'))
}
