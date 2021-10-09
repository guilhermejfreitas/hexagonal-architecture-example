export default class SaveUser {

    adapter : any

    constructor (adapter : any){
        this.adapter = adapter;
    }

    async saveUser(id : number, name : string, age : number){

        if (!id || !name || !age) { throw 'EMPTY_PARAM' };

        if (!this.adapter.saveUser) { throw "CORE_FUNCTION_NOT_EXISTS" };

        return await this.adapter.saveUser(id, name, age);
    }
}