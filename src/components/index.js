import Vue from 'vue';

const Components = {
  DialogueList: () => import('./DialogueList/List.vue'),
  Input: () => import('./DialogueWindow/Input.vue'),
  MessageBox: () => import('./DialogueWindow/MessageBox.vue'),
};


Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
