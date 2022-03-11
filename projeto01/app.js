new Vue({
  el: "#app",
  data: {
    showBtns: false,
    playerLife: 100,
    monsterLife: 100,
    resultadoDesc: "RESULTADO",
    color: null
  },

  computed:{
    hasResult(){
      return this.playerLife == 0 || this.monsterLife ==0
    },
    msgResultado(){
      if(this.playerLife == 0){
        this.color = 'red'
        return this.resultadoDesc = 'Monstrou Ganhou!'
      }else{
        this.color = 'green'
        return this.resultadoDesc = 'Você Ganhou!'
      }
    },
  },

  methods:{
    startGame() {
      if(!this.showBtns){
        this.showBtns = true
      }else{
        this.showBtns = false
      }
      this.zerar()
    },

    zerar(){
      this.playerLife = 100
      this.monsterLife = 100
    },

    
    attack(especial){
      console.log(especial, this.getRandom(5, 15))
    },

    getRandom(min, max){
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    }
  },

  watch: {
    
  }

})