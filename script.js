let result = document.querySelector('#result-value')
let historyText = document.querySelector('#history-value')
let operator = document.querySelectorAll('.operator')
let number = document.querySelectorAll('.number')
let equalsTo = document.querySelector('.equal')
let clear = document.querySelector('.operator-clear')
let remove = document.querySelector('.operator-remove')


function calculator(){
    let num = []
    //For Every Number
    number.forEach((value,i) => 
        value.addEventListener('click',function(){
            num.push(value.innerHTML)
            result.innerHTML += value.innerHTML
        }))
    //For Every Operator
    let operators = ['-','%','/','*','+']
    operator.forEach((value,i) => {
        value.addEventListener('click',function(){
           if(operators.some(newV => num.slice(-1)[0] === newV) === true){
               return num
           }
           num.push(value.id)
                result.innerHTML += value.innerHTML
            
        })
    })

    //EqualTo Button 
    equalsTo.addEventListener('click',function(){
        if(Number.isInteger(num[0]) === false){
            historyText.innerHTML = '-NaN-'
        }
           historyText.innerHTML = eval(num.join(""))
           num = []
           result.innerHTML = ''
    })

    //Clear Button
    clear.addEventListener('click',function(){
        result.innerHTML = []
        historyText.innerHTML = []
        num = []
    })

    //Remove Button
    remove.addEventListener('click',function(){
       num = num.slice(0,-1)
       result.innerHTML = num.join("").replace(/[*]/g,'x')
       console.log(num)
    })
}
calculator()


