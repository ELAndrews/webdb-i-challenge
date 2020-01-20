const accounts = require("../helpers/account-models");

function validateId(req, res, next) {
  accounts
    .getAccountById(req.params.id)
    .then(data => {
      if (data === undefined) {
        res.status(404).json(`ID is invalid`);
      } else {
        next();
      }
    })
    .catch(error => {
      res.status(400).json(`Error validating ID`);
    });
}

function validateRequestBodyFull(req, res, next) {
  if (!req.body.name && !req.body.budget) {
    res.status(400).json("Please give your account a name and budget entry");
  } else if (!req.body.name || !req.body.budget) {
    res
      .status(400)
      .json(
        "You have not provided BOTH a name and budget entry for your account"
      );
  } else {
    next();
  }
}

function validateUniqueName(req, res, next) {
  accounts
    .getUniqueNameArray()
    .then(names => {
      //   const nameArr = names.map(curr => curr.name);
      const checker = names.includes(req.body.name);
      if (checker === true) {
        res.status(400).json("Please provide your account with a unique name");
      } else {
        next();
      }
    })
    .catch(error => {
      res.status(500).json("Error validating unique name entry");
    });
}

module.exports = {
  validateId,
  validateRequestBodyFull,
  validateUniqueName
};
