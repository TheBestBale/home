<template>
  <button
      :class="['app-button', variantClass]"
      :disabled="disabled"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'ClickButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary', // 'primary' | 'secondary' | 'danger'
      validator: value => ['primary', 'secondary', 'danger'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    variantClass() {
      return `app-button--${this.variant}`;
    },
  },
};
</script>

<style scoped lang="scss">
.app-button {
  padding: 0.6em 1.2em;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: $transition-normal;
  box-shadow: $shadow-normal;
  color: $color-white;
  width: 120px;

  &:hover {
    cursor: pointer;
    box-shadow: $shadow-hover;
  }

  &:active {
    box-shadow: $shadow-active;
  }
}

.app-button--primary {
  background-color: $color-primary;

  &:hover {
    background-color: $button-background-hover;
  }
}

.app-button--secondary {
  background-color: $color-secondary;
  color: $color-primary;

  &:hover {
    background-color: $button-background-hover;
    color: $color-secondary;
  }
}

.app-button--danger {
  background-color: $c-red-1;
  &:hover {
    background-color: $button-background-hover;
  }
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
