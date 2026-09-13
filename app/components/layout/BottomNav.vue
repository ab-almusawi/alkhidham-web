<template>
  <nav class="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 safe-area-pb">
    <div class="flex items-end justify-around h-16 px-2 relative">
      <!-- Left 2 tabs -->
      <NuxtLink
        v-for="tab in leftTabs"
        :key="tab.id"
        :to="tab.path"
        class="flex flex-col items-center gap-0.5 flex-1 py-2 pb-1 transition-all duration-200"
        :class="activeTab === tab.id ? 'text-brand-gold' : 'text-gray-400'"
        @click="activeTab = tab.id"
      >
        <div class="w-6 h-6 flex items-center justify-center" v-html="tab.icon"></div>
        <span class="text-[10px] font-medium">{{ tab.label }}</span>
      </NuxtLink>

      <!-- Center brand button (elevated) -->
      <NuxtLink
        to="/"
        class="relative -top-5 flex flex-col items-center"
        @click="activeTab = 'search'"
      >
        <div class="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center border-4 border-white" style="box-shadow: 0 8px 20px rgba(16,20,25,0.45)">
          <svg class="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
      </NuxtLink>

      <!-- Right 2 tabs -->
      <NuxtLink
        v-for="tab in rightTabs"
        :key="tab.id"
        :to="tab.path"
        class="flex flex-col items-center gap-0.5 flex-1 py-2 pb-1 transition-all duration-200"
        :class="activeTab === tab.id ? 'text-brand-gold' : 'text-gray-400'"
        @click="activeTab = tab.id"
      >
        <div class="w-6 h-6 flex items-center justify-center" v-html="tab.icon"></div>
        <span class="text-[10px] font-medium">{{ tab.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const activeTab = ref('search')

const leftTabs = [
  {
    id: 'search',
    label: 'البحث',
    path: '/',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  },
  {
    id: 'explore',
    label: 'استكشاف',
    path: '/#tours',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  },
]

const rightTabs = [
  {
    id: 'bookings',
    label: 'حجوزاتي',
    path: '/',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>`,
  },
  {
    id: 'settings',
    label: 'الإعدادات',
    path: '/',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543-.94-3.31.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
]
</script>

<style scoped></style>
