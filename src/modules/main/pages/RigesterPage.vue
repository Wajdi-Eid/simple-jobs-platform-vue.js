<template>
<div >
  <figure class="text-center ">
      <blockquote class="text-center mb-5">
        <p style="font-family:fantasy ; font-size: xx-large;">WELCOME</p>
      </blockquote>
      <figcaption class="blockquote-footer mb-7" style="font-weight:bold ;">
        REGISTER <cite title="Source Title" >To Change Your Life</cite>
      </figcaption>
     
    </figure>
  <v-sheet  class="mx-auto w-25" >
  <v-form ref="form" style="border:1px black solid ; " >
  <v-text-field 
     style="background-color:snow ; height:50px ;"
    v-model="form.name"
    :counter="3"
    :rules=" [ v => !!v || 'Name is required',]"
    label="Name"
    required
  ></v-text-field>


  <v-text-field class="mt-10"
  style="background-color:white ;border-top: 3px black solid;height:50px ;"
    v-model="form.email"
    :counter="3"
    :rules=" [ v => !!v || 'email is required',]"
    label="Email"
    required
  ></v-text-field>



  <v-text-field class="my-10"
  style="background-color:white ;border-top: 3px black solid;height:50px ;"
    v-model="form.password"
    :counter="5"
    :rules=" [ v => !!v || 'password is required',]"
    label="password"
    required
  ></v-text-field>
  


  <v-select class="mb-8"
  style="background-color:white ;height:50px ;border-top: 3px black solid"
        v-model="form.user_type"
        :items="usertypes"
        :rules="[v => !!v || 'usertypes is required']"
        label="Who are you?"
        required
      ></v-select>
     
      <div style="text-align:center ;">
  <label for="formFileSm" class="form-label" style="font-family:fantasy ;">Upload your CV : </label>
  <input class="form-control form-control-sm mx-16 " id="formFileSm" type="file">
</div>


  <div class="d-flex flex-column ">
    <v-btn
      color="black"
      class="mt-4"
      block
      @click="RegisterMethod"
    >
      REGISTER
    </v-btn>


  </div>
</v-form>
</v-sheet>
</div>

</template>
<script>
import {mapActions} from 'vuex'
import navBar from '../navBar.vue'
export default{
    name:'RegisterPage',
    data: () => ({
      valid: true,
    form : {
      name: '',
      email: '',
      password: '',
     
      user_type:''
     
    },
    usertypes : [
        'Freelancer',
        'Company'
      ]
    
    }),

    methods: {
      // because of repeate names of functions ..we put main
      ...mapActions('main', ['register']),
      async RegisterMethod () {
        const { valid } = await this.$refs.form.validate()

        if (valid) {
            this.register(this.form).then(res=>{
              alert(res.message)
            })
            this.$router.push({
              name:'LoginPage'
            })
        }
      },
     
    
    },
}
</script>
<style>
label{
  color: black;
}
</style>

