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

        document.getElementById('btn').addEventListener('click', function(){
            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('repos').innerHTML = `Public repos: ${data.public_repos}`;
        })
    }
}
xhr.send();