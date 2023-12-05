const DataManager = require('../data_manager/data-manager.js');

class GameManager {

    dataManager = new DataManager();

    getDailyOnepiecedle(){
        let dailyArray = [];
        let temp;

        for(let i=0; i<3; i++){
            temp = this.dataManager.getOne();
            if((i-1)>=0){
                if(temp === this.dataManager.getOne()){
                    temp = this.dataManager.getOne();
                }

                if(temp.size === "" || temp.age === ""){
                    temp = this.dataManager.getOne();
                }
            }
            dailyArray.push(temp);
        }
        let crew = this.dataManager.getOne()

        if(!crew?.crew){
            crew = this.dataManager.getOne();
        }
        dailyArray.push(crew.crew);

        return dailyArray;
    }

    getAll(){
        return this.dataManager.getAll();
    }
}

module.exports = GameManager