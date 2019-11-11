const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven
const fridgeWorks = kitchen.fridge.works
const raddishExp = kitchen.fridge.items[1].expiryDate
let counter = raddishExp - date
const payment = kitchen.fridge.price/2

if (hasOven) {
    if (fridgeWorks) {
        if (counter > 0) {
            console.log('Everything is working and nothing is Expired!')
        }
        else {
            console.log('Geraldine\'s raddish expired', Math.abs(counter), 'day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.')
        }
    }
    else {
        if (counter > 0) {
            console.log('Nothing is expired! But the fridge doesn\'t work. Geraldine will have to pay', payment ,'NIS to fix it.')
        }
        else {
            console.log('Geraldine\'s raddish expired', Math.abs(counter), 'day ago. Probably because her fridge doesn\'t work. Luckily, she has an oven to cook the raddish in. And she\'ll have to pay', payment, 'to fix the fridge.')
        }
    }
}
else {
    if (fridgeWorks) {
        if (counter > 0) {
            console.log('Nothing is expired. Fridge works, no oven to cook in though :(')
        }
        else {
            console.log('Geraldine\'s raddish expired', Math.abs(counter), 'day ago. Weird, considering her fridge works. Too bad she doesn\'t have an oven to cook the raddish in')
        }
    }
    else {
        if (counter > 0) {
            console.log('Nothing is expired. But the fridge doesn\'t work, so Geraldine will have to pay', payment,'NIS in order to fix it.')
        }
        else {
            console.log('Geraldine\'s raddish expired', Math.abs(counter), 'day ago. Probably because her fridge doesn\'t work. Too bad she doesn\'t have an oven to cook the raddish in. And she\'ll have to pay', payment ,'to fix the fridge.')
        }
    }
}
