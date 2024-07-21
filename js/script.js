const {createApp} = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '12:00',
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '15:30',
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '15:30',
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '15:30',
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '15:30',
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '15:30',
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    // la sta per "last access"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '15:30',
                },
                
            ],
        };
    },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app');