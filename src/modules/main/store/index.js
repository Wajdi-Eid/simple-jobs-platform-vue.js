export default {
namespaced:true, // that help me to import this store name in mapActions (his name = his place)
    state () {
        return {
        logininfo:localStorage.getItem('logininfo') != null ? JSON.parse(localStorage.getItem('logininfo')) : null,
        
        }
      },
    
      //mutations
      mutations :{
        CHANGE_NAV_LOGIN(state,data){
          state.logininfo=data
        }
      
      },
    
    //actions
    actions :{
      //اللوغين انفو يحتوي بيانات يلي عمل تسجيل دخول
     login({commit},data){
      const users=JSON.parse(localStorage.getItem('users'));
      const user=users.find((item)=>item.email==data.email && item.password==data.password)
      if(user){

          // تخزين الداتا ضمن اللوكال على شكل نص اسمه لوغين انف ثم نحوله الى اوبجكت عن طريق جيسون سترينغ   
     localStorage.setItem('logininfo',JSON.stringify(user))
    
     commit('CHANGE_NAV_LOGIN',user)
     return{
      message:'logged in successfully'
              }

      }else{
        return{
          message:'user not valid'
        }
      }  
     
      },
      register({commit , state},data){
      let users=localStorage.getItem('users')
      if(!users){
        users=[];
      }else{
        users=JSON.parse(users);
      }
      users.push(data)
      localStorage.setItem('users',JSON.stringify(users))
      window.location.replace('/#/login')
      return{
        message:'registered in successfully'
       }
      
     },
      logout({commit},data){
      localStorage.removeItem('logininfo')
      commit('CHANGE_NAV_LOGIN',null)
      window.location.replace('/#/')
      
     },
    },
  
    //end of actions
    
      getters :{
        logininfo(state){
          return localStorage.getItem('logininfo');
        }
      },
      modules :{
        
      }
}