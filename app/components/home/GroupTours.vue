<template>
  <section id="tours" class="py-20 bg-[#f4f6f8]">
    <div class="section-container">
      <div class="text-center mb-12 reveal">
        <p class="text-brand-gold font-medium mb-2">رحلات مختارة بعناية</p>
        <h2 class="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
          الكروبات <span class="text-brand-gold">السياحية</span>
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">
          رحلات جماعية منظمة بعناية مع أفضل الفنادق والخدمات — طيران وإقامة وفيزا في باقة واحدة
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          v-for="(tour, idx) in tours"
          :key="tour.id"
          class="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 card-lift reveal"
          :class="idx === 0 ? 'd1' : idx === 1 ? 'd2' : idx === 2 ? 'd3' : 'd4'"
        >
          <!-- Image -->
          <div class="relative h-80 overflow-hidden">
            <img
              :src="tour.image"
              :alt="tour.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div :class="`absolute inset-0 bg-gradient-to-t ${tour.gradient}`"></div>

            <!-- Destination Tag -->
            <div class="absolute top-4 right-4 bg-white/15 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {{ tour.destination }}
            </div>
          </div>

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h3 class="text-white font-bold text-xl mb-2 text-shadow">{{ tour.title }}</h3>
            <div class="flex items-end justify-between">
              <div>
                <span class="text-gray-300 text-xs block mb-1">السعر يبدأ من</span>
                <div class="flex items-baseline gap-1">
                  <span class="text-brand-gold font-bold text-2xl font-english">{{ tour.currency }}{{ tour.price.toLocaleString() }}</span>
                  <span class="text-gray-300 text-sm">/ {{ tour.perPerson }}</span>
                </div>
              </div>
              <button class="bg-brand-gold text-brand-navy px-4 py-2 rounded-xl text-sm font-bold hover:bg-brand-gold-dark transition-colors duration-200">
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
import { tours } from '~/data/tours'
</script>
