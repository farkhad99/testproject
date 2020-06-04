<template lang="pug">
  aside
    .loader(v-if="loading")
      img(src="@/assets/icons/loader_primary.svg")
    template(v-else)
      p.header.text-14 Сообщения
        b.text-grey-3 {{ dialogueList.length }}
      ListItem(
        v-for="item in dialogueList"
        :dialogue="item"
        :indicator="$route.params.id === item.id"
        :key="item.id"
      )
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'DialogueList',
  components: {
    ListItem,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    dialogueList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped lang="scss">
aside {
  background: #F3F6F8;
  overflow: hidden;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.header {
  padding-left: 20px;

  b {
    margin-left: 10px;
  }
}
</style>
