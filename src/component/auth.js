import Data from '../json/user.json'
export default class Auth {
    constructor(props){
        this.login=this.login.bind(this);
    }

    login(username,password){
        if(Data.username===username && Data.password===password){
            let res={"status":true,"data":Data.profiles}
            res.data.username = Data.username;
            return Promise.resolve(res);
        }else{
            let res={"status":false}
            return Promise.resolve(res);
        }
    }



}