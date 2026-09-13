<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80"
          class="w-full h-full object-cover"
          alt="About"
        />
        <div class="absolute inset-0 bg-brand-navy/80"></div>
      </div>
      <div class="section-container relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-5">
          من <span class="text-brand-gold">نحن</span>
        </h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          منصة سفر متكاملة تخدمك من البداية للنهاية
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-16 bg-[#f5f5f0]">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-20">
          <p class="text-gray-600 text-lg leading-relaxed">
            نحن منصة سفر متكاملة تقدم خدمات حجوزات الطيران والفنادق والتأشيرات بأفضل الأسعار وأعلى مستويات الخدمة.
            نسعى لجعل تجربة السفر أسهل وأكثر متعة لعملائنا.
          </p>
        </div>

        <!-- Services -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold text-brand-navy text-center mb-10">خدماتنا</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="service in services"
              :key="service.title"
              class="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center group hover:shadow-xl hover:border-brand-gold/20 transition-all"
            >
              <div class="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold transition-colors">
                <div v-html="service.icon" class="w-7 h-7 text-brand-gold group-hover:text-brand-navy"></div>
              </div>
              <h3 class="text-brand-navy font-bold text-lg mb-2">{{ service.title }}</h3>
              <p class="text-gray-500 text-sm">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <!-- Values -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold text-brand-navy text-center mb-10">قيمنا</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="(value, idx) in values"
              :key="value.title"
              class="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center group hover:shadow-xl hover:border-brand-gold/20 transition-all"
            >
              <div class="text-brand-gold/30 font-bold text-6xl font-english mb-3">
                {{ String(idx + 1).padStart(2, '0') }}
              </div>
              <h3 class="text-brand-navy font-bold text-lg mb-2">{{ value.title }}</h3>
              <p class="text-gray-500 text-sm">{{ value.description }}</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="bg-brand-navy rounded-2xl p-10 text-center max-w-2xl mx-auto">
          <h3 class="text-white font-bold text-2xl mb-4">تواصل معنا</h3>
          <p class="text-gray-400 mb-6">نحن هنا لمساعدتك في كل خطوة من رحلتك</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9647844440385" target="_blank" class="btn-primary inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              واتساب
            </a>
            <a href="tel:+9647844440385" class="border-2 border-brand-gold text-brand-gold font-semibold py-3 px-8 rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'من نحن | الخضام للسفر والسياحة' })

const services = [
  {
    title: 'حجز الطيران',
    description: 'احجز تذاكر الطيران بأفضل الأسعار والخدمات',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>',
  },
  {
    title: 'حجز الفنادق',
    description: 'اختر من بين آلاف الفنادق حول العالم',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  },
  {
    title: 'خدمات التأشيرات',
    description: 'نسهل عليك إجراءات الحصول على التأشيرة',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
  },
  {
    title: 'دعم على مدار الساعة',
    description: 'فريق دعم متاح دائماً لمساعدتك',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
  },
]

const values = [
  { title: 'الأمان', description: 'حماية معلوماتك وبياناتك الشخصية' },
  { title: 'الجودة', description: 'نقدم أفضل الخدمات بأعلى معايير الجودة' },
  { title: 'الثقة', description: 'بناء علاقات طويلة الأمد مع عملائنا' },
  { title: 'الابتكار', description: 'نستخدم أحدث التقنيات لتحسين تجربتك' },
]
</script>
