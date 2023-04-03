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



    <form class="mt-10 mx-auto p-2 " role="search" style="background-color:white ;  width:28% ; ">
      <input class="mx-auto px-3" style="width:100%;border:1px black solid ; " @input="search" v-model="searchText"
        type="search" placeholder="Search">


    </form>


    <div class="container mt-16 mx-auto">

      <div class="row mx-auto text-center">

        <div class="col-md-8 mx-10 mb-10" v-for="item in jobs" :key="item.title"
          style="border: 2px black solid;width: 350px; display: inline-block;"
          :class="{ 'bg-green': item?.users?.find(item => item.email == logininfo.email)?.isAccepted }">
          <v-card>

            <div>
              <v-card-title style="font-size:larg ; font-weight: bold; 
             border-bottom: 2px black solid;  ">
                {{ item.title }}
              </v-card-title>

              <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                {{ item.description }}
              </v-card-title>

              <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                Specialization : {{ item.specialization }}
              </v-card-title>
              <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                Experince : {{ item.expert }}
              </v-card-title>
              <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                Company : {{ item.company }}
              </v-card-title>
              <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
                Email : {{ item.comemail }}
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
                  <v-btn v-if="!item?.users?.find(item => item.email == logininfo.email)" style="margin: 0 10px;"
                    variant="flat" color="green" @click="applyMethod(item)" v>
                    Apply
                  </v-btn>

                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>

      </div>

    </div>



    <RouterView></RouterView>
  </div>
  <!--<div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Job title
          </th>
          <th class="text-left">
            Job Description
          </th>
          <th class="text-left">
            Job Specialization
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in jobs" :key="item.title"
          :class="{ 'bg-green': item?.users?.find(item => item.email == logininfo.email)?.isAccepted }">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.specialization }}</td>
          <td>
            <v-btn v-if="!item?.users?.find(item => item.email == logininfo.email)" style="margin: 0 10px;" variant="flat"
              color="warning" @click="applyMethod(item)">
              Apply
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>-->
</template>    
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'ModuleComponent',
  data() {
    return {
    }
  },
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapState('companies', ['jobs']),
    ...mapState('main', ['logininfo'])
  },
  methods: {
    ...mapActions('companies', ['apply']),
    applyMethod(item) {
      console.log(item.title);
      const data = { userEmail: this.logininfo.email, jobId: item.id };

      this.apply(data).then(() => {
        alert('you have successfully applied')
      })
    }
  }
}
</script>
<style>
.bg-green {
  background-color: rgba(0, 128, 0, 0.367);
}
</style>