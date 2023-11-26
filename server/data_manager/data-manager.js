const datas =  require('./db.json');
console.log(datas);
const UtilManager = require('../ressources/utils.js');

class DataManager {

    constructor(){
        this.util = new UtilManager();
    }
    
    // @section : correspond à la section du JS ou éventuellement à la table si on passe sur une DB
    getByName(name,section) {
        return datas[section].find((character) => { character.name === name});
    }
    

    getOne(section) {
        return datas[section][this.util.getRandomInt(datas[section].length)];
    }

    getAll(section) {
        return datas[section];
    }
}

module.exports = DataManager;



