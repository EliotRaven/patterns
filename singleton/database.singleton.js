class Database {
  constructor(){
    const instance = this.constructor.instance;
    if (instance) return instance;
    this.constructor.instance = this;
  }

  static getInstance(){
    return new Database();
  }

  query (sql) {
    return sql
  }
}

module.exports = Database