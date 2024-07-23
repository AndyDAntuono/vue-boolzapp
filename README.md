In allegato trovate il pdf con il brief del progetto che abbiamo letto in classe. Rileggetelo molto attentamente e seguite quello che c'è scritto alla lettera. All'interno del file di brief è presente lo screenshot dell'applicazione. Trovate, sempre in allegato le immagini da utilizzare nel progetto. Io resto a disposizione fino alle 13:00 per eventuali ticket.

Nome Repo: vue-boolzapp
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatt

Consigli utili:
● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
lista dei contatti
● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
● Per gestire le date, può essere utile la libreria Luxon
● La struttura dell’array dei contatti potrebbe avere questa forma:
contacts: [
{
name: 'Michele',
avatar: './img/avatar_1.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Hai portato a spasso il cane?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Ricordati di stendere i panni',
status: 'sent'
},
{
date: '10/01/2020 16:15:22',
message: 'Tutto fatto!',
status: 'received'
}
],
},
{
name: 'Fabio',
avatar: './img/avatar_2.png',
visible: true,
messages: [
{
date: '20/03/2020 16:30:00',
message: 'Ciao come stai?',
status: 'sent'
},
{
date: '20/03/2020 16:30:55',
message: 'Bene grazie! Stasera ci vediamo?',
status: 'received'
},
{
date: '20/03/2020 16:35:00',
message: 'Mi piacerebbe ma devo andare a fare la spesa.',
status: 'sent'
}
],
},
{
name: 'Samuele',
avatar: './img/avatar_3.png',
visible: true,
messages: [
{
date: '28/03/2020 10:10:40',
message: 'La Marianna va in campagna',
status: 'received'
},
{
date: '28/03/2020 10:20:10',
message: 'Sicuro di non aver sbagliato chat?',
status: 'sent'
},
{
date: '28/03/2020 16:15:22',
message: 'Ah scusa!',
status: 'received'
}
],
},
{
name: 'Alessandro B.',
avatar: './img/avatar_4.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Lo sai che ha aperto una nuova pizzeria?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Si, ma preferirei andare al cinema',
status: 'received'
}
],
},
{
name: 'Alessandro L.',
avatar: './img/avatar_5.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Ricordati di chiamare la nonna',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Va bene, stasera la sento',
status: 'received'
}
],
},
{
name: 'Claudia',
avatar: './img/avatar_6.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Ciao Claudia, hai novità?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Non ancora',
status: 'received'
},
{
date: '10/01/2020 15:51:00',
message: 'Nessuna nuova, buona nuova',
status: 'sent'
}
],
},
{
name: 'Federico',
avatar: './img/avatar_7.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Fai gli auguri a Martina che è il suo compleanno!',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Grazie per avermelo ricordato, le scrivo subito!',
status: 'received'
}
],
},
{
name: 'Davide',
avatar: './img/avatar_8.png',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Ciao, andiamo a mangiare la pizza stasera?',
status: 'received'
},
{
date: '10/01/2020 15:50:00',
message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
status: 'sent'
},
{
date: '10/01/2020 15:51:00',
message: 'OK!!',
status: 'received'
}
],
}
]

/*SOLUZIONE*/
1 creo per prima cosa una struttura rigida dell'esercizio all'intero di index.html;
2 creo un container che dividerò successivamente in due col. Nella col di sinistra (col-4) creo una sezione dedicata agli utenti e la col di destra conterrà le chat;
3 nel col di sinistra creo una sezione dedicata agli utenti;
3.1 creo un div deicato all'utente principale (Sofia);
3.2 creo un div dedicato alle opzioni riguardanti le notifiche;
3.3 creo un div contenente un barra della ricerca;
3.4 creo un div contenente una lista degli utenti coinvolti nelle chat (tutti tranne Sofia visto che è l'utente che sta "visualizzando" boolzapp);
4 nel col di destra del container principale creo una sezione dedicata alla chat (a cui darò un altezza fissa visto che anche sul whatsapp originale il contenitore della chat sembra poessedere una proprietà simile)
4.1 creo div dell'iterlocutore (ho preferito creare un altro div anziché usare div utenti per evitare confusione anche se in questo momento non so come questa mia scelta possa influire sul strutturazione del vue);
4.2 creo um div che conterrà il dialogo tra l'utente principale e gli atri utenti (questa sezione la farò diventare "scrollabile" visto che il nummero dei messaggi può essere infinito);
4.3 creo un div che conterrà l'editor(?) dei messaggi eseguibili dall'utente principale;
5 conclusa la replica grafica richiesta dall'esercizio, imposto un v-for da inserire nel div che contiene i contatti. Il v-for itera i contatti e crea un nuovo elemento in base al numero di oggetti dell'array "contacts" presente nel file script.js;
5.1 Il v-for applicato all'array di oggetti contacts dovrà ciclare le informazioni contenute nell chiavi degli oggetti. Nel mio caso si tratta di name (nome dell'utente), avatar (immagine profilo dell'utente), laText e laHours (il primo emette un messaggio conscritto "ultimo messaggio inviato" e il secondo specifica a che ora è stato inviato l'ultimo messaggio inviato dall'utente);
6 Creo a destra sezione contatti la sezione dedicata alla chat;
6.1 specifico attraverso un v-if che la sezione chat apparirà solo se viene selezionato un contatto;
6.2 all'interno della chat creo un div che mostri con quale contatto stia parlando l'utente principale, mostrando ad esempio l'immagine profilo del contatto selezionato;
6.3 sotto al div precedente ne creo un altro conterrà la chat vera e propria tra utenti. Anche questo si mostrerà solo se viene effetivamente selezionato un contatto;
6.3.1 ciclo con v-for i messaggi contenuti dell'array di oggetti "messages" (che a sua volta è collacato nell'array di oggetti "contacts");
6.3.2 imposto attraverso un apposita classe css (.sent) che se il messaggio corrisponde a status.sent, il colore di background che opsita tale messaggio si colori di verde;
6.3.3 (aggiunta personale) Se il cursore si trova sopra ad uno dei contatti (hover), il colore di background del contatto si colora di grigio chiaro;
6.3.4 (aggiunta personale) Se l'utente clicca uno dei contatti (active), il colore di background del contatto si colora di grigio scuro e il testo di colora di bianco (non funziona su tutti contatti, non so il perché);
7 nell'editor dei messaggi del punto 4.3 aggiungo una direttiva v.model che collegherà l'input ad una proprietà, che chiamerò newMessage, nel vue.js
7.1 sempre nell'editor, aggiungo @keyup.enter"sendMessage" accanto al v-model di prima. In questo modo l'utente potrà digitare il messaggio compilato nel campo input premendo il tasto "enter" (o "invio") della propria tastiera;
7.2 nel vue aggiungo un nuovo metodo, sendMessage il quale avrà il compito di aggiungere un nuovo mesaggio, che si aggiungerà all'array degli altri messaggi. Per completezza faccio in modo che data ed ora del nuovo messaggio siano aggiornate;
8 Imposto un v-model nel div che contiene la barra della ricerca;
8.1 Nel htnml, applico un v-mode all'input responsabile delle ricerca e collego al metodo filterContacts;
8.2 Nel vue.js il metodo filterContacts avrà il compito di filtrare gli input dell'utente e confrontarli con i nomi dei contatti;
8.3 Nel metodo filterContacts inserisco un costante searchLower che avrà il compinto di convertitire le digitate dall'utente in minuscole per rendere la ricerca insensibile alle maiuscole e/o minuscole;
8.4 Successivamente uso il metodo filter che crea un nuovo array con tutti gli elementi che passa il test dell'arrow function.
8.4.1 Ecco una spiegazione più dettagliata del punto 8.4:
        
        return this.contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchLower)
        );

    - "this.contacts" è l'array originale dei lista dei contatti;
    - ".filter(contact => ...)" è il metodo filter che agisce su ogni elemento di dell'array contacts
    - "contact.name.toLowerCase()" converte il nome del contatto in lettere minuscole
    - ".includes(searchLower)" verifica se il nome convertito del contatto contiene la stringa di ricerca convertita (searchLower)

8.5 inserisco il metodo filterContacts nel v-for che cicla i contatti (riga 58 del file html). Così facendo ogni volta che l'utente digita delle lettere nella barra della ricerca, il metodo di filtraggio richiama e restituisce l'elenco aggiornato dei contatti secondo il criterio di ricerca.