import ModuleComponent from '../ModuleComponent.vue'
import navBar from '../navBar.vue'
import adminsRoutes from './../../admins/router/index'
import usersRoutes from './../../users/router/index'
import companiesRoutes from './../../companies/router/index'
import LoginPage from '../pages/LoginPage.vue'
import RigesterPage from '../pages/RigesterPage.vue'

const routes = [
    {
        path:'/',
        name:'homee',
       component:navBar,
        children:[
           ...adminsRoutes,
           ...usersRoutes,
           ...companiesRoutes,
           {
            path:'/',
            name:'home',
           
            component:ModuleComponent,
           },
           {
            path:'/login',
            name:'LoginPage',
            component:LoginPage
           },
           {
            path:'/rigester',
            name:'RigesterPage',
            component:RigesterPage
           }
        ]
    }
];
export default routes;