import {
    ConnectionOptions,
    createConnection,
    DatabaseType,
    getConnectionOptions
} from 'typeorm';

import {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_PORT,
    DATABASE_TYPE,
    DATABASE_USERNAME
} from '~/lib/settings';

const connectionOptions: ConnectionOptions = {
    type: DATABASE_TYPE as DatabaseType,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    database: DATABASE_NAME,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
} as ConnectionOptions;

getConnectionOptions().then(async (localConnectionOptions) => {
    await createConnection(Object.assign(connectionOptions, localConnectionOptions));
});
