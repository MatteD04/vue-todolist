//Rifare l'esercizio della to do list.
//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//- text, una stringa che indica il testo del todo,
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no.
const { createApp} = Vue;

createApp ({
    data() {
        return {
            tasks : [
                {
                    text: 'fare i compiti',
                    done: false
                }, {
                    text:'fare la spesa',
                    done: false
                }, {
                    text:'chiamare commercialista',
                    done: true
                },
            ],
            newTodo: ''
        };
    },
    methods: {
        deleteTask(indexOf) {
            this.tasks.splice(indexOf,1);
        },
        addTask() {
            const inputText = {
                text: this.newTodo,
                done: false
            };
            this.tasks.unshift(inputText);

            this.newTodo= '';
        },
    }
}).mount('#app');