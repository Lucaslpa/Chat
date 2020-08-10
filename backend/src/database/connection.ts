import { ConnectionOptions, getConnectionOptions , createConnection } from 'typeorm'
import "reflect-metadata";

createConnection({
    
    type: "sqlite",
    database: 'src/database/database.sql',
    entities: [__dirname + "/entity/*.entity.ts"],
    synchronize: true
})