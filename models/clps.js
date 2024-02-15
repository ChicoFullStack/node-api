const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Maq = new Schema({
    TEMPERATURA: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    INICIO_PROCESS_W: {
        type: String,
        required: true
    },
    PRODUCAO: {
        type: String,
        required: true
    },
    MAQ_LIG_DES_B: {
        type: String,
        required: true
    },
    FIM_PROCESS_B: {
        type: String,
        required: true
    },
    INICIO_PROCESS_B: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    FIM_PROCESS_W: {
        type: String,
        required: true
    },
    MAQ_LIG_DES_W: {
        type: String,
        required: true
    }

},
{
    timestamps: true,
});

module.exports = mongoose.model('maq', Maq);