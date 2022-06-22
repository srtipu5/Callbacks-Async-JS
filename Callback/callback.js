const users = [];
const registerUser = (user)=>{
     if(!user.username){
         console.log("Please enter your username");
     }else if(!user.password){
        console.log("Please enter your password");
     }else{
        const newUser = {
             username: user.username,
             password:user.password
        }
        users.push(newUser);
        console.log(`${user.username} has been successfully registered`);
    }

};

const loginUser = (loginData,callback)=>{
    if(!loginData.username){
        console.log("Please enter your username");
    }else if(!loginData.password){
        console.log("Please enter your password");
    }else{
        setTimeout(()=>{
            if( users.length > 0 && users[0].username === loginData.username && users[0].password === loginData.password){
                console.log(`${loginData.username} has been successfully logged in`);
                callback(loginData)
            }else{
                console.log('Username or password wrong');
            }
        },5000);
    }
};

const detailsUser = (loginData)=>{
    console.log(`Welcome ${loginData.username}`);
    console.log(users);
};

const registrationData = {
    username:"srtipu5@gmail.com",
    password: "123456"
};

const loginData = {
    username:"srtipu5@gmail.com",
    password: "123456"
};


registerUser(registrationData);
loginUser(loginData,(loginData)=>{
    detailsUser(loginData);
});
