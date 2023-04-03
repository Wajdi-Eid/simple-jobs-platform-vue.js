<template>
    <v-layout >
        <v-main style="margin:15px;0 ;">
       
       <RouterView style="margin:auto;" >
      </RouterView>
   </v-main>
   
    <v-app-bar
      color="dark"
      density="compact"
      style="padding:0px 60px ;"
    >
   <v-app-bar-title style="font-family:curvirs ;">FOCAL X</v-app-bar-title>
   
   <template v-slot:append>
    <v-btn
    variant="flat"
    style="margin:0 10px ;" @click="homeResolveLink">
    Home
  </v-btn>
    <v-btn
    variant="flat"
    style="margin:0 10px ;"
    v-if="!logininfo">
    <v-btn @click="loginMove">Login</v-btn>
   </v-btn>

  <v-btn
    variant="flat"
    style="margin:0 10px ;"
    v-if="!logininfo">
    <v-btn @click="registerMove">Risester</v-btn>
  </v-btn>
  <v-btn
    style="margin:0 10px ;"
    v-if="logininfo"
    variant="flat"
    @click="logout">
     Logout
  </v-btn>
      </template>
    </v-app-bar>
</v-layout>


</template>
<script>
import { mapActions, mapState } from 'vuex';

export default{
     name:'navBar',
     
    computed:{
     ...mapState('main',['logininfo'])
    },
    methods:{
      ...mapActions('main',['logout']),
      homeResolveLink(){
        this.$router.push({
            name:'home'
          })
      },
      registerMove(){
        this.$router.push({
            name:'RigesterPage'
          })
      },
      loginMove(){
        this.$router.push({
            name:'LoginPage'
          })
      }
    }
}
</script>