<template>
  <div class="tabs-content" v-show="title == selectedTab">
    <slot />
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  props: ['title'],
  setup() {
    const selectedTab = inject('selectedTab')

    return {
      selectedTab
    }
  }
}
</script>
