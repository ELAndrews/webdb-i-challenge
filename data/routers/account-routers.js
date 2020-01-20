const express = require("express");
const router = express.Router();
const accounts = require("../helpers/account-models");
const {
  validateId,
  validateRequestBodyFull,
  validateUniqueName
} = require("../middleware/account-middleware");

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

router.get("/api/accounts/:id", validateId, (req, res) => {
  accounts
    .getAccountById(req.params.id)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.post(
  "/api/accounts",
  validateRequestBodyFull,
  validateUniqueName,
  (req, res) => {
    accounts
      .insertNewAccount(req.body)
      .then(id => {
        res.status(201).json(`Account created with id: ${id}`);
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  }
);

router.put(
  "/api/accounts/:id",
  validateId,
  validateRequestBodyFull,
  validateUniqueName,
  (req, res) => {
    accounts
      .updateAccountById(req.params.id, req.body)
      .then(updated => {
        res.status(202).json("This account has been updated");
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  }
);

router.delete("/api/accounts/:id", validateId, (req, res) => {
  accounts
    .deleteAccountById(req.params.id)
    .then(deleted => {
      res.status(202).json("This account has been deleted");
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
