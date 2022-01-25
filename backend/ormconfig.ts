module.exports = {
    cli: {
        migrationsDir: __dirname + '/src/database/migrations',
        entitiesDir: __dirname + '/src/entities',
    },
    migrations: [__dirname + '/src/database/migrations/*.ts'],
    entities: [__dirname  + '/src/entities/*.ts'],
}