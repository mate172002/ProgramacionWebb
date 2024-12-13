var express = require("express");
var router = express.Router();

/* POST METHOD CREATE */
router.post("/", function (request, response) {
    response.status(200).json({
        status: true,
        message: "SIU",
    });
});

module.exports = router