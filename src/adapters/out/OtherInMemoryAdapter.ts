import IDatabasePort from '../../ports/DatabasePort';

export default class OtherInMemoryAdapter implements IDatabasePort {

    memoryDatabase = [];

    async findById (id : number) : Promise<{id : number, name : string, age : number}>{

        const user = this.memoryDatabase.filter((user) => {
            if (user.id == id){
                return user;
            }
        });

        return {id:user[0].id, name:user[0].name, age:user[0].age};

    }

    saveUser(id : number, name: string, age : number) : void {
        this.memoryDatabase.push({id, name, age});
    }
}