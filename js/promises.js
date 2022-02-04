'use strict'

function getGithubUsernames() {
    return fetch('https://api.github.com/users')
        .then(response => response.json())
}

// later on...

getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
    });
}).catch(error => console.error(error));

