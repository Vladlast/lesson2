//Задание 1
var letters = [];
var str1ex = "Backend As A Service"
function ex1(string, arr){
    var arrstr = string.split(" ")
    for (var i=0; i<arrstr.length; i++){
        letters.push(arrstr[i].substring(0,1))
    }
    console.log(letters)
    var strletters = ""
    for (var i=0; i < letters.length; i++){
        strletters+=letters[i]
    }
    console.log(strletters)
}

ex1(str1ex, letters)

//Задание 2

function numbordate(param){
    var date = new Date
    
    typeof(param)==="number"? console.log(date.toLocaleString() ): console.log("Неверный формат")
}

console.log("Передаём число")
numbordate(5)
console.log("Передаём не число")
numbordate("string")