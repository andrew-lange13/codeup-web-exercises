'use strict';

(function () {
    const gitCommit = () => fetch('https://api.github.com/repos/andrew-lange13/codeup-web-exercises/commits', {headers: {
            'authorization': 'GITHUB'}})
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repoObj => {
                console.log(repoObj.commit.committer.date)
            })
        })


    console.log(gitCommit());
})();




