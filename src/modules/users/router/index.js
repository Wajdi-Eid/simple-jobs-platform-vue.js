import usersComponent from '../usersComponent.vue'


const routes = [
    {
        path:'users',
        name:'usersModuleComponent',
        component:usersComponent,
        meta:{requiresAuth:true}, 
    }
];
export default routes;