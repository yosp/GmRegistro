const { request } = require("express");
const sql = require("mssql");

class Db {
  constructor() {
    this.config = {
      user: process.env.SQLUSER || "RegistroUser",
      password: process.env.SQLPAS || "RegistroUser",
      server: process.env.SQLSRV || "10.82.33.71",
      port: 1433,
      options: {
        instanceName: process.env.SQLINT || "MSSQLSERVER",
        database: process.env.SQLDB || "GmRegistro",
        enableArithAbort: true,
      },
    };
    this.setting = `mssql://${this.config.user}:${this.config.password}@${this.config.server}/${this.config.options.database}`;
  }

  async getRegistrados(User, callback) {
    try {
      await sql.connect(this.setting);
      const request = new sql.Request()
      
      request.input('CodigoEmp', sql.Int, User)
      request.execute('Sp_addEmployee', (err, result) => {
        if(err) {
          callback(err, null);
        } else {
          callback(null, result)
        }
      })
    } catch (e) {
      callback(e, null)
    }
  }

}

module.exports = new Db();