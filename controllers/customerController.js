const db = require("../config/db.manager");

exports.getAllCustomers = function (req, res) {
  const customers = db.getSalesProducts().then((results) => {
    console.log(results);
    res.status(200).json({
      status: "successful",
      data: results.recordsets[0],
    });
  });
};
