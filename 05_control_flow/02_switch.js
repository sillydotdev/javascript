// switch and break statement in javascript
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;                  // if you don't use break, the code after the correct statement will also be execute
    case 3:                     // till default statement, default is not executed in that case as well
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default");
        break;
}

