const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    //la sta per "last acess"
                    laText: 'Ultimo messaggio inviato',
                    laHours: '12:00',
                }
            ]
        }
    }
}).mount('#app');