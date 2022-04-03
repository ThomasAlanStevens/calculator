function add(num1, num2){
    return Number(num1) + Number(num2)
}

function sub(num1, num2){
    return num1 - num2
}

function mult(num1, num2){
    return num1 * num2}

function div(num1, num2){
    return num1 / num2
}

document.querySelector('.equalsButton').addEventListener('click', equals)
let buttons = document.querySelectorAll('.button')
buttons.forEach((button) => button.addEventListener('click', displayNums))
let num1 = ''

function displayNums(){
    if(this.innerText == 'clear'){
        document.querySelector('.display').innerText = ``
    }
    else if(this.innerText == 'del'){
        document.querySelector('.display').innerText = document.querySelector('.display').innerText.slice(0, document.querySelector('.display').innerText.length -1)
    }
    else if(this.innerText == '*' || this.innerText == '/' || this.innerText == '+' || this.innerText == '-'){
        document.querySelector('.display').innerText += ` ${this.innerText} `
    }
    else{  
        document.querySelector('.display').innerText += `${this.innerText}`
    }
}

function splitOperatorsOperands(){
    let string1 = document.querySelector('.display').innerText
    if(string1.includes('+') == true || string1.includes('-') == true || string1.includes('*') == true || string1.includes('/') == true){
        const operatorOperands = string1.split(' ')
        return operatorOperands
    }
}

function equals(){
    let originalArray = splitOperatorsOperands()
    console.log(originalArray)
    let num1 = originalArray[0]
    let operator = originalArray[1]
    let num2 = originalArray[2]
    for(let i = 3; i < originalArray.length + 3; i = i + 2){
        if(operator == `+`){
            document.querySelector('.display').innerText = add(num1, num2)
            num1 = add(num1, num2)
            operator = originalArray[i]
            num2 = originalArray[i + 1]
        }
        else if(operator == `-`){
            document.querySelector('.display').innerText = sub(num1, num2)
            num1 = sub(num1, num2)
            operator = originalArray[i]
            num2 = originalArray[i + 1]
        }
        else if(operator == `*`){
            document.querySelector('.display').innerText = mult(num1, num2)
            num1 = mult(num1, num2)
            operator = originalArray[i]
            num2 = originalArray[i + 1]
        }
        else if(operator == `/`){
            document.querySelector('.display').innerText = div(num1, num2)
            num1 = div(num1, num2)
            operator = originalArray[i]
            num2 = originalArray[i + 1]
        }
    }

}

//   

