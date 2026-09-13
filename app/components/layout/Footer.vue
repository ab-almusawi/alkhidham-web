<template>
  <footer class="bg-brand-navy pt-16 pb-8">
    <div class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-5">
            <div class="w-9 h-9 bg-brand-gold rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <div>
              <div class="text-white font-bold text-lg leading-tight">الخضام</div>
              <div class="text-brand-gold text-[10px] font-english tracking-wide">Al Khidham Travel</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-5">
            منصة سفر متكاملة تقدم خدمات حجوزات الطيران والفنادق والتأشيرات بأفضل الأسعار وأعلى مستويات الخدمة.
          </p>
          <p class="text-gray-500 text-xs font-english">Al Khidham For Travel and Tourism</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-bold mb-5">روابط سريعة</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-bold mb-5">خدماتنا</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <span class="text-gray-400 text-sm">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold mb-5">تواصل معنا</h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-gold-10 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <a href="tel:+9647844440385" class="text-gray-400 text-sm hover:text-brand-gold transition-colors font-english" dir="ltr">+964 784 444 0385</a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-gold-10 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:Info@alkhidhamtravel.com" class="text-gray-400 text-sm hover:text-brand-gold transition-colors font-english">Info@alkhidhamtravel.com</a>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-gold-10 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="text-gray-400 text-sm">شارع القدس، كركوك، العراق</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} الخضام للسفر والسياحة. جميع الحقوق محفوظة.
        </p>
        <p class="text-gray-600 text-xs font-english">
          Al Khidham For Travel and Tourism
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'الرئيسية', path: '/' },
  { label: 'حجز الطيران', path: '/#flights' },
  { label: 'الفنادق', path: '/#hotels' },
  { label: 'التأشيرات', path: '/#visas' },
  { label: 'الكروبات السياحية', path: '/#tours' },
  { label: 'من نحن', path: '/about' },
]

const services = [
  'حجز رحلات الطيران',
  'حجز الفنادق',
  'خدمات التأشيرات',
  'كروبات سياحية',
  'النقل البري',
  'التأمين السفر',
]
</script>
