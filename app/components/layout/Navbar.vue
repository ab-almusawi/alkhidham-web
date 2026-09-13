<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-brand-navy shadow-lg shadow-black/20">
    <div class="section-container">
      <div class="flex items-center justify-between h-16 lg:h-[68px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          <div>
            <div class="text-white font-bold text-lg leading-tight">الخضام</div>
            <div class="text-brand-gold text-[10px] font-english leading-tight tracking-wide">Al Khidham Travel</div>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="item.active ? 'bg-brand-gold text-brand-navy font-bold' : 'text-gray-300 hover:text-white hover:bg-white/5'"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-2">
          <button class="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all border border-white/10">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
            العربية
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <button class="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all border border-white/10">
            <span class="font-english font-bold text-brand-gold">$</span>
            دينار
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <button class="flex items-center gap-2 bg-brand-gold text-brand-navy text-sm font-bold px-4 py-2 rounded-lg hover:bg-brand-gold-dark transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            تسجيل الدخول
          </button>
        </div>

        <!-- Mobile: Login icon only -->
        <div class="lg:hidden flex items-center gap-3">
          <button class="w-9 h-9 bg-gold-15 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </button>
          <button
            class="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-brand-navy border-t border-white/10">
        <div class="section-container py-4 space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block py-3 px-3 rounded-lg font-medium transition-colors"
            :class="item.active ? 'bg-brand-gold text-brand-navy' : 'text-gray-300 hover:text-brand-gold hover:bg-white/5'"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navItems = [
  { label: 'الرئيسية', path: '/', active: true },
  { label: 'رحلات الطيران', path: '/#flights', active: false },
  { label: 'الفنادق', path: '/#hotels', active: false },
  { label: 'التأشيرات', path: '/#visas', active: false },
  { label: 'كروبات', path: '/#tours', active: false },
  { label: 'من نحن', path: '/about', active: false },
]
</script>
