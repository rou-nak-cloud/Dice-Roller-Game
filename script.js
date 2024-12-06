let username = window.prompt('username');

if(username === "admin"){
    window.alert('Welcome, Admin! Access granted.')
    // window.location.href = '/javascript/DiceRoller/index.html';
}
else if(username === "scoda"){
    let password = window.prompt('Password');

    if(password === "killa"){
        window.alert('Welcome, Scoda! Access granted.');
        // window.location.href = '/javascript/DiceRoller/index.html';
    }
    else{
        window.alert('Incorrect password! Access denied.');
    }
}
else{
    window.alert('Invalid username! Access denied.');
}


function rollDice(){
    const numofDice = document.getElementById('numofDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(i=1; i<=numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);
        values.push(value);
        images.push(`<img src="diceImg/${value}.png">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}