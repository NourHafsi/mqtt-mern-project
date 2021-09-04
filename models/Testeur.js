const mongoose = require('mongoose');

const testeurSchema = new mongoose.Schema({
    applicationID: {
        type: String,
    },
    applicationName: {
        type: String,
    },
    deviceName: {
        type: String,
    },
    devEUI: {
        type: String,
    },
    rxInfo: [{
        gatewayID: {
            type: String,
        },
        uplinkID: {
            type: String,
        },
        name: {
            type: String,
        },
        time: {
            type: Date,
        },
        rssi:  {
            type: Number
        },
        loRaSNR:  {
            type: Number
        },
        location: {
            latitude:  {
                    type: Number
                },
            longitude:  {
                    type: Number
                },
            altitude:  {
                    type: Number
                },
        },
    }],
    txInfo: {
        frequency:  {
                type: Number
            },
        dr:  {
                type: Number
            },
    },
    adr: { type: Boolean },
    fCnt: { type: Number },
    fPort: { type: Number },
    data: { type: String },
    object: { mydata: String },

});

module.exports = mongoose.model('Testeur', testeurSchema);
