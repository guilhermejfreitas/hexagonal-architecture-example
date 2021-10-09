import InMemoryAdapter from './src/adapters/out/InMemoryAdapter';
import OtherInMemoryAdapter from './src/adapters/out/OtherInMemoryAdapter';
import GetUser from './src/core/GetUser';
import SaveUser from './src/core/SaveUser';
import errors from './constants/errors';

async function run (){

    try {
    
        //get user from the first in memory database
        const inMemoryAdapter = new InMemoryAdapter();
        const getUser = new GetUser(inMemoryAdapter);
        const user = await getUser.findById(1);

        //set user on the second in memory database
        const otherInMemoryAdapter = new OtherInMemoryAdapter();

        const saveUser = new SaveUser(otherInMemoryAdapter);
        saveUser.saveUser(user.id, user.name, user.age);

        //get user from the second in memory database
        const getUserAgain = new GetUser(otherInMemoryAdapter);
        const same_user = await getUserAgain.findById(1);

        return same_user;

    }catch(err){

        const error = errors.filter((error) => {
            if (error.code == err){
                return error;
            }
        });

        if (error.length === 0){
            return {code: 'INTERNAL_ERROR', http_status_code: 500};
        }else{
            return error[0];
        }

    }
}

const exec = run();

exec.then(
    function(result) 
    {
        console.log(result)
    }, 
    function(err) 
    {
        console.log(err)
    }
);