const app = Vue.createApp({
  data() {
    return { 
      goalentered : '',
      goals : []
     };
  },
  methods: {

    addgoal(){
    this.goals.push(this.goalentered)
    },
    removegoal(index){
      this.goals.splice(index,1)
    }
   
  }
});

app.mount('#user-goals');