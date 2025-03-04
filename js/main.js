const { createApp } = Vue;

createApp({

    data() {
        return {
            // data
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
            ],

            selectedChat : '0',

            okResponse : {
                date: 'x',
                message: '',
                status: 'received'
            },

            keyboardInputMSG : '',

            searchContactInput : '',

            contactreplies : [
                'Basta non ci voglio uscire con te',
                'Smetti di scrivermi ti ho detto',
                'Vedi che ti blocco',
                'Ora basta, chiamo la polizia',
                'Attento a cosa dici',
                'Posso diventare pericoloso se continui ad assillarmi',
                'Ho amicizie in Cosa Nostra',
                'Pensi che mi diverta a dirti di smettere di scrivermi?',
            ],

            


        };
    },
    methods: {
        // functions

        // funzione per aprire la chat cliccando sul contatto
        openChat(index){
            this.selectedChat = index;
            console.log('la chat selezionata è la n:'+this.selectedChat)
        },

        // funzione per inviare un messaggio e per la risposta automatica del contatto
        sendMessage(){
            // creo l'oggetto newMessage da pushare nell'array
            if(this.keyboardInputMSG.length > 0 && this.trimString(this.keyboardInputMSG) === true){
                let newMessage = {
                    date: 'x',
                    message: this.keyboardInputMSG,
                    status: 'sent'
                };
                // pusho l'oggetto
                this.contacts[this.selectedChat].messages.push(newMessage);
                this.keyboardInputMSG = '';

                // imposto la risposta dell'utente 
                setTimeout(() => {
                    this.okResponse.message = this.contactreplies[this.randomreplies(8)];
                    this.contacts[this.selectedChat].messages.push({...this.okResponse});
                }, 2000);

            }
        },


        // BONUS FUNCTIONS

        // elimino il messaggio
        deleteMessage(){
            
        },

        // random replies
        randomreplies(max){
            return Math.floor(Math.random() * max);
        },

        // check stringa vuota
        trimString(str){
            return str.trim().length > 0;
        },

        // log perpetui 
        logthis(time, thingtolog){
            setInterval(() => {
                console.log(thingtolog)
            }, time);

        },



    },
    computed:{
        // computed
        
        // funzione per la ricerca contatti 
        filteredContacts() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchContactInput.toLowerCase());
            });
        }
        
        
    },
    mounted(){
        // mounted
        this.logthis(20000, this.filteredContacts);
        
    }
}).mount('#app');
