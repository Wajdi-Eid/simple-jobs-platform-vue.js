import companiesComponent from '../companiesComponent.vue'


const routes = [
    {
        path:'companies',
        name:'companiesModuleComponent',
        component:companiesComponent,
        meta:{requiresAuth:true}, 
    }
];
export default routes;