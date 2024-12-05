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
console.log(signUp("Alice"));
console.log(signUp("Ziya"));
