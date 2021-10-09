export default class GetUser {

    adapter : any

    constructor (adapter : any){
        this.adapter = adapter;
    }

    async findById(id : number){

        if (!id) { throw 'EMPTY_PARAM'};

        if (!this.adapter.findById) { throw "CORE_FUNCTION_NOT_EXISTS" };
        
        return await this.adapter.findById(id);
        
    }
}