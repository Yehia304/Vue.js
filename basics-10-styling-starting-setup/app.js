const app = Vue.createApp({
    data(){
        return {
            boxSelectedA: false,
            boxSelectedB: false,
            boxSelectedC: false,
        }
    },
    methods: {
        boxSelected(box){
            if(box === 'A'){
                if(this.boxSelectedA === false){
                    this.boxSelectedA = true;
                }
                else{
                    this.boxSelectedA = false;
                }
                    
            }
            else if(box === 'B'){
                if(this.boxSelectedB === false){
                    this.boxSelectedB = true;
                }
                else{
                    this.boxSelectedB = false;
                }
            }
            else if(box ==='C'){
                if(this.boxSelectedC === false){
                    this.boxSelectedC = true;
                }
                else{
                    this.boxSelectedC = false;
                }
            }
        }
    }
})

app.mount('#styling')