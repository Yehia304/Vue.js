const app = Vue.createApp({
    data() {
        return {
            counter : 0,
            name : '',
            fullname : '',
            lastname : ''
        };
    },
    watch:{
        // name(value){
        //     if(value === '' || this.lastname === ''){
        //             this.fullname = ''
        //     }
        //     else{
        //         this.fullname = value + ' ' + this.lastname;
        //     }
        // }
        // ,
        // lastname(value){
        //     if(value === '' || this.lastname === ''){
        //         this.fullname = ''
        // }
        // else{
        //     this.fullname = this.name + ' ' + value;
        // }   

        // }
    },
    computed:{
        completename(){
            if(this.name === '' || this.lastname === ''){
                    return ''
                    }
           return this.name + ' ' + this.lastname;
        }
    },
    methods: {
        outputfullname(){
            if(this.name === ''){
                return ''
            }
            return this.name + ' ' + 'Ibrahim'
        },
        formsubmit(){
            alert('Submitted');
        },
        confirminput (){
            this.confirmedname = this.name;
        }
        ,
        setName(event,secondname){
            this.name = event.target.value;
        },
        add(num){
            this.counter = this.counter + num;
        },
        remove(num){
            this.counter = this.counter - num;
        },
        resetInput(){
            this.name = "";
        }
    }
});

app.mount('#user-goal');


