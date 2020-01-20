const db = require("../dbConfig.js");

function getAllAccounts() {
  return db("accounts");
}

function getAccountById(id) {
  return db("accounts")
    .where({ id: id })
    .first();
}

module.exports = {
  getAllAccounts,
  getAccountById
};
