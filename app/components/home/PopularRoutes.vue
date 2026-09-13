<template>
  <!-- Clearly separated section from hero above -->
  <section class="pt-10 pb-10 bg-[#f4f6f8]">
    <div class="section-container">
      <div class="text-center mb-6 reveal">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-navy mb-1">
          المسارات <span class="text-brand-gold">الشائعة</span>
        </h2>
        <p class="text-gray-500 text-sm">اكتشف أفضل الأسعار للوجهات المفضلة حول العالم</p>
      </div>

      <!-- Departure airport cards grid -->
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(dep, idx) in departureCards"
          :key="dep.code"
          class="rounded-2xl overflow-hidden shadow-sm card-lift reveal"
          :class="idx === 0 ? 'd1' : idx === 1 ? 'd2' : idx === 2 ? 'd3' : 'd4'"
        >
          <!-- Airport photo card -->
          <div class="relative h-44 overflow-hidden group cursor-pointer">
            <img
              :src="dep.image"
              :alt="dep.city"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/25"></div>

            <!-- Top pin markers -->
            <div class="absolute top-3 right-3 flex items-center gap-1">
              <div class="w-4 h-4 bg-brand-gold rounded-full flex items-center justify-center">
                <svg class="w-2 h-2 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
              <svg class="w-10 h-2 text-gold-60" fill="none" stroke="currentColor" viewBox="0 0 40 8">
                <path d="M0 4 L32 4" stroke-width="1.5" stroke-dasharray="4 2"/>
                <path d="M32 1 L39 4 L32 7" fill="none" stroke-width="1.5"/>
              </svg>
              <div class="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                <svg class="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
            </div>

            <!-- Bottom text -->
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <h3 class="text-white font-black text-3xl leading-none mb-1 tracking-tight">{{ dep.city }}</h3>
              <p class="text-gold-90 text-[9px] font-english font-bold uppercase tracking-widest">{{ dep.airportNameEn }}</p>
              <div class="flex items-center gap-1 mt-2">
                <svg class="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                <span class="text-white/90 text-[9px] font-english font-bold tracking-widest uppercase">SEARCH NOW</span>
              </div>
            </div>
          </div>

          <!-- Price list -->
          <div class="bg-white divide-y divide-gray-100">
            <div
              v-for="dest in dep.destinations"
              :key="dest.code"
              class="flex items-center justify-between px-3 py-2.5 hover:bg-gold-05 transition-colors cursor-pointer"
            >
              <div class="text-left">
                <div class="text-brand-gold font-english font-bold text-sm">{{ dest.price.toLocaleString() }}</div>
                <div class="text-gray-400 text-[10px] font-english">د.ع.</div>
              </div>
              <div class="text-right">
                <div class="text-brand-navy font-bold text-sm">{{ dest.city }}</div>
                <div class="text-gray-400 text-[10px] font-english uppercase">{{ dest.code }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Departure airport data with verified images and destination price lists
const departureCards = [
  {
    code: 'NJF',
    city: 'نجـف',
    airportNameEn: 'NAJAF INTERNATIONAL AIRPORT',
    image: 'https://images.unsplash.com/photo-1627734633024-867b54f26e1f?w=600&q=80', // Amman/Jordan hills — Middle East ✅
    destinations: [
      { code: 'IKA', city: 'طهران', price: 68440 },
      { code: 'MHD', city: 'مشهد', price: 108683 },
      { code: 'IFN', city: 'أصفهان', price: 124216 },
    ],
  },
  {
    code: 'BGW',
    city: 'بغـداد',
    airportNameEn: 'BAGHDAD INTERNATIONAL AIRPORT',
    image: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=600&q=80', // Iran/Middle East landscape ✅
    destinations: [
      { code: 'IKA', city: 'طهران', price: 74115 },
      { code: 'RAS', city: 'رشت', price: 77491 },
      { code: 'BSR', city: 'البصرة', price: 96352 },
    ],
  },
  {
    code: 'KIK',
    city: 'كركوك',
    airportNameEn: 'KIRKUK AIRPORT',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', // Dubai skyline (Middle East) ✅
    destinations: [
      { code: 'IST', city: 'اسطنبول', price: 136754 },
      { code: 'IKA', city: 'طهران', price: 38230 },
      { code: 'DXB', city: 'دبي', price: 146708 },
    ],
  },
  {
    code: 'EBL',
    city: 'اربيـل',
    airportNameEn: 'ERBIL INTERNATIONAL AIRPORT',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80', // Istanbul/Galata Tower ✅
    destinations: [
      { code: 'IST', city: 'اسطنبول', price: 136754 },
      { code: 'DXB', city: 'دبي', price: 145947 },
      { code: 'AMM', city: 'عمان', price: 151954 },
    ],
  },
]
</script>

<style scoped></style>
