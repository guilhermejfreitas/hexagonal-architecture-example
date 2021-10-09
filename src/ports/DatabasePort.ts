export default interface DatabasePort {
    findById(id : number) : Promise<{id : number, name : string, age: number}>;  
    saveUser(id : number, name : string, age : number) : void;
}