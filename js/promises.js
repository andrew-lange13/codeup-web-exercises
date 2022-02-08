'use strict';

$(function () {
    function gitLastCommit(user) {
        return fetch(`https://api.github.com/users/${user}/events/public`, {
            headers: {
                'authorization': 'GITHUB'
            }
        }).then(response => response.json())
            .then(users => {
                users.forEach(userObj => {
                    console.log(userObj.created_at)
                })
            });
    }


    console.log(gitLastCommit("andrew-lange13"));
})();




