const dive = document.createElement("div")
function myDetails() {
    dive.innerHTML = `
        <img src="img_avatar.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
        </div>
`;
}
const button = document.querySelector('#btn')
button.addEventListener('click', function () {
    myDetails();
})


const requestURL = "https://api.github.com/users/malik-kamran-mushtaq";
const xhr = new XMLHttpRequest();    // create an XMLHttpRequest
// xhr.open('GET', "https://api.github.com/users/malik-kamran-mushtaq")
xhr.open('GET', requestURL);
console.log(xhr.readyState);    // This will print the ready state the http request is in(0,1,2,3)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState == 4) {
        const data = JSON.parse(this.response);  // Response is in String. We convert it to JSON which is an object(to get its attributes)
        console.log(typeof data);
        console.log(data);
        console.log(data.public_repos);
        console.log(data.avatar_url);
    }
}
xhr.send();