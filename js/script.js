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
                    done: 'false',
                }, {
                    text:'fare la spesa',
                    done:'false',
                }, {
                    text:'chiamare commercialista',
                    done:'true',
                }
            ]
        }
    },
    methods: {
        deleteTask(indexOf) {
            this.tasks.splice(indexOf,1);
        },
        addTask() {
            let inputText = document.getElementById('new-task').value;
            if(inputText != ""){
                this.tasks.push({text:inputText,completed:false});
                document.getElementById('new-task').value ="";
            }
        }
    }
}).mount('#app');