<template lang="pug">
  .wrapper(:class="wrapperClass")
    .msg(:class="msgClass") {{ message.text }}
    .details
      b.span.text-13 {{ message.author }}
      span.text-10.text-grey-4 {{ new Date(message.created).toLocaleString() }}
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    own: {
      type: Boolean,
      default: false,
    },
    message: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    wrapperClass() {
      return [
        this.own && 'wrapper_own',
      ];
    },
    msgClass() {
      return [
        this.own && 'msg_own',
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &_own {
    align-items:  flex-end;
  }
}
.msg {
  text-align: left;
  border-radius: 8px 8px 8px 0px;
  background: #F6F7F9;
  padding: 18px 20px;
  max-width: 50%;

  &_own {
    float: right;
    background: #E9F5F4;
    border-radius: 8px 8px 0px 8px;
  }
}
.details {
  b {
    margin-right: 5px;
  }
}
</style>
