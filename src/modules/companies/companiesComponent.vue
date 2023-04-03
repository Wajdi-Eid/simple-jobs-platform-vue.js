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
  <input class="mx-auto px-3" style="width:100%;border:1px black solid ; " @input="search" v-model="searchText" type="search"
    placeholder="Search">


</form>
<v-row style="margin: 20px 0" justify="center">
      <v-dialog v-model="dialog" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn color="black" v-bind="props">
            Add new
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.title" :rules="[v => !!v || 'title type is required']"
                    label="Title"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.description" :rules="[v => !!v || 'description type is required']"
                    label="Description"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select  v-model="form.specialization" :items="specializations"
                    :rules="[v => !!v || 'specialization type is required']" label="Item" required></v-select>
                  
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field class="mx-auto" v-model="form.expert" :rules="[v => !!v || 'Expert years is required']"
                    label="Experience"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field  v-model="form.comemail" :rules="[v => !!v || 'Email is required']"
                    label="Email"></v-text-field> </v-col>
               
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              Close
            </v-btn>
            <v-btn v-if="!isEdit" color="blue-darken-1" variant="text" @click="newMethod">
              Save
            </v-btn>
            <v-btn v-if="isEdit" color="blue-darken-1" variant="text" @click="updateMethod">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

   
    <div class="container mt-16 mx-auto">
     
    <div class="row mx-auto text-center" >
      
    <div class="col-md-8 mx-10 mb-10" v-for="item in jobs" :key="item.title" style="border: 2px black solid;width: 350px; display: inline-block;" >
      <v-card >
        
     <div >
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
        Experince :  {{ item.expert }}
        </v-card-title>
        <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
        Company :  {{ item.company }}
        </v-card-title>
        <v-card-title style="font-size:medium ;border-bottom: 1px black solid;">
        Email :  {{ item.comemail }}
        </v-card-title>
      </div>
        <v-card-actions class="p-0 " style="background-color: black; height: 2px;">

          <v-btn class="mx-auto" color="white" style="font-family:fantasy ;" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"> more</v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text >
              
              <v-dialog v-model="appliersDialog" persistent width="1024">
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  User
                </th>
                <th class="text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in jobOpened.users" :key="item">
                <td>{{ item.email }}</td>
                <v-btn style="margin: 6px 10px;" variant="flat" color="success" @click="acceptAppliers(item)">
                  Accept
                </v-btn>
              <!--  <td>
                  <v-btn style="margin: 6px 10px;" variant="flat" color="success" @click="sorry(item)">
                  sorry
                </v-btn>
                </td>
               -->
                
              </tr>
            </tbody>
          </v-table>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="appliersDialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="row">
         
            <v-btn style="margin: 0 10px;" variant="flat" color="grey" @click="openEdit(item)">
              Edit
            </v-btn>
            <v-btn style="margin: 5px 10px;" variant="flat" color="grey" @click="deleteMethod(item)">
              Delete
            </v-btn>
            <v-btn style="margin: 0 10px;width: 80px;" variant="flat" color="grey" @click="openAppliers(item)">
              Appliers
            </v-btn>
          </div>
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
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ModuleComponent',
  data() {
    
    return {
      show: false,
      dialog: false,
      appliersDialog: false,
      jobOpened: {},
      form: {
        specialization: '',
        description: '',
        title: '',
        expert:'',
        company:'',
        comemail:''
      },
      isEdit: false,
      specializations: [
        'design',
        'web',
        'mobile',
      ]
    }
  },
 
  computed: {
    ...mapState('companies', ['jobs']),
  },
  methods: {
    ...mapActions('companies', ['new', 'update', 'delete', 'accept',]),
    ...mapActions('main',['sorryAction']),
    newMethod() {
      this.new(JSON.parse(JSON.stringify(this.form))).then(() => {
        this.close();
      })
    },
    updateMethod() {
      this.update(JSON.parse(JSON.stringify(this.form))).then(() => {
        this.close();
      })
    },
    deleteMethod(item) {
      this.delete(item.id)
    },
    openEdit(item) {
      this.form.title = item.title;
      this.form.description = item.description;
      this.form.specialization = item.specialization;
      this.form.id = item.id;
      this.form.expert = item.expert;
      this.form.comemail = item.comemail;
      this.isEdit = true;
      this.dialog = true;
    },
    close() {
      this.form.title = '';
      this.form.description = '';
      this.form.specialization = '';
      this.dialog = false;
      this.isEdit = false;
    },
    openAppliers(item) {
      this.jobOpened = item;
      this.appliersDialog = true;
    },
    acceptAppliers(item) {
      this.accept({ jobId: this.jobOpened.id, userEmail: item.email }).then(() => {
        this.appliersDialog = false;
      })
    },
    sorry(item){
      this.sorryAction({ jobId: this.jobOpened.id, userEmail: item.email }).then(() => {
        this.appliersDialog = false;
      })
    }
     
  }
}
</script>