export default interface DatabasePort {
    findById(id : number) : Promise<{id, name, age}>;  
    saveUser(id : number, name : string, age : number) : void;
}