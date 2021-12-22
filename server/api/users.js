// api/users.js
const router = require("express").Router();
const {
  models: { User },
} = require("../db");

// matches GET requests to /api/users/
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
// matches POST requests to /api/users/
//router.post("/", function (req, res, next) {
/* etc */
//});
// matches PUT requests to /api/users/:userId
//router.put("/:userId", function (req, res, next) {
/* etc */
//});
// matches DELETE requests to /api/users/:userId
//router.delete("/:userId", function (req, res, next) {
/* etc */
//});

module.exports = router;
