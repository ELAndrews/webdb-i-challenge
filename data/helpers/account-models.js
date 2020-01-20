const db = require("../dbConfig.js");

function getAllAccounts() {
  return db("accounts");
}

function getAccountById(id) {
  return db("accounts")
    .where({ id: id })
    .first();
}

function insertNewAccount({ name, budget }) {
  return db("accounts").insert({ name, budget });
}

function updateAccountById(id, { name, budget }) {
  return db("accounts")
    .where({ id: id })
    .update({ name, budget });
}

function deleteAccountById(id) {
  return db("accounts")
    .where({ id: id })
    .delete();
}

module.exports = {
  getAllAccounts,
  getAccountById,
  insertNewAccount,
  updateAccountById,
  deleteAccountById
};
