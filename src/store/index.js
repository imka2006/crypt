import { createStore } from 'vuex';

export default createStore({
  state: {
    list:[
      {
        id:0,
        name:"калькулятор",
        link:'/calculator',
      },
      // {
      //   id:1,
      //   name:"недельная",
      //   link:'/week',
      // },
      // {
      //   id:2,
      //   name:"месячная",
      //   link:'/mounth',
      // },
      // {
      //   id:3,
      //   name:"годовая",
      //   link:'/year',
      // },
    ],

    allData:[],
  },
  mutations: {},
  actions: {},
  getters: {},
});