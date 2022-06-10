// code your solution here

function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
    
}
saturdayFun("swim")


let mondayWork = function(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
mondayWork("code")

function wrapAdjective(param = "*"){
    return function(word = "special"){
        return(`You are ${param}${word}${param}!`)
    }
}
wrapAdjective()()