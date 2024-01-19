

const length=100

export let UserList=[length]
export class User{
    constructor(Mail,Login,Password)
     {
    this.Mail = Mail;
    this.Login = Login;
    this.Password = Password;
  }

}


export function CheckUser(User,Password){
    for(let i=0;i<UserList.length;i++){
if(UserList[i].Mail||UserList[i].Login==User){
    if(UserList[i].Password==Password){
        return 1
    }
    else{
        return 0
    }
}else{
    return 2
}
    }

}