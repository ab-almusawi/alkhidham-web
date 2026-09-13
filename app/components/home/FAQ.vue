<template>
  <section class="py-20 bg-white">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Sidebar -->
        <div class="reveal">
          <p class="text-brand-gold font-medium mb-2">مركز المساعدة</p>
          <h2 class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            الأسئلة <span class="text-brand-gold">الشائعة</span>
          </h2>
          <p class="text-gray-500 mb-8">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وحجوزاتك
          </p>

          <div class="bg-brand-navy rounded-2xl p-6">
            <h4 class="text-white font-bold mb-3">لم تجد إجابتك؟</h4>
            <p class="text-gray-400 text-sm mb-5">فريقنا جاهز لمساعدتك على مدار الساعة</p>
            <a
              href="https://wa.me/9647844440385"
              target="_blank"
              class="block text-center bg-brand-gold text-brand-navy font-bold py-2.5 px-5 rounded-xl hover:bg-brand-gold-dark transition-colors text-sm"
            >
              تواصل معنا على واتساب
            </a>
          </div>
        </div>

        <!-- FAQ Items -->
        <div class="lg:col-span-2 space-y-3">
          <div
            v-for="item in faqItems"
            :key="item.id"
            class="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 reveal"
            :class="openId === item.id ? 'border-gold-30 shadow-md' : ''"
          >
            <button
              class="w-full flex items-center justify-between p-5 text-right"
              @click="toggle(item.id)"
            >
              <span class="text-brand-navy font-medium text-base">{{ item.question }}</span>
              <svg
                class="w-5 h-5 text-brand-gold flex-shrink-0 mr-4 transition-transform duration-300"
                :class="openId === item.id ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-show="openId === item.id" class="overflow-hidden">
                <p class="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-4">
                  {{ item.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/faq'

const openId = ref<number | null>(1)

function toggle(id: number) {
  openId.value = openId.value === id ? null : id
}
</script>
