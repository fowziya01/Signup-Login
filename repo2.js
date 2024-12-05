function signUp(userName){
 let arr=["Alice","Julie","Bob","John"];
   for(let i=0;i<arr.length;i++) {
    if(arr[i]===userName){
        return `${userName},User Already Registered,Please Login`
}
   }
arr.push(userName);
return "Signup Successful, Please Login";
}
//console.log(signUp("Alice"));
//console.log(signUp("Ziya"));
function login(userName1,password){
    let arr1=["Alice","Julie","Bob","John"];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]===userName1 && password==="Emp@123"){
        return "Login Successful";
    }
}
if(!arr1.includes(userName1)){
    return  "User Not Found, Please Signup";
} else {
    return "Wrong Password";
}
}
console.log(login("Alice", "Emp@123"));    // Output: Login Successful
console.log(login("Bob", "WrongPass"));    // Output: Wrong Password
console.log(login("Charlie", "Emp@123"));  