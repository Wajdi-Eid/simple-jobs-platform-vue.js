export default {
  namespaced: true,
  state() {
    return {
      filterResult: [],
      jobs: [
        {
          title: "Graphic Designer",
          description: "Creative Person",
          specialization: "Senior Graphic Designer",
          id: 1,
          expert:"2 years",
          company: "Microsoft",
          comemail:"micro@gmail.com"
        },
        {
          title: "Web Developer",
          description: "Front-end - Vue.js",
          specialization: "Senior Web Developer",
          id: 2,
          expert:"2 years",
          company: "Microsoft",
          comemail:"micro@gmail.com"
        },
        {
          title: "Mobile Developer",
          description: "Flutter",
          specialization: "Senior Mobile Developer",
          id: 3,
          expert:"2 years",
          company: "Microsoft",
          comemail:"micro@gmail.com"
        },
        {
          title: "Mobile Developer",
          description: "Flutter",
          specialization: "Senior Mobile Developer",
          id: 4,
          expert:"2 years",
          company: "Microsoft",
          comemail:"micro@gmail.com"
        },
        {
          title: "Mobile Developer",
          description: "Flutter",
          specialization: "Senior Mobile Developer",
          id: 5,
          expert:"2 years",
          company: "Microsoft",
          comemail:"micro@gmail.com"
        },
        {
          title: "Mobile Developer",
          description: "Flutter",
          specialization: "Senior Mobile Developer",
          id: 6,
          expert:"2 years",
          company: "Microsoft",
          comemail:"micro@gmail.com"
        },
        
       
      
     
     
     
     
      ],
    };
  },
  mutations: {
    ADD_NEW(state, data) {
      state.jobs = data;
    },
    UPDATE(state, data) {
      state.jobs = data;
    },
    SET_FILTER_CARDS(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    new({ commit, state }, toSet) {
      let data = state.jobs;
      data.push(toSet);
      commit("ADD_NEW", data);
      return true;
    },

    update({ commit, state }, toSet) {
      let data = state.jobs;
      const newData = [toSet, ...data.filter((item) => item.id != toSet.id)];
      commit("UPDATE", newData);
      return true;
    },

    delete({ commit, state }, id) {
      let data = state.jobs;
      commit(
        "UPDATE",
        data.filter((item) => item.id != id)
      );
      return true;
    },

    apply({ commit, state, dispatch }, info) {
      let data = state.jobs;
      const job = data.find((item) => item.id == info.jobId);
      if (job.users && job.users.length) {
        job.users.push({
          email: info.userEmail,
          isAccepted: false,
        });
      } else {
        job.users = [
          {
            email: info.userEmail,
            isAccepted: false,
          },
        ];
      }

      dispatch("update", job);

      return true;
    },

    accept({ commit, state, dispatch }, info) {
      let data = state.jobs;

      const job = data.find((item) => item.id == info.jobId);

      const userToAccept = job.users.find(user => user.email == info.userEmail);

      userToAccept.isAccepted = true;

      job.users = [userToAccept, ...job.users.filter(user => user.email != info.userEmail)];

      dispatch("update", job);

      return true;
    },
    
    sorryAction({ commit, state, dispatch }, dataa){
      let data = state.jobs;
      const job = data.find((item) => item.id == info.jobId);
      const userToSorry = job.users.find(user => user.email == info.userEmail);
      userToSorry.isAccepted = false;
    },
    applySearch({ commit, state }, data) {
      let toSet = state.jobs;
      
      if (!data.length) {
        toSet = state.jobs

      } else {
       toSet=toSet.filter(item => item.title.includes(data))
       

      }

      commit("SET_FILTER_CARDS", toSet);
    },
  },
  getters: {},
  modules: {},
};