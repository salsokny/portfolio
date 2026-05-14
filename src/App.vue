<template>
  <div class="app-shell">
    <Navbar />
    <HomePage />
    <FooterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import HomePage from './pages/HomePage.vue'
import FooterSection from './components/FooterSection.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    HomePage,
    FooterSection,
  },
})
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
}
</style>
