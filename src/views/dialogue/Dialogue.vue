<template lang="pug">
  .container(v-else)
    DialogueList(
      :dialogueList="dialogueList"
      :loading="dialogueListFetching"
    )
    .dialogue
      router-view
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'DialogueView',
  data() {
    return {
      loadingdialogues: false,
    };
  },
  computed: {
    dialogueList() {
      return this.$store.state.dialogue.dialogueList;
    },
    dialogueListFetching() {
      return this.$store.state.dialogue.dialogueListFetching;
    },
  },
  methods: {
    ...mapActions('dialogue', ['fetchDialogues']),
  },
  mounted() {
    this.loadingdialogues = true;
    this.fetchDialogues()
      .then(() => {
        this.loadingDialogues = false;
      });
  },
};
</script>
<style scoped lang="scss">
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 30% 70%;
  overflow: hidden;

  .dialogue {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
