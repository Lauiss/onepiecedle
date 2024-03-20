import DataManager from './data-manager.server';
import CronJob from './node-cron';

class GameManager {

    // public dailyJob = new CronJob('0 0 * * *', this.getDailyOnepiecedle());

    dataManager = new DataManager();
    dailyArray = [];

    getDailyOnepiecedle(){
        let newDailyArray = [];
        let temp;

        for(let i=0; i<3; i++){
            temp = this.dataManager.getOne();
            if((i-1)>=0){
                if(temp === this.dataManager.getOne() || this.dailyArray.some((e) => this.dataManager.getOne())){
                    temp = this.dataManager.getOne();
                }

                if(temp.size === "" || temp.age === "" || this.dailyArray.some((e) => this.dataManager.getOne())){
                    temp = this.dataManager.getOne();
                }
            }
            newDailyArray.push(temp);
        }
        let crew = this.dataManager.getOne()

        if(!crew?.crew){
            crew = this.dataManager.getOne();
        }
        newDailyArray.push(crew.crew);

        return newDailyArray;
    }

    getAll(){
        return this.dataManager.getAll();
    }

    getDailyArray() {
        return this.dailyArray;
    }
}