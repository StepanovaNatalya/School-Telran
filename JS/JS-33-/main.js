const box = document.getElementById('box'),  //id
      btns = document.getElementsByTagName('button');  //Tag    //Coll
      circles = document.getElementsByClassName('circle');  //class   //Coll
      squares = document.querySelectorAll('.wrapper .square');    //selector //NL
      greens = document.getElementsByClassName('square'),
      wrapper = document.querySelector('#wrapperTwo');    //element
      title = document.querySelector('h1');

      console.log(box);
      console.log(btns[0]);
      console.log(circles);
      console.log(squares);
      console.log(greens);

      console.log(wrapper);
      wrapper.innerHTML += '<div class="square"></div>';
      console.log(wrapper);
      console.log(squares);
      console.log(greens);

      const elements = Array.from(greens);
      console.log(elements);

      box.style.backgroundColor = 'blue';
      box.style.width = '400px';

      //btns[3].style.borderRadius = '50%';

      ////////// for collection ////////////////////////

      for(btn of btns){
          btn.style.borderRadius = '50%'
      }

      //squares.forEach(el => el.style.cssText = 'background-color: red');

      for(btn of greens){
          btn.style.backgroundColor = 'red'
      }

      for(s of greens){
          s.style.backgroundColor = 'red'
      }

      box.style.cssText = 'background-color: orange; width: 100px;'

      const color = 'violet';
      //alert ('hello!')
      //const color = prompt('type your color');

      circles[0].style = `background-color: ${color}`;

      //title.className = 'title active';

      title.classList.add('active', 'title');
      title.classList.remove('title')  //delete
      title.classList.toggle('active');
      title.classList.toggle('active');

      const div = document.createElement('div');

      div.classList.add('black');
      //wrapper.append(div) //apendChild // in the end
      //wrapper.prepend(div); //add before element

      //greens[1].before(div);
      greens[1].after(div);

      div.innerHTML = '<h2>Hello world!</h2>';
      //div.textContent = '<h2>Hello world!</h2>';

      document.querySelector('.wrapper').lastElementChild.before(div);

      
      /* 
                                      parentElement
                                            |
             previousSiblingElement <-- <element> --> nextSiblingElement
                                            |
                         firstElementChild <-- children --> lastElementChild
      */  

    for(let b of btns){
        b.classList.add('green')
    }
