const { Pool } = require('pg');

const PG_URI = 'postgres://gcavarzr:TVYfCFKtduMoMfGZuzzx4RZ_SaxbFtlR@raja.db.elephantsql.com/gcavarzr';

const db = new Pool({
  connectionString: PG_URI,
});


module.exports = {
    query: (text, params, callback) => {
      // console.log('executed query', text);
      return db.query(text, params, callback);
    }
  };