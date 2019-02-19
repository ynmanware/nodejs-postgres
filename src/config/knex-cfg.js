module.exports =
    {
        pg:
            {
                client: 'pg',
                connection: 'postgres://postgres:postgres@localhost:5432/postgres',
                debug: false,
                pool: { min: 1, max: 10 }
            }
    };