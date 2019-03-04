const Database = require('./database.singleton')

let query = {
  one: `SELECT * FROM db_name.table_name;`,
  two: `SELECT * FROM db_name.another_table_name;`,
}

class Application {
  main () {
    let singleton1 = Database.getInstance()
    let singleton2 = Database.getInstance()

    return `
    First singleton data: ${singleton1.query(query.one)}. 
    Second singleton data: ${singleton2.query(query.two)}
    `
  }
}

let app = new Application()

console.log(app.main())