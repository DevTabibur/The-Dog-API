// @ts-nocheck
// basic way
const loadDog = () => {
    fetch(`https://api.thedogapi.com/v1/breeds`)
      .then (res => res.json())
      .then(data => displayDog(data))
};

const displayDog = (dogList) => {
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0, 10);

    for(const dog of first10Data){
     const div = document.createElement('div');
     div.classList.add('column');

        div.innerHTML = `
            <h2 className ="dogHeader">${dog.name}</h2>
            <img style ="width: 400px" src = "${dog.image.url}" />
            <h3>${dog.temperament}</h3>
            <div class="details">
               <h5>Dog Weight:  ${ dog.weight.imperial}</h5>
               <h5>Life Span:  ${ dog.life_span}</h5>
               <h5>Dog temperament:  ${ dog.temperament}</h5> 
            </div>
        `;
        main.appendChild(div);
    }
}
