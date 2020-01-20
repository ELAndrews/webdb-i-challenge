const express = require("express");
const router = express.Router();
const accounts = require("../helpers/account-models");

router.get("/api/accounts", (req, res) => {
  accounts
    .getAllAccounts()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.get("/api/accounts/:id", (req, res) => {
  accounts
    .getAccountById(req.params.id)
    .then(account => {
      console.log(account);
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
