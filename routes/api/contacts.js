const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts")

const {vallidationBody, isValidId}  = require("../../middlewares"
)
const {ctrlWrapper} = require("../../helpers/")

const {schemas} = require("../../models/contact")

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/",  vallidationBody(schemas.addScheme), ctrl.add);

router.delete("/:contactId", isValidId,  ctrlWrapper(ctrl.removeById));

router.put("/:contactId", isValidId, vallidationBody(schemas.addScheme), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", isValidId, vallidationBody(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite))

module.exports = router;
