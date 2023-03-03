
const formulaire = document.querySelector('#search-form');
const affichageLyrics = document.querySelector('#lyrics');


function cacherLoupe() {
    document.getElementById('loader').style.display = 'none';
}
function loupe() {
    document.getElementById('loader').style.display = 'block';
}
function deActivateBtn() {
    const btn = document.querySelector('input[type="submit"]');
    btn.disabled = true;
}
function activateBtn() {
    const btn = document.querySelector('input[type="submit"]');
    btn.disabled = false;
}

formulaire.addEventListener('submit', function (event) {
    event.preventDefault();
    //recupération des inputs
    const artist = this.querySelector('input[name=artist]').value;
    const title = this.querySelector('input[name=title]').value;
    //gestion des tirets et des espaces
    const newArtist = artist.split(' ').join('-');
    const newTitle = title.split(' ').join('-');

    loupe();
    deActivateBtn();

    fetch('http://lyrics.api.pierre-jehan.com/music?title=' + newTitle + '&artist=' + newArtist)
        .then(response => response.json())
        .then(data => {
            //faire une condition pour ne rien aficher en cas de mauvaise saisie obliger la saisie de l'artist ET!! de la chanson
            let dataTab = [];
            dataTab = data['hydra:member'];
            for (const d of dataTab) {

                if (newArtist === d.artist && newTitle === d.title) {
                    affichageLyrics.innerText = d.lyrics;
                } else {
                    affichageLyrics.innerText = 'the music you are looking for can\'t be found'
                    break;
                }

            }
            activateBtn();
            cacherLoupe();
        });

});

cacherLoupe();