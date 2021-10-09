export default class GetUser {

    adapter : any

    constructor (adapter : any){
        this.adapter = adapter;
    }

    async findById(id : number){
        return await this.adapter.findById(id);
    }
}