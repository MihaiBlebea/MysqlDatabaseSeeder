import { DatabaseSeeder } from './index'


let connection = DatabaseSeeder.connect('127.0.0.1', 'playground_database', 'admin', 'root', 32800)

// DatabaseSeeder.seed(connection, 100)

DatabaseSeeder.truncate(connection)
