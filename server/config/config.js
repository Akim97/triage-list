// module.exports = {
//   "development": {
//     "url": "postgres://iofxehti:ajxARLNRLrWZ5CkveVXK80ViPpK5zXAL@lallah.db.elephantsql.com/iofxehti",
//     "dialect": "postgres",
//     "dialetOptions": {
//       ssl: {
//         rejectUnauthorized: false, 
//       },
//     },
//   },
//   "test": {
//     "url": "127.0.0.1",
//     "dialect": "postgres",
//     "dialetOptions": {
//       ssl: {
//         rejectUnauthorized: false, 
//       },
//     },
//   },
//   "production": {
//     "url": process.env.DATABASE,
//     "dialect": "postgres",
//     "dialetOptions": {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false, 
//       },
//     },
//   }
// }



const pg = require('pg')
const url = "postgres://gcavarzr:TVYfCFKtduMoMfGZuzzx4RZ_SaxbFtlR@raja.db.elephantsql.com/gcavarzr"


const client = new pg.Client(url);
client.connect((err) => {
  if (err) {

  }
  console.log(success)
})



module.exports (controller)