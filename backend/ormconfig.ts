import {
    DATABASE_TYPE,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PORT,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
} from '~/lib/settings';

export default [
    {
        type: DATABASE_TYPE,
        host: DATABASE_HOST,
        database: DATABASE_NAME,
        port: DATABASE_PORT,
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        cli: {
            entitiesDir: 'src/entities',
            migrationsDir: 'src/database/migrations',
            subscribersDir: 'src/database/subscribers',
        },
        migrations: ['src/database/migrations/*.ts'],
        entities: ['src/entities/*.ts'],
    }
];