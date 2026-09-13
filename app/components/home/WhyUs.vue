<template>
  <section class="py-20 bg-[#f4f6f8]">
    <div class="section-container">
      <div class="text-center mb-14 reveal">
        <p class="text-brand-gold font-medium mb-2">لماذا نحن ؟</p>
        <h2 class="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
          تجربة سفر <span class="text-brand-gold">استثنائية</span> من البداية للنهاية
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">
          نحن نقدم لك أفضل الخدمات والمزايا لتسافر براحة بال كاملة
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white rounded-2xl border border-gray-100 shadow-md shadow-black/5 p-6 text-center group hover:shadow-xl hover:border-gold-20 transition-all duration-300 card-lift reveal"
        >
          <div class="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold transition-colors duration-300">
            <div v-html="feature.icon" class="w-7 h-7 text-brand-gold group-hover:text-brand-navy"></div>
          </div>
          <h3 class="text-brand-navy font-bold text-lg mb-3">{{ feature.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Stats -->
      <div
        ref="statsRef"
        class="grid grid-cols-2 md:grid-cols-4 gap-5"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-brand-navy rounded-2xl p-6 text-center reveal-scale"
        >
          <div class="text-3xl md:text-4xl font-bold text-brand-gold font-english mb-2">
            {{ stat.prefix }}{{ stat.animated ? animatedValues[stat.key] : stat.value }}{{ stat.suffix }}
          </div>
          <div class="text-gray-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const statsRef = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

const animatedValues = reactive<Record<string, number>>({
  years: 0,
  travelers: 0,
  satisfaction: 0,
})

const features = [
  {
    title: 'حجز آمن ومضمون',
    description: 'أعلى مستويات الأمان في جميع معاملاتك مع أفضل وسائل الحماية',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  },
  {
    title: 'أفضل الأسعار',
    description: 'أسعار وعروض تنافسية مع ضمان استرداد الفرق',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: 'دعم على مدار الساعة',
    description: 'فريق خدمة العملاء متاح 24/7 لمساعدتك في أي وقت',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
  },
  {
    title: 'خبرة أكثر من 10 سنوات',
    description: 'خبرة واسعة في مجال السفر والسياحة لضمان رحلة مثالية',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
  },
]

const stats = [
  { key: 'years', label: 'سنوات خبرة', value: 10, prefix: '+', suffix: '', animated: true },
  { key: 'travelers', label: 'مسافر سعيد', value: 50, prefix: '+', suffix: 'K', animated: true },
  { key: 'support', label: 'دعم متواصل', value: '24/7', prefix: '', suffix: '', animated: false },
  { key: 'satisfaction', label: 'رضا العملاء', value: 98, prefix: '', suffix: '%', animated: true },
]

function animateCounters() {
  if (hasAnimated.value) return
  hasAnimated.value = true
  const duration = 2000
  const start = performance.now()

  function step(timestamp: number) {
    const progress = Math.min((timestamp - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    animatedValues.years = Math.floor(eased * 10)
    animatedValues.travelers = Math.floor(eased * 50)
    animatedValues.satisfaction = Math.floor(eased * 98)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateCounters()
      })
    },
    { threshold: 0.3 }
  )
  if (statsRef.value) observer.observe(statsRef.value)
})
</script>
