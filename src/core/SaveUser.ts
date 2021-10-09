export default class SaveUser {

    adapter : any

    constructor (adapter : any){
        this.adapter = adapter;
    }

    async saveUser(id : number, name : string, age : number){
        return await this.adapter.saveUser(id, name, age);
    }
}