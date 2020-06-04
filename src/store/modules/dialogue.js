import { getDialogues, postMessage, getDialogue } from '../../api';

export default {
  namespaced: true,

  state: {
    dialogue: {},
    dialogueList: [],
    message: '',
    messageSending: false,
    dialogueFetching: false,
    dialogueListFetching: false,
  },
  mutations: {
    SET_DIALOGUE(state, payload) {
      state.dialogue = payload;
    },
    SET_DIALOGUE_LIST(state, payload) {
      state.dialogueList = payload;
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    ADD_MESSAGE(state, payload) {
      state.dialogue.parts.push(payload);
    },
    SET_DIALOGUE_FETCHING(state, payload) {
      state.dialogueFetching = payload;
    },
    SET_DIALOGUE_LIST_FETCHING(state, payload) {
      state.dialogueListFetching = payload;
    },
    SET_MESSAGE_SENDING(state, payload) {
      state.messageSending = payload;
    },
  },
  // get data from local fake api
  actions: {
    fetchDialogues({ commit }) {
      commit('SET_DIALOGUE_LIST_FETCHING', true);
      return getDialogues()
        .then((res) => {
          commit('SET_DIALOGUE_LIST', res.data);
          commit('SET_DIALOGUE_LIST_FETCHING', false);
        });
    },
    fetchDialogue({ commit }, id) {
      commit('SET_DIALOGUE_FETCHING', true);
      return getDialogue(id)
        .then((res) => {
          if (res) commit('SET_DIALOGUE', res);
          commit('SET_DIALOGUE_FETCHING', false);
        });
    },
    sendMessage({ state, commit }) {
      if (!state.message) return;
      commit('SET_MESSAGE_SENDING', true);
      postMessage({
        id: state.dialogue.parts[state.dialogue.parts.length - 1].id + 1,
        author: 'petr',
        text: state.message,
        created: new Date().toString(),
      }).then((res) => {
        commit('ADD_MESSAGE', res);
        commit('SET_MESSAGE', '');
        commit('SET_MESSAGE_SENDING', false);
      });
    },
  },
};
