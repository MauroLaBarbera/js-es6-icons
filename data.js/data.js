const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


/**
 * Milestone 1
 * Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili
 */
const container = document.querySelector('.icone');
// console.log(container);

//STAMPA ICONE SU HTML
stampaIcone(icons,container);


/*****************************************************************************
                                 FUNZIONI
 ****************************************************************************/

function stampaIcone(icons,container) {
    //CREIAMO UNA VARIABILE 'LET', PERCHE' AL SUO INTERNO AVRA' UN MARKUP VARIABILE CHE ANDREMO AD INSERIRE ALL'INTERNO DEL NOSTRO HTML
    let html = '';

    //LOOPIAMO SULL'ARRAY DELLE ICONE PER GENERARE IL MARKUP
        icons.forEach( (icona) => {
            //CREIAMO UNA CONST CON ALL'INTERNO GLI OGGETTI CONTENUTI NELL'ARRAY CHE ANDREMO POI AD UTILIZZARE PER RENDERE IL DOCUMENTO PIù FLESSIBILE 
            const {name, family, prefix} = icona;

            html += 
            `<div class="icona">
            <i class="${family} ${prefix}${name}
            style="color: #333"></i>
            <div class="nome-icona">${name}</div>
            </div>`
        });
        //AGGIUNGIAMO ICONE AL CONTAINER 'ICONS', STAMPANDOLE POI SUL HTML
        container.innerHTML = html;
}