import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    people: [],
  },
  getters: {
    // return a list of people aged from 25 to 35 years old, from the youngest to the oldest
    people: (state) => state.people.filter((person) => person.age >= 25 && person.age <= 35),

  },
  mutations: {
    savePeople(state, people) {
      state.people = people;
    },
  },
  actions: {
    getPeople(context) {
      fetch('https://run.mocky.io/v3/8aabb2ec-21c0-42c0-815c-0d748b775734')
        .then((response)=>response.json())
        .then((people)=>context.commit('savePeople', people));
    },
  },
});
