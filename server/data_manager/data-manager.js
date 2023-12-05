const datas =  require('./db.json');
const UtilManager = require('../ressources/utils.js');

class DataManager {

    constructor(){
        this.util = new UtilManager();
    }
    
    getByName(name) {
        return datas['characters'].find((character) => { character.name === name});
    }

    getOne() {
        return datas['characters'][this.util.getRandomInt(datas['characters'].length)];
    }

    getAll() {
        return datas['characters'];
    }
}

module.exports = DataManager;



