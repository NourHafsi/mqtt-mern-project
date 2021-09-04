const Testeur = require("../models/Testeur");

// Create a new testeur
exports.create = (
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
) =>
  new Promise(async (resolve, reject) => {
    const testeur = new Testeur(); // instance  (copie) of the model Testeur
    if (applicationID) {
      testeur.applicationID = applicationID;
    }
    if (applicationName) {
      testeur.applicationName = applicationName;
    }
    if (deviceName) {
      testeur.deviceName = deviceName;
    }
    if (devEUI) {
      testeur.devEUI = devEUI;
    }
    if (rxInfo) {
      testeur.rxInfo = rxInfo;
    }
    if (txInfo) {
      testeur.txInfo = txInfo;
    }
    if (adr) {
      testeur.adr = adr;
    }
    if (fCnt) {
      testeur.fCnt = fCnt;
    }
    if (fPort) {
      testeur.fPort = fPort;
    }
    if (data) {
      testeur.data = data;
    }
    if (object) {
      testeur.object = object;
    }

    return testeur
      .save()
      .then((testeurObj) => { // save the instance of the model Testeur in a success case
        resolve(testeurObj);
      })
      .catch((e) => { // catch the process of the instance creation  of the model Testeur in a failure case
        reject(e.message);
      });
  });

// List all noeuds / all gateways
exports.getPage = (type) =>
  new Promise(async (resolve, reject) => {
    return Testeur.find()
      .then((testeurs) => {
        let details = testeurs[testeurs.length - 1]._doc;
        const result =
          type === "gateways"
            ? testeurs[testeurs.length - 1].rxInfo
            : type === "maps"
            ? details
            : testeurs.map((testeur) => {
                return {
                  ...testeur._doc,
                  modulation: "LORA",
                };
              });
        resolve(result);
      })
      .catch((error) => reject(error.message));
  });

// Get By Id
exports.getById = (id, type) =>
  new Promise(async (resolve, reject) => {
    return Testeur.find()
      .then((testeurs) => {
        const gateway = testeurs.find((testeur) => { // return the first object which contains the demanded id
          return testeur.rxInfo[0]._id.toString() === id.toString();
        });
        const noeud = testeurs.find((testeur) => {
          return testeur._id.toString() === id.toString();
        });
        type === "gatewayInfo"
          ? resolve({ ...gateway.toObject(), modulation: "LORA" })
          : resolve({ ...noeud.toObject(), BandWidth: "125KHz" })
      })
      .catch((error) => reject(error.message));
  });
