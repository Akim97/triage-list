module.exports = {
  "development": {
    "url": "postgres://zjbglzan:t_oQt-R9C776vbPS2brfG95JhT19xTo9@lallah.db.elephantsql.com/zjbglzan",
    "dialect": "postgres",
    "dialetOptions": {
      ssl: {
        rejectUnauthorized: false, 
      },
    },
  },
  "test": {
    "url": "127.0.0.1",
    "dialect": "postgres",
    "dialetOptions": {
      ssl: {
        rejectUnauthorized: false, 
      },
    },
  },
  "production": {
    "url": process.env.DATABASE,
    "dialect": "postgres",
    "dialetOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
    },
  }
}
