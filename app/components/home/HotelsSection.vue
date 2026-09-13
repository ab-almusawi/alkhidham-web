<template>
  <section id="hotels" class="py-20 bg-white">
    <div class="section-container">
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 reveal">
        <div>
          <p class="text-brand-gold font-medium mb-2">إقامة فاخرة</p>
          <h2 class="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
            فنادق مختارة <span class="text-brand-gold">بعناية</span>
          </h2>
          <p class="text-gray-500 max-w-xl">
            نخبة من فنادق إيران ٤ و ٥ نجوم بأسعار حصرية لعملائنا
          </p>
        </div>
        <button class="btn-secondary mt-4 md:mt-0 text-sm !py-2.5">
          عرض جميع الفنادق
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="hotel in hotels"
          :key="hotel.id"
          class="bg-white rounded-2xl border border-gray-100 shadow-md shadow-black/5 overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-black/10 transition-all duration-300 card-lift reveal"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="hotel.image"
              :alt="hotel.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute top-3 right-3 bg-navy-80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
              <svg v-for="s in hotel.stars" :key="s" class="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="text-brand-navy font-bold text-lg mb-1">{{ hotel.name }}</h3>
            <p class="text-gray-400 text-sm mb-3 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {{ hotel.location }}
            </p>

            <!-- Amenities -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="amenity in hotel.amenities"
                :key="amenity"
                class="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg border border-gray-100"
              >
                {{ amenity }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <div>
                <span class="text-gray-400 text-xs">يبدأ من</span>
                <div class="text-brand-navy font-bold text-xl font-english">
                  {{ hotel.currency }}{{ hotel.price }}<span class="text-gray-400 text-sm font-arabic font-normal"> / ليلة</span>
                </div>
              </div>
              <button class="text-sm bg-brand-gold text-brand-navy px-4 py-2 rounded-xl font-bold hover:bg-brand-gold-dark transition-all">
                احجز الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { hotels } from '~/data/hotels'
</script>
