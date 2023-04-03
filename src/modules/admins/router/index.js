import adminsComponent from '../adminsComponent.vue'


const routes = [
    {
        path:'admins',
        name:'adminsModuleComponent',
        component:adminsComponent,
        meta:{requiresAuth:true}, 
    }
];
export default routes;