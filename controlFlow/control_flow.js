let userRole = "admin"
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
}
else if(userRole==="manager"){
    accessLevel="limited access granted";
}
else{
    accessLevel="no access granted";
}
console.log("Access level:",accessLevel);

let isLoggedIn =true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="welcome admin";
    }
    else{
        userMessage="welcome user";
    }
}
else {
    userMessage="please log in to access the system.";
}
console.log("User message:",userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);