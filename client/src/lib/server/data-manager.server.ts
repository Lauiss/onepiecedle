import data from './db.json'

export default class DataManager {

    constructor(){}
    
    getByName(name: string) {
        return data['characters'].find((character: any) => { character.name === name});
    }

    getById(id: number) {
        return data['characters'].find((character: any) => { character.id === id});
    }

    getOne() {
        return data['characters'][this.getRandomInt(data['characters'].length)];
    }

    getAll() {
        return data['characters'];
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random()* max);
    }
}