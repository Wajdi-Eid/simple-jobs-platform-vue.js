<template>
  <div>

    <navBar></navBar>






    <figure class="text-center ">
      <blockquote class="text-center mb-5">
        <p style="font-family:fantasy ; font-size: xx-large;">Find Job</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        The largest and most active <cite title="Source Title">Companies in the world...</cite>
      </figcaption>
      <figcaption class="blockquote-footer">
        <cite title="Source Title">Find an apportunity to work there.</cite>
      </figcaption>
      <figcaption class="blockquote-footer mt-5 mb-4">
        <cite title="Source Title ">So to find Job or Employee...</cite>
      </figcaption>
    </figure>

    <div class="container ">
      <div class="row">
        <div class="col text-center">
          <button class="btn btn-default px-4 py-1" style="background-color:black ;">
            <router-link style="color: white; font-size: small; font-family: cursive;"
              :to="{ name: 'RigesterPage' }">Create
              Account Now ...</router-link>
          </button>
        </div>
      </div>
    </div>

    <form class="mt-10 mx-auto p-2 " role="search" style="background-color:white ;  width:28% ;
         border:1px black solid;">
      <input class="mx-auto px-3" style="width:100%;border:1px black solid ; " @input="search" v-model="searchText"
        type="search" placeholder="Search">


    </form>
    
      <div class="container-fluid mt-10">

        <div class="row mx-auto text-center">
          <div class="col-sm-4 mx-9 mb-10" v-for="job in jobs" :key="job.title" style="border: 2px black solid;display: inline-block;">
            <v-card >

              <div>
                <v-card-title style="font-size:larg ; font-weight: bold; 
                 border-bottom: 2px black solid;  ">
                  {{ job.title }}
                </v-card-title>

                <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                  {{ job.description }}
                </v-card-title>

                <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                  Specialization : {{ job.specialization }}
                </v-card-title>
                <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                  Experince : {{ job.expert }}
                </v-card-title>
                <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                  Company : {{ job.company }}
                </v-card-title>
                <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                  Email : {{ job.comemail }}
                </v-card-title>
              </div>
              <v-card-actions class="p-0 " style="background-color: black; height: 2px;">

                <v-btn class="mx-auto" color="white" style="font-family:fantasy ;"
                  :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"> more</v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    To Apply/Send CV :
                    <router-link style="color: black; font-size: small; font-family: fantasy;"
                      :to="{ name: 'RigesterPage' }">Create
                      Account Now </router-link>

                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
        </div>


      </div>
    

    <RouterView></RouterView>
  </div>
</template>




<!--<template>
    <div>
        
    class="mx-auto"
    max-width="448"
      -webkit-text-size-adjust: 100%;
    word-break: normal;
    tab-size: 4;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --v-theme-overlay-multiplier: 1;
    --v-theme-background: 255,255,255;
    --v-theme-background-overlay-multiplier: 1;
    --v-theme-surface: 255,255,255;
    --v-theme-surface-overlay-multiplier: 1;
    --v-theme-surface-variant: 66,66,66;
    --v-theme-surface-variant-overlay-multiplier: 2;
    --v-theme-on-surface-variant: 238,238,238;
    --v-theme-primary: 98,0,238;
    --v-theme-primary-overlay-multiplier: 2;
    --v-theme-primary-darken-1: 55,0,179;
    --v-theme-primary-darken-1-overlay-multiplier: 2;
    --v-theme-secondary: 3,218,198;
    --v-theme-secondary-overlay-multiplier: 1;
    --v-theme-secondary-darken-1: 1,135,134;
    --v-theme-secondary-darken-1-overlay-multiplier: 1;
    --v-theme-error: 176,0,32;
    --v-theme-error-overlay-multiplier: 2;
    --v-theme-info: 33,150,243;
    --v-theme-info-overlay-multiplier: 1;
    --v-theme-success: 76,175,80;
    --v-theme-success-overlay-multiplier: 1;
    --v-theme-warning: 251,140,0;
    --v-theme-warning-overlay-multiplier: 1;
    --v-theme-on-background: 0,0,0;
    --v-theme-on-surface: 0,0,0;
    --v-theme-on-primary: 255,255,255;
    --v-theme-on-primary-darken-1: 255,255,255;
    --v-theme-on-secondary: 0,0,0;
    --v-theme-on-secondary-darken-1: 255,255,255;
    --v-theme-on-error: 255,255,255;
    --v-theme-on-info: 255,255,255;
    --v-theme-on-success: 255,255,255;
    --v-theme-on-warning: 255,255,255;
    --v-border-color: 0, 0, 0;
    --v-border-opacity: 0.12;
    --v-high-emphasis-opacity: 0.87;
    --v-medium-emphasis-opacity: 0.6;
    --v-disabled-opacity: 0.38;
    --v-idle-opacity: 0.04;
    --v-hover-opacity: 0.04;
    --v-focus-opacity: 0.12;
    --v-selected-opacity: 0.08;
    --v-activated-opacity: 0.12;
    --v-pressed-opacity: 0.12;
    --v-dragged-opacity: 0.08;
    --v-theme-kbd: 33, 37, 41;
    --v-theme-on-kbd: 255, 255, 255;
    --v-theme-code: 245, 245, 245;
    --v-theme-on-code: 0, 0, 0;
    --v-layout-left: 0px;
    --v-layout-right: 0px;
    --v-layout-top: 48px;
    --v-layout-bottom: 0px;
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    --v-scrollbar-offset: 0px;
    display: flex;
    flex: 1 1 auto;
    z-index: 900;
    position: relative;
    overflow: hidden;
    <v-layout>
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
      <router-link :to="{name:'LoginPage'}">Login</router-link>
     </v-btn>

    <v-btn
      variant="flat"
      style="margin:0 10px ;"
      v-if="!logininfo">
      <router-link :to="{name:'RigesterPage'}">Register</router-link>
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
      <v-main style="margin:40px;0 ;">
       
          <RouterView style="margin:0;70px ;" ></RouterView>
        
      </v-main>
      
    </v-layout>
  
    </div>
</template>-->
<script>
import navBar from './navBar.vue'
import { mapActions, mapState } from 'vuex';

export default {

  name: 'ModuleComponent',
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapState('companies', ['jobs']),
    ...mapState('main', ['logininfo'])
  },
  methods: {
    ...mapActions('companies', ['applySearch']),
    search() {
      this.applySearch(this.searchText)
    },
  }
  /* computed:{
    ...mapState('main',['logininfo'])
   },
   methods:{
     ...mapActions('main',['logout']),
     homeResolveLink(){
       if(this.logininfo.user_type == 'Freelancer'){
         this.$router.push({
           name:'usersModuleComponent'
         })
       }else  if(this.logininfo.user_type == 'Company'){
         this.$router.push({
           name:'companiesModuleComponent'
         })
       }else{
         this.$router.push({
           name:'home'
         })
       }
     }
   }*/
}
</script>
