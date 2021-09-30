function randomcalc(max,min){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerhealth : 100,
            monsterhealth : 100,
            currentround : 0
        }
    },
    computed : {
        monsterbarstyles (){
            return this.monsterhealth + '%';
        },
        playerbarstyles (){
            return this.playerhealth + '%';
        },
        mayusespecialattack(){
            return this.currentround % 3 !== 0;
        }
    },
    methods : {
        attackmonster(){
            this.currentround ++;
            const monsterdmg = randomcalc(12,5);
            this.monsterhealth = this.monsterhealth - monsterdmg;
            this.attackplayer();
        },
        attackplayer (){
            const playerdmg = randomcalc(15,5);
            this.playerhealth = this.playerhealth - playerdmg;
        },
        healplayer(){
            const healing = randomcalc(15,5);
            if(this.playerhealth + healing < 100)
            {
                this.playerhealth = this.playerhealth + healing;
            }
            else{
                this.playerhealth = 100;
                alert('Max health reached');
            }
            this.healmonster();
            
        },
        healmonster(){
            const healing = randomcalc(12,5);
            if(this.monsterhealth + healing < 100)
            {
            
                this.monsterhealth = this.monsterhealth + healing;
            }
            else{
                this.monsterhealth = 100;
                alert('Max health reached');
            }
        },
        specialattack(){
            this.currentround ++;
            const monsterdmg = randomcalc(10,25);
            this.monsterhealth = this.monsterhealth - monsterdmg;
            this.attackplayer();
        }
    }
})

app.mount('#game')