const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}
  
const name = prompt('Please enter the name for your reservation');

if (name == "Bob" ) {
    if (reservations.Bob.claimed == false) {
        alert('Hi there Bob! Please have a sit')
    }
    else {
        alert('We\'re sorry, the reservation is already claimed')
    }
}
else if (name == "Ted") {
    if (reservations.Ted.claimed == false) {
            alert('Hi there Ted!')
    }
    else {
        alert('We\'re sorry, the reservation is already claimed')
    }
}
else {
    alert('We\'re sorry, there\'s no reservation under your name')
}
