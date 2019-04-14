module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'priority',
    user: process.env.DB_USER || 'priority',
    password: process.env.DB_PASS || 'priority',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './priority.sqlite'
    }
  }
}
