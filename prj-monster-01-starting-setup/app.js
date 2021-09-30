function randomcalc(max,min){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerhealth : 100,
            monsterhealth : 100,
            currentround : 0,
            winner : null,
            logmessages : []
        }
    },
    computed : {
        monsterbarstyles (){
            if(this.monsterhealth <=0){
                return '0%'
            }
            return this.monsterhealth + '%';
        },
        playerbarstyles (){
            if(this.playerhealth <=0){
                return '0%'
            }
            return this.playerhealth + '%';
        },
        mayusespecialattack(){
            return this.currentround % 3 !== 0;
        }
    },
    watch : {
        playerhealth(value){
            if(value <= 0 && this.monsterhealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'monster'
            }
        },
        monsterhealth(value){
            if(value <= 0 && this.playerhealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0 ){
                this.winner = 'player'
            }
        }
    },
    methods : {
        newgame(){
            this.playerhealth = 100,
            this.monsterhealth = 100,
            this.currentround = 0,
            this.winner = null
        },
        attackmonster(){
            this.currentround ++;
            const monsterdmg = randomcalc(12,5);
            this.monsterhealth = this.monsterhealth - monsterdmg;
            this.addlogmessage('player','attack',monsterdmg)
            this.attackplayer();
        },
        attackplayer (){
            const playerdmg = randomcalc(15,5);
            this.playerhealth = this.playerhealth - playerdmg;
            this.addlogmessage('monster','attack',playerdmg)
        },
        healplayer(){
            const healing = randomcalc(15,5);
            if(this.playerhealth + healing < 100)
            {
                this.playerhealth = this.playerhealth + healing;
                this.addlogmessage('player','heal',healing)
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
                this.addlogmessage('monster','heal',healing)
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
        },
        surrender(){
            this.winner = 'monster'
        },
        addlogmessage(who,what,value){
            this.logmessages.unshift({
                actionby : who,
                action: what,
                actionvalue : value
            })
        }
    }
})

app.mount('#game')