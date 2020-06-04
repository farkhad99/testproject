<template lang="pug">
  .dialogue
    .loader(v-if="dialogueFetching")
      img(src="@/assets/icons/loader_primary.svg")
    template(v-else)
      .dialogue_content
        .flex
          MessageBox(
            v-for="msg in dialogue.parts"
            :key="msg.id"
            :message="msg"
            :own="msg.author === 'petr' || msg.author === 'petya'"
          )
      Input.footer(
        :disabled="messageSending"
        v-model="message"
        placeholder="Введите текст..."
        @send="sendMessage"
      )
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DialogueDetail',
  methods: {
    ...mapActions('dialogue', ['fetchDialogue', 'sendMessage']),
  },
  computed: {
    message: {
      get() {
        return this.$store.state.dialogue.message;
      },
      set(value) {
        this.$store.commit('dialogue/SET_MESSAGE', value);
      },
    },
    dialogue() {
      return this.$store.state.dialogue.dialogue;
    },
    dialogueFetching() {
      return this.$store.state.dialogue.dialogueFetching;
    },
    messageSending() {
      return this.$store.state.dialogue.messageSending;
    },
  },
  mounted() {
    this.fetchDialogue(Number(this.$route.params.id));
  },
  watch: {
    $route(route) {
      this.fetchDialogue(Number(route.params.id));
    },
  },
};
</script>

<style scoped lang="scss">
.dialogue {
  height: 100%;

  &_content {
    .flex {
      height: auto;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    height: calc(100vh - 90px);
    overflow-y: auto;
    padding: 10px 16px;
  }
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
.footer {
  position: fixed;
  width: 100%;
  max-width: inherit;
  border-top: 1px solid #E9EDF2;
  right:0;
  bottom:0;
  width: 70%;
}
</style>
