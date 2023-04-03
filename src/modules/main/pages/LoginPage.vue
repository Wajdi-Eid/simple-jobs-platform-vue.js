<template>
  <div class="mt-16"  >
    <figure class="text-center ">
      <blockquote class="text-center mb-5">
        <p style="font-family:fantasy ; font-size: xx-large;">WELCOME</p>
      </blockquote>
      <figcaption class="blockquote-footer mb-7" style="font-weight:bold ;">
        LOGIN IN <cite title="Source Title" >Your Comfort Zone</cite>
      </figcaption>
     
    </figure>
   
  <v-sheet  class="mx-auto w-25" >
  <v-form ref="form" style="border:1px black solid ; " >



  <v-text-field class=""
  style="background-color:white ;border-top: 3px black solid;height:50px ;"
    v-model="form.email"
    :counter="3"
    :rules=" [ v => !!v || 'email is required',]"
    label="Email"
    required
  ></v-text-field>



  <v-text-field class="my-5"
  style="background-color:white ;border-top: 3px black solid;height:50px ;"
    v-model="form.password"
    :counter="5"
    :rules=" [ v => !!v || 'password is required',]"
    label="password"
    required
  ></v-text-field>




     


  <div class="d-flex flex-column ">
    <v-btn
      color="black"
      class="mt-4"
      block
      @click="LoginMethod"
    >
      LOGIN
    </v-btn>


  </div>
</v-form>
</v-sheet>
</div>
</template>
<script>
import {mapActions, mapState , mapGetters} from 'vuex'
export default{
    name:'LoginPage',
    data: () => ({
      valid: true,
      isLogin:false,
      form : {
            email: '',
            password: '',
            
             },
  
    
    }),
    computed:{
      ...mapState('main',['logininfo']),
    },

    methods: {
      // because of repeate names of functions ..we put main
      ...mapActions('main', ['login']),
      
      async LoginMethod () {
      
        const { valid } = await this.$refs.form.validate()

        if (valid) {
            this.login(this.form).then(res=>{
              alert(res.message)
              
              if(this.logininfo.user_type=="Freelancer"){
                this.$router.push({
              name:'usersModuleComponent'
            })
            }else if(this.logininfo.user_type=="Company"){
              this.$router.push({
              name:'companiesModuleComponent'
            })
            }
          })
           
        }
        
        }
      },
    
    
}
</script>