<template lang="pug">
  .wrapper
    input.wrapper_input(
      v-on:input="updateValue($event.target.value)"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
    )
    button.wrapper_button(
      @click="$emit('send')"
      :disabled="disabled"
    )
      img(v-if="disabled" src="@/assets/icons/loader.svg")
      img(v-else src="@/assets/icons/send_btn.svg")
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  background: #fff;

  &_input {
    background: transparent;
    border: none;
    outline: none;
    padding: 0 0 0 33px;
    width: 100%;
  }

  &_input:disabled, &_button:disabled {
    cursor: not-allowed;
  }

  &_button {
    padding: 30px;
    border: none;
    outline: none;
    background: #398BFF;

    .loader {
      height: 10px;
    }
  }
}
</style>
