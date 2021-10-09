import DatabasePort from '../../ports/DatabasePort';

export default class InMemoryAdapter implements DatabasePort {

    memoryDatabase = [
        {
            id:1,
            name:'Guilherme J',
            age: 21
        },
        {
            id:2,
            name:'Guilherme F',
            age: 18
        }
    ];

    async findById (id : number) : Promise<{id : number, name : string, age : number}>{

        if (!id){ throw "EMPTY_PARAM"; };

        const user = this.memoryDatabase.filter((user) => {
            if (user.id == id){
                return user;
            }
        });

        if (user.length === 0){ throw "DB_NOT_FOUND"; }

        return {id:user[0].id, name:user[0].name, age:user[0].age};

    }

    saveUser(id : number, name: string, age : number) : void {

        if (!id || !name || !age)
            throw "EMPTY_PARAM";

        this.memoryDatabase.push({id, name, age});
    }
}