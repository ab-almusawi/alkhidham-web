<template>
  <section id="visas" class="py-20 bg-brand-navy overflow-hidden">
    <div class="section-container">
      <!-- Header -->
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 reveal">
        <div>
          <div class="flex items-center gap-2 text-brand-gold mb-3">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <span class="text-sm font-medium">بوابتك إلى العالم</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
            تأشيرات سفر <span class="text-brand-gold">مضمونة</span>
          </h2>
          <p class="text-gray-400 max-xl text-sm">
            احصل على تأشيرتك بسهولة وسرعة مع أفضل الأسعار وخدمة احترافية
          </p>
        </div>
        <div class="mt-4 md:mt-0 flex items-baseline gap-2">
          <span class="text-5xl font-bold text-brand-gold font-english">17+</span>
          <span class="text-gray-400 text-sm">وجهة متاحة الآن</span>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex gap-3 mb-8">
        <button
          class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-gold hover:bg-gold-10 transition-all text-white"
          @click="prev"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <button
          class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-gold hover:bg-gold-10 transition-all text-white"
          @click="next"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      <!-- Cards -->
      <div class="relative overflow-hidden">
        <div
          class="flex gap-4 transition-transform duration-500 ease-out"
          :style="trackStyle"
        >
          <div
            v-for="item in visaItems"
            :key="item.id"
            class="relative flex-shrink-0 w-52 md:w-60 h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer group card-lift"
            :class="activeIdx === item.index ? 'ring-2 ring-brand-gold ring-offset-2 ring-offset-brand-navy' : ''"
            @click="activeIdx = item.index"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
            <div class="absolute top-4 left-4 font-bold text-4xl font-english leading-none" style="color:rgba(255,255,255,0.25);">
              {{ item.num }}
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <div class="w-8 h-0.5 bg-brand-gold mb-3"></div>
              <h3 class="text-white font-bold text-lg leading-tight mb-3">{{ item.name }}</h3>
              <button class="w-full py-2 rounded-lg text-xs font-bold border border-white/20 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy transition-all duration-200">
                قدّم الآن
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="dot in pageCount"
          :key="dot"
          class="h-1.5 rounded-full transition-all duration-300"
          :class="currentPage === dot - 1 ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'"
          @click="goToPage(dot - 1)"
        ></button>
      </div>

      <!-- Counter -->
      <div class="flex items-center justify-center gap-3 mt-4">
        <span class="text-brand-gold font-english font-bold text-sm">{{ activeLabel }}</span>
        <div class="w-16 h-px bg-white/20">
          <div class="h-full bg-brand-gold transition-all duration-300" :style="progressStyle"></div>
        </div>
        <span class="text-gray-500 font-english text-sm">{{ totalLabel }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { visas } from '~/data/visas'

const activeIdx = ref(0)
const cardWidth = ref(240)
const gap = 16
const visibleCount = ref(4)

// Pre-compute display items – no function calls in template
const visaItems = computed(() =>
  visas.map((v, i) => ({
    ...v,
    index: i,
    num: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
  }))
)

const pageCount = computed(() => Math.ceil(visas.length / visibleCount.value))
const currentPage = computed(() => Math.floor(activeIdx.value / visibleCount.value))

const trackStyle = computed(() => {
  const startIdx = currentPage.value * visibleCount.value
  return { transform: `translateX(${-(startIdx * (cardWidth.value + gap))}px)` }
})

const activeNum = computed(() => activeIdx.value + 1)
const activeLabel = computed(() => activeNum.value < 10 ? `0${activeNum.value}` : `${activeNum.value}`)
const totalLabel = computed(() => visas.length < 10 ? `0${visas.length}` : `${visas.length}`)
const progressStyle = computed(() => ({ width: `${(activeNum.value / visas.length) * 100}%` }))

function next() { if (activeIdx.value < visas.length - 1) activeIdx.value++ }
function prev() { if (activeIdx.value > 0) activeIdx.value-- }
function goToPage(page: number) { activeIdx.value = page * visibleCount.value }

onMounted(() => {
  const update = () => {
    if (window.innerWidth < 768) { cardWidth.value = 208; visibleCount.value = 2 }
    else { cardWidth.value = 240; visibleCount.value = 4 }
  }
  update()
  window.addEventListener('resize', update)
  onUnmounted(() => window.removeEventListener('resize', update))
})
</script>

<style scoped></style>
