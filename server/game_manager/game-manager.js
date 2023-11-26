const DataManager = require('../data_manager/data-manager.js');

class GameManager {

    dataManager = new DataManager();

    getDailyOnepiecedle(){
        let dailyArray = [];
        let temp;

        for(let i=0; i<3; i++){
            temp = this.dataManager.getOne('characters');
            if((i-1)>=0){
                if(temp === this.dataManager.getOne('characters')){
                    temp = this.dataManager.getOne('characters');
                }
            }
            dailyArray.push(temp);
        }

        dailyArray.push(this.dataManager.getOne('jollyroger'));

        return dailyArray;
    }

    getAll(section){
        return this.dataManager.getAll(section);
    }
}

module.exports = GameManager