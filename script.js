let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let result = "";
let arr = Array.from(buttons);

//Flag to track if the last input was on operator
let lastInputWasOperator = false;

arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        buttonText = e.target.innerHTML;

        //Check if the button pressed is an operator

        if(buttonText.match(/[+\-*/%]/)){
            if (lastInputWasOperator){
                return;
            }
            lastInputWasOperator = true;
        } else {
            lastInputWasOperator = false;
        }

        if(buttonText === '='){
            {
                try{
                    result = eval(result);
                    input.value = result;
                }
                catch{
                    input.value = 'Error';
                }
            }
        }

        else if(e.target.innerHTML === 'AC'){
            result = "";
            input.value = result;  
        }

        else if(e.target.innerHTML == 'DLE'){
            result = result.slice(0,-1);
            input.value = result;  
        }

        else{
            result += e.target.innerHTML;
            input.value = result;
        }
    })
})

