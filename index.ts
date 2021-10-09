import InMemoryAdapter from './src/adapters/out/InMemoryAdapter';
import OtherInMemoryAdapter from './src/adapters/out/OtherInMemoryAdapter';
import GetUser from './src/core/GetUser';
import SaveUser from './src/core/SaveUser';

async function run (){
    
    //get user from the first in memory database
    const inMemoryAdapter = new InMemoryAdapter();
    const getUser = new GetUser(inMemoryAdapter);
    const user = await getUser.findById(1);

    console.log(user);

    //set user on the second in memory database
    const otherInMemoryAdapter = new OtherInMemoryAdapter();

    const saveUser = new SaveUser(otherInMemoryAdapter);
    saveUser.saveUser(user.id, user.name, user.age);

    //get user from the second in memory database
    const getUserAgain = new GetUser(otherInMemoryAdapter);
    const same_user = await getUserAgain.findById(1);

    console.log(same_user);
}

run();