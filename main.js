// Buy a big lump of clay
// define buyClay(), no param
//returns object withh no properties 
const buyClay = () => {
    const clayItem = { }
    
    return clayItem
}
let clayThing = buyClay()
console.log(clayThing)

// Use a pottery wheel to turn the clay into a bowl
//Define makePottery(1 param) give it empty object
//add new property shape: "Bowl"
//return object 
const makePottery = (clayObject) => {
    clayObject.Shape = "Bowl"

    return clayObject
}
let makingPots = makePottery(clayThing)
console.log(makingPots)

// Put the bowl into a kiln for a bisque firing
//define bisqueFire(clayObject) add readyForGlazing: true
const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true
    
    return clayObject
}

let fire = bisqueFire(clayThing)
console.log(fire)

// Apply glaze to bowl
const glazePottery = (clayObject) => {
    if (clayObject.readyForGlazing === true) {
        clayObject.glazing = "Midnight Blue"
    } else {
    console.log ("Make sure you bisque fire the pottery before you glaze it.")
}
    return clayObject
} 
let glazed = glazePottery(clayThing)
console.log(glazed)

// Put glazed bowl in kiln for final firing
const finalFiring =(clayObject, temperature) => {
    
    if (temperature > 1200) {
        clayObject.cracked = true
    } else {
        clayObject.cracked =false
    }
    return clayObject
}
const fired = finalFiring(clayThing, 1400)
console.log(fired)

const fired2 = finalFiring(clayThing, 1100)
console.log(fired2)

// 💰💰💰 (haha, yeah right)