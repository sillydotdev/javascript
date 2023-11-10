// forEach loop 

const languages = ["js", "java", "python", "swift", "rust"]
languages.forEach( function(lang) {    // in forEach loop we don't give the name of the functiom
    // console.log(lang);
    // console.log(languages.indexOf(lang));
} )

// forEach using arrow function
const footballPlayers = ["Messi", "Neymar", "Pedri"]
footballPlayers.forEach( (players) => {    // "players is a variable as a parameter which reperesents each element in the array"
    // console.log(players);
})


// You can declare the function separately as well and use it in forEach loop
function adition(print) {
    // console.log(print);
}
languages.forEach(adition)


// multiple parameters in forEach
languages.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


// Objects in an array
// Iterating objects in an array
const mylanguages = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

mylanguages.forEach( (lang) => {
    console.log(lang.languageFileName);
    console.log(lang.languageName);
    console.log();
} )