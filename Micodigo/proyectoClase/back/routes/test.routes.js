var express = require("express");
var router = express.Router();


router.get("/", function (request, response) {
    response.status(404).json({
        status: true,
        message: "TODO ESTA OK",
    });
});

module.exports = router