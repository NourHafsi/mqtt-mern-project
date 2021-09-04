const express = require("express");
const router = express.Router();
const { getPage, create, getById } = require("../controllers/TesteursController");

router.get("/list", async (req, res) => {
  try {
    const listData = await getPage();
    return res.status(200).json(listData);
  } catch (e) {
    return res.status(e.code >= 100 && e.code <= 600 ? e.code : 500).json({
      error: true,
      message: e.message,
    });
  }
});


router.get("/listOfGateways", async (req, res) => {
  try {
    const gateways = await getPage(req.query.type);
    return res.status(200).json(gateways);
  } catch (e) {
    return res.status(e.code >= 100 && e.code <= 600 ? e.code : 500).json({
      error: true,
      message: e.message,
    });
  }
});

router.get("/info/:id", async (req, res) => {
  const {id} = req.params;
  const {type} = req.query;
  try {
    const result = await getById(id, type)

    return res.status(200).json(result);
  } catch (e) {
    return res.status(e.code >= 100 && e.code <= 600 ? e.code : 500).json({
      error: true,
      message: e.message,
    });
  }
});

router.get("/maps", async (req, res) => {
  try {
    const result = await getPage("maps")

    return res.status(200).json(result);
  } catch (e) {
    return res.status(e.code >= 100 && e.code <= 600 ? e.code : 500).json({
      error: true,
      message: e.message,
    });
  }
});

router.post("/new", async (req, res) => {
  let {
    applicationID,
    applicationName,
    deviceName,
    devEUI,
    rxInfo,
    txInfo,
    adr,
    fCnt,
    fPort,
    data,
    object,
  } = req.body;

  try {
    const newData = await create( // parametres de la body du requete
      applicationID,
      applicationName,
      deviceName,
      devEUI,
      rxInfo,
      txInfo,
      adr,
      fCnt,
      fPort,
      data,
      object
    );
    return res.status(200).json(newData);
  } catch (e) {
    return res.status(e.code >= 100 && e.code <= 600 ? e.code : 500).json({
      error: true,
      message: e.message,
    });
  }
});
module.exports = router;
