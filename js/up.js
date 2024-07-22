`use strict`


let min = document.querySelector('#min');
let max = document.querySelector('#max');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener('click', ()=>{
    let minVal = +min.value,
    maxVal = +max.value;

    function error(){
          result.parentElement.classList.add('error')
        result.parentElement.classList.remove('success')
        result.textContent = 'ERROR'
    }

    function success(){
        result.parentElement.classList.add('success')
      result.parentElement.classList.remove('error')
  }


    if (minVal == '' || maxVal == ''){
       error()
       alert('Min va Max Bo`sh bo`lmasligi kerak')
    }
    else if (minVal > maxVal){
        error();
        alert('Min maxdan katta bulmasligi kerak');
        
    }
    else if (minVal <= 0 || maxVal <= 0){
        error();
        alert('Manfiy son kiritib bulmaydi');
        
    }
    else if (minVal === maxVal){
        error();
        alert('Min va Max teng bulmasligi kerak');
    }   
    else if (minVal < maxVal){
        result.textContent = random(minVal, maxVal)
        result.parentElement.classList.add('success')
        result.parentElement.classList.remove('error')
    }
})