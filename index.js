// code your solution here
function saturdayFun(defaultActivity = 'roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`
}
console.log(saturdayFun("bathe my dog"))

function mondayWork(defaultActivity = 'go to the office'){
    return `This Monday, I will ${defaultActivity}.`
}
console.log(mondayWork())

function wrapAdjective(visualflair = "*"){
    return function innerPart(defaultName = "Special"){
            return `You are ${visualflair}${defaultName}${visualflair}!`
    }
}
wrapAdjective("%")("a dedicated programmer");

console.log(wrapAdjective("%")("a dedicated programmer"))