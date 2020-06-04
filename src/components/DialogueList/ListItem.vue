<template lang="pug">
  router-link(:to="`${dialogue.id}`")
    button(
      :class="classList"
    )
      .header
        h3 {{ dialogue.subject }}
        p.date.text-grey-10
          | {{ new Date(dialogue.created).toString().split(' ')[2] }}
          | {{ new Date(dialogue.created).toLocaleDateString('ru', {month: 'long'}) }}
          | {{ new Date(dialogue.created).toString().split(' ')[3] }}
      .text {{ dialogue.parts[0].text }}
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    dialogue: {
      type: Object,
      default: () => {},
    },
    indicator: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        'item',
        Number(this.$route.params.id) === this.dialogue.id && 'item_indicator',
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  min-width: 300px;
  background: transparent;
  padding: 10px 20px;
  height: 100px;
  border: none;
  border-bottom: 1px solid #E9EDF2;
  border-top: 0.5px solid #E9EDF2;
  text-decoration: none;
  outline: none;
  text-align: left;
  overflow: hidden;

  text-overflow: ellipsis;
  &_indicator {
    background: #fff;
    border-left: 2px solid #398BFF;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    text-transform: uppercase;
    vertical-align: middle;
    text-align: right;
    float: right;
    min-width: 130px;
    padding-top: 2px;
    margin: 0;
  }
}
.text {
  max-width: 95%;
  margin-top: 10px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
