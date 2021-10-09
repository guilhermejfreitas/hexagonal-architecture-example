import IDatabasePort from '../../ports/DatabasePort';

export default class InMemoryAdapter implements IDatabasePort {

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

        console.log(id);

        const user = this.memoryDatabase.filter((user) => {
            if (user.id == id){
                return user;
            }
        });

        return {id:user[0].id, name:user[0].name, age:user[0].age};

    }

    async saveUser(id : number, name: string, age : number){
        this.memoryDatabase.push({id, name, age});
    }
}