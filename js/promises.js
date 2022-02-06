'use strict'

const gitCommit = () => fetch('https://api.github.com/repos/andrew-lange13/codeup-web-exercises/commits', {headers: {
    'authorization': 'GITHUB'}})
    .then(response => response.json());

console.log(gitCommit());




