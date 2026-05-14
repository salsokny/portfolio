<template>
  <header class="navbar">
    <div class="nav-brand">SAL SOKNY</div>
    <button class="nav-toggle" type="button" @click="toggleMenu" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav :class="['nav-links', { open: menuOpen }]" aria-label="Primary navigation">
      <a href="#hero" @click.prevent="scrollTo('hero')">Home</a>
      <a href="#about" @click.prevent="scrollTo('about')">About</a>
      <a href="#experience" @click.prevent="scrollTo('experience')">Experience</a>
      <a href="#projects" @click.prevent="scrollTo('projects')">Projects</a>
      <a href="#skills" @click.prevent="scrollTo('skills')">Skills</a>
      <a href="#education" @click.prevent="scrollTo('education')">Education</a>
      <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
      <div class="theme-switcher" role="group" aria-label="Theme toggle">
        <button type="button" class="theme-btn" @click="setTheme('light')" title="Light">☀</button>
        <button type="button" class="theme-btn" @click="setTheme('dark')" title="Dark">🌙</button>
        <button type="button" class="theme-btn" @click="setTheme('night-light')" title="Night Light">🌅</button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const menuOpen = ref(false)

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
      document.body.style.overflow = menuOpen.value ? 'hidden' : ''
    }

    const setTheme = (theme: string) => {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('portfolio-theme', theme)
    }

    const scrollTo = (id: string) => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        menuOpen.value = false
        document.body.style.overflow = ''
      }
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
      setTheme(savedTheme)
    })

    return {
      menuOpen,
      toggleMenu,
      setTheme,
      scrollTo,
    }
  },
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-brand {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  transition: max-height 0.3s ease;
}
.theme-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.theme-btn {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  padding: 0.5rem 0.65rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.theme-btn:hover {
  background: var(--bg-elevated);
  color: var(--text-primary);
}
.nav-toggle {
  display: none;
  border: none;
  background: transparent;
  gap: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.35rem;
}
.nav-toggle span {
  width: 1.5rem;
  height: 2px;
  background: var(--text-secondary);
}
@media (max-width: 900px) {
  .nav-toggle {
    display: flex;
  }
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    padding: 0 1rem;
  }
  .nav-links.open {
    max-height: 100vh;
    padding: 1rem;
  }
  .nav-links a {
    width: 100%;
    padding: 0.75rem 0;
  }
}
</style>
