import axios from "axios";

export const state = () => ({});
//   Mutations >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const mutations = {};

//   Actions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const actions = {
  nuxtServerInit({ dispatch }, { req }) {
    dispatch("listOne/fetchTodo");
    dispatch("listTwo/fetchTodo");
  }
};

// Getters >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const getters = {};
