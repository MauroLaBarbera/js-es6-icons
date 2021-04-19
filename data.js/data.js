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


//CREIAMO UN'ARRAY DI COLORI CHE CI SERVIRANNO POI A COLORARE LE ICONE
const colori = [
        '#da0b0b',
        '#079c1e',
        '#0e44af',
];




/**
 * Milestone 1
 * Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili
 */
const container = document.querySelector('.icone');
// console.log(container);

//STAMPA ICONE SU HTML
//stampaIcone(icons,container);

/**
 * Milestone 2
 * Coloriamo le icone per tipo1
 */

//CREIAMO UNA CONST CHE RIPORTERà UNA FUNZIONE CHE ANDRA' A CAMBIARE IL COLORE DELLE ICONE IN BASE AL LORO TIPO ('TYPE')
const iconeColorate = coloreIcone(icons, colori);
//STAMPIAMO LE NOSTRE ICONE COLORATE
stampaIcone(iconeColorate,container);










/*****************************************************************************
                                 FUNZIONI
 ****************************************************************************/
//FUNCTION STAMPA ICONE
function stampaIcone(icons,container) {
    //CREIAMO UNA VARIABILE 'LET', PERCHE' AL SUO INTERNO AVRA' UN MARKUP VARIABILE CHE ANDREMO AD INSERIRE ALL'INTERNO DEL NOSTRO HTML
    let html = '';

    //LOOPIAMO SULL'ARRAY DELLE ICONE PER GENERARE IL MARKUP
        icons.forEach( (icona) => {
            //CREIAMO UNA CONST CON ALL'INTERNO GLI OGGETTI CONTENUTI NELL'ARRAY CHE ANDREMO POI AD UTILIZZARE PER RENDERE IL DOCUMENTO PIù FLESSIBILE 
            const {name, family, prefix, color} = icona;

            html += 
            `<div class="icona">
            <i class="${family} ${prefix}${name}"
            style="color: ${color}"></i>
            <div class="nome-icona">${name}</div>
            </div>`
        });
        //AGGIUNGIAMO ICONE AL CONTAINER 'ICONS', STAMPANDOLE POI SUL HTML
        container.innerHTML = html;
}


/**
 * FUNCTION GENERARE COLORI IN BASE AL TYPE
 **/

//INSERIAMO UN SECONDO PARAMETRO CHE RAPPRESENTA L'ARRAY DI COLORI CHE ANDRA' APPUNTO A CAMBIARE COLORE ALLE ICONE
function coloreIcone(icons, colori) {
    //CREIAMO UNA CONST PER INVOCARE LA FUNZIONE 'genTipo' SULLA QUALE ANDREMO A LOOPARCI I NOSTRI COLORI
    const tipi = genTipo(icons);
    console.log(tipi);
    console.log(colori);

    //ASSEGNAMO IL COLORE ALLE ICONE IN BASE AL TIPO, TRAMITE UN LOOP CON .map
    const iconeDaColorare = icons.map((icon) =>{
        //CAPIAMO L'INDICE DI POSIZIONE DELL'ELEMENTO IN UN ARRAY TRAMITE UNA CONST E LA PROPRIETA' '.inderxOf' SULL'ARRAY 'icons'
        const indiceTipo = tipi.indexOf(icon.type);
        
        return {
            //RITORNIAMO UN 'CLONE' DELL'OGGETTO CONTENUTO IN 'icons' COSì DA NON MANIPOLARE QUELLO ORIGINALE, E LO FACCIAMO TRAMITE UN SPREAD
            ...icon,
            //ED AGGIUNGIAMO L'OGGETTO 'color', CHE AVRA' LA PROPRIETA' IN BASE AL TIPO DI ICONA, RICAVANDOLO TRAMITE L'INDICE CREATO PRIMA 'colori[indiceTipo]'
            color: colori[indiceTipo], 
        }
    });
    console.log(iconeDaColorare);
    return iconeDaColorare;
}


/**
 * FUNCTION CHE GENERA UN'ARRAY CON ALL'INTERNO I 'type' CHE UTILIZZEREMO PER INDICARE QUALI ICONE CAMBIARE DI COLORE
 **/

function genTipo(icons) {
    //CREIAMO UN NUOVO ARRAY VUOTO CHE POPOLEREMO CON UN LOOP DI TIPO FOREACH
    const tipi = [];
    //LOOP SULL'ARRAY DI 'ICONS'
    icons.forEach( (icon) => {
        //SE GLI OGGETTI CONTENUTI ALL'INTERNO DELL'ARRAY 'tipi'' NON HANNO L'ATTRIBUTO 'type', PUSHIAMOLO DENTRO TRAMITE UN IF
        if (! tipi.includes(icon.type)) {
            tipi.push(icon.type);
        } 
    });
    //RITORNIAMO IL RISULTATO DELLA NOSTRA FUNZIONE
    return tipi;
}