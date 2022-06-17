const btn = document.getElementById('btn')
const textErr = document.getElementsByClassName('text-err')
const inputs = document.getElementsByClassName('input')
const inputCont = document.getElementsByClassName("cont-input");
const iconR = document.getElementsByClassName('icon-error')

btn.addEventListener('click', () => { 
    for (let i = 0; i < inputs.length; i++){    
        if (inputs[i].value === '') {
            textErr[i].style.display = "block";
            inputCont[i].style.outline = ".3rem solid hsl(0, 100%, 74%)";
            iconR[i].style.display = "block";
        }
        else {
            textErr[i].style.display = "none";    
            inputCont[i].style.outline = "1px solid hsl(246, 25%, 77%)";
            iconR[i].style.display = "none";
        }  
    }
})
