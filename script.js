/*

Oppgave

1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc
2. console.log de forskjellige elementene i arrayet
2. lag et <p> element og legg til en av elementene fra array i <p>


Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. legg til Fontenehuset Bærum i objektet

Fontenehuset Bærum
Industriveien 2, 1337 Sandvika
https://www.fontenehuset-baerum.no/ 

4. lag en a link i HTML med en href som inneholder nettsiden til Fontenehuset Trondheim


*/
/* listeting */
/*oppg1*/
let instrument = ['ocarina', 'gitar', 'piano', 'keybaord'];


/*oppg2*/
console.log(instrument[0]);

/*oppg3*/
const main = document.querySelector("main");
const p = document.createElement("p");

console.log(`main: ${main}
	    p: ${p}`);

p.textContent = instrument[0];
main.appendChild(p);

/* handleliste
 * hente inn element*/
const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');
const liste = document.querySelector('#liste');

let handleliste = ['melk', 'brød'];

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let input = document.querySelector('#input').value;
    handleliste.push(input);
    liste.textContent = handleliste;
});

removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    handleliste.pop();
    liste.textContent = handleliste;
});


/*object*/
let person = {
    name: 'Frank',
    city: 'New york'
}

console.log(person.name);

const fontenehus = [
  {
    navn: 'Fontenehuset Oslo Øst',
    adresse: 'Hagegata 25, 0653 OSLO',
    nettside: 'https://www.fontenehuset-osloost.no/',
  },
  {
    navn: 'Fontenehuset Oslo Sentrum',
    adresse: 'Holbergs gate 5, 0166 Oslo',
    nettside: 'https://www.fontenehuset.no/',
  },
  {
    navn: 'Fontenehuset Trondheim',
    adresse: 'Dronningens gate 15, 7011 Trondheim',
    nettside: 'https://www.fontenehuset-trondheim.no/',
  },
  {
    navn: 'Fontenehuset Asker',
    adresse: 'Knud Askers vei 26B',
    nettside: 'https://www.fontenehusetasker.no/',
  },
  {
    navn: 'Fontenehuset Ålesund',
    adresse: 'Lihauggata 8B, 6003 Ålesund',
    nettside: 'https://www.fontenehuset-alesund.no/',
  }
];

console.table(fontenehus, ['navn', 'adresse']);

/*fontenehus array*/

/*Oppg1*/
console.log(`navn 4. fontenehus: ${fontenehus[3].navn}`);

/*Oppg2*/
console.log(`adresse fontenehus Oslo øst: ${fontenehus[0].adresse}`);

/*Oppg3*/
fontenehus.push(
    {
	navn: 'Fontenehuset Bærum',
	Idresse: 'Industriveien 2, 1337 Sandvika',
	nettside: 'https://www.fontenehuset-baerum.no/' 
    }
);

/*Oppg4*/
const link = document.createElement("a");
link.href = fontenehus[2].nettside;
link.textContent = `nettside ${fontenehus[2].navn}`

main.appendChild(link);









