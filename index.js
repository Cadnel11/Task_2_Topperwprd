/*const shadowedText = document.getElementById('shadowed-text');

// Séparation du texte en mots et lettres, ajout de chaque lettre dans une balise span et ajout d'un espace entre chaque mot
const textContent = shadowedText.textContent;
const words = textContent.split(' '); // Séparation en mots
const shadowedWords = words.map(word => {
    const wordContainer = document.createElement('span');
    word.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        wordContainer.appendChild(span);
    });
    const space = document.createElement('span');
    space.textContent = ''; // Ajout d'un espace entre les mots
    wordContainer.appendChild(space);
    return wordContainer;
});

// Remplacer le texte original par les mots et lettres dans des balises span
shadowedText.innerHTML = '';
shadowedWords.forEach(word => {
    shadowedText.appendChild(word);
});

shadowedText.style.wordSpacing = '8px'
*/

const screenWidth = window.screen.width;
const nav = document.querySelector('header nav')
const menu = document.querySelector('.menu .image')
const header = document.querySelector('header')

if (screenWidth <= 500) {
    nav.style.display = 'none'
    console.log('La largeur de l\'écran est de 500px');
    menu.addEventListener('click', () => {
        menu.style.display = 'none'
        nav.style.display = 'block'
        menu.style.transition = '5s'
        nav.style.left = '24rem'
        //nav.style.transition = '10s'  
    })
    header.addEventListener('click', ()=>{
        menu.style.display = 'block'
        nav.style.display = 'none'
    })
    
}if(screenWidth <=300)
{
    nav.style.display = 'none'
    console.log('La largeur de l\'écran est de 500px');
    menu.addEventListener('click', () => {
        menu.style.display = 'none'
        nav.style.display = 'block'
        menu.style.transition = '5s'
        nav.style.left = '12.8rem'
        nav.style.width = '6rem'
    })
    header.addEventListener('click', ()=>{
        menu.style.display = 'block'
        nav.style.display = 'none'
    })
}
 else {
    console.log('La largeur de l\'écran n\'est pas de 500px');
}

