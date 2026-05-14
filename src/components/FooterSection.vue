<template>
  <footer class="footer">
    <p>© 2026 Sal Sokny. Built with Vue 3, TypeScript, Tailwind CSS, Arco Design, and native CSS.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterSection',
})
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 2rem 1.5rem;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
}
</style>
