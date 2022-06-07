// code your solution here
function saturdayFun(sport = "roller-skate"){
    return `This Saturday, I want to ${sport}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adjective = "special"){
    return function(word = "*"){
        return `You are ${adjective}${word}${adjective}!`
    }
}
