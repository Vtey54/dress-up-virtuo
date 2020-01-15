/* global VIRTUO*/
'use strict';



(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <span>${actor.who} : </i><br/> </span>
          <span>.Payment type : ${actor.type} <i class="em em-credit_card" ></i><br/> </span>
          <span>.Amount : ${actor.amount} <i class="em em-dollar" ></i><br/> <br/> </span>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const car = VIRTUO.getCar();
    const begin = document.querySelector('#rental .js-begin').value;
    const end = document.querySelector('#rental .js-end').value;
    const distance = document.querySelector('#rental .js-distance').value;
    const option = document.querySelector('#rental .js-option').checked;
    const actors = VIRTUO.payActors(car, begin, end, distance, option);

    render(actors);

    return;
  });
})();
