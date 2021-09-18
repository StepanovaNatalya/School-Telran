let count = 0;

const title = document.querySelector('h2')



title.onclick = ((e)=>{
   e.target.classList.toggle('red')
})

const mouseOverHandler = ()=>{
    title.style.color = 'green'
    if(count >= 10){
        title.removeEventListener('mouseover', mouseOverHandler)
    }
}

title.addEventListener('mouseover', mouseOverHandler)

title.addEventListener('mouseout', ()=>{
    title.style.color = 'black'
})

document.onclick = (()=>{
    count++;
    console.log(count)
})