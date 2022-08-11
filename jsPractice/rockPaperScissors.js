function rockPaperScissors(){
    let action = ['rock', 'paper', 'scissors'];
    let optimus = action[Math.floor(Math.random() * 3)];
    let spaceUnicorn = action[Math.floor(Math.random() * 3)];
    // console.log(optimus);
    // console.log(spaceUnicorn);
    console.log("optimus played " + optimus + " and space unicorn played " + spaceUnicorn)

}

rockPaperScissors();
