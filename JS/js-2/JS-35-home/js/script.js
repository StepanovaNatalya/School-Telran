const btnSum = document.querySelector('.btn-sum'),
      plusText = document.querySelector('.plus-text'),

      btnMinus = document.querySelector('.btn-minus'),
      minusText = document.querySelector('.minus-text'),

      btnMulti = document.querySelector('.btn-multi'),
      multiText = document.querySelector('.multi-text')



btnSum.onclick = () =>{
    plusText.textContent = parseInt(document.querySelector('#summe1').value) + parseFloat(document.querySelector('#summe2').value);
} 

btnMinus.onclick = () =>{
    minusText.textContent = document.querySelector('#minus1').value - document.querySelector('#minus2').value;
}

btnMulti.onclick = () =>{
    multiText.textContent = (parseInt(document.querySelector('#multi1').value) / parseInt(document.querySelector('#multi2').value)).toFixed(2);
} 

btnMinus.onclick = () =>{
    minusText.textContent = parseInt(document.querySelector('#divis1').value) / parseInt(document.querySelector('#divis2').value);
}  

