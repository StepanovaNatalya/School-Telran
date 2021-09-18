const input = document.querySelector('#date');
      btn = document.querySelector('#data-btn');

      let id;

btn.onclick = () =>{
      if(id!= null){
            clearInterval(id);
      }
      const date = input.value.split('.').reverse().join('/');
      if(!date) return
      const deadline = new Date(date);
      id = setInterval(renderDateTimer, 1000, deadline)
}      

function renderDateTimer(date){
      
      const timeLeft =date - new Date();
      if(timeLeft < 0){
            clearInterval(id);
            document.querySelector('.container').innerHTML = '<h2>time is over</h2>';
      }else{ 

      const days = Math.floor(timeLeft / (1000*24*60*60)),
            hours = Math.floor((timeLeft / (1000*60*60))%24),
            minutes = Math.floor((timeLeft / (1000*60))%60),
            seconds = Math.floor((timeLeft / (1000))%60);

      const container = document.querySelector('.cont');
      container.innerHTML = '';     
       

      console.log(date); //'dd.mm.2021' -> 2021-mm-dd  (reverse)
      // // new Date(2021, 2, 21)
      
      //const timeLeft = deadline - new Date();
      const dateTimer = document.createElement('div');
      dateTimer.classList.add('.container');
      dateTimer.innerHTML = `
      <div class="day">
         <h1>${days}</h1>
         <p>days</p>
      </div>
      <div class="hours">
          <h1>${hours}</h1>
          <p>hours</p>
      </div>
      <div class="minutes">
          <h1>${minutes}</h1>
          <p>minutes</p>
      </div>
      <div class="seconds">
          <h1>${seconds}</h1>
          <p>seconds</p>
      </div>`
      container.append(dateTimer)
}
}