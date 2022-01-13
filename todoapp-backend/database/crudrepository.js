const mysql = require("mysql");
const config = require("../config.js");
let connection;

const connectionFunctions = {
  connect: () => {
    connection = mysql.createPool(config);
    connection.on("acquire", function (connection) {
      console.log(`Connection ${connection.threadId} acuired`);
    });
  },

  save: (body) => {
    return new Promise(function (resolve, reject) {
      connection.query(
        `INSERT INTO todo (name, description, priority) VALUES (?, ?, ?)`,
        [body.name, body.description, body.priority],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  },

  findAll: (query) => {
    let sqlCommand = "";
    if (query.prio) {
      sqlCommand = `SELECT * FROM todo WHERE priority = ${query.prio}`;
    } else {
      sqlCommand = "SELECT * FROM todo";
    }
    return new Promise(function (resolve, reject) {
      connection.query(sqlCommand, (err, tasks) => {
        if (err) {
          reject(err);
        } else {
          resolve(tasks);
        }
      });
    });
  },

  deleteById: (id) => {
    return new Promise(function (resolve, reject) {
      connection.query("DELETE FROM todo WHERE id = ?", [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = connectionFunctions;
