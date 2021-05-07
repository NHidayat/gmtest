<template>
  <div class="tabs">
    <ul class="tabs-header">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTab = title"
        :class="{ active: title == selectedTab }"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map(tab => tab.props.title))
    const selectedTab = ref(tabTitles.value[0])

    provide('selectedTab', selectedTab)
    return {
      tabTitles,
      selectedTab
    }
  }
}
</script>

<style src="../../assets/styles/tabs.css"></style>
