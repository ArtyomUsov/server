const { Router } = require("express");
const router = new Router();
const routerAdd = require("./add.route");
const routerCategories = require("./categories.route");
const routerComments = require("./comments.route");
const routerNews = require("./news.route");
const routerUser = require("./user.route");

router.use("/add", routerAdd);
router.use("/categories", routerCategories);
router.use("/comments", routerComments);
router.use("/news", routerNews);
router.use("/user", routerUser);

module.exports = router;