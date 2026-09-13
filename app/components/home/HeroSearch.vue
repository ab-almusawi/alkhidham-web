<template>
  <section id="flights" class="relative pt-16">
    <!-- Image layer only — rounded bottom corners like the original, card is not clipped -->
    <div class="absolute inset-0 overflow-hidden rounded-b-[1.75rem] md:rounded-b-[2.75rem] lg:rounded-b-[3.25rem]">
      <div
        v-for="(slide, i) in heroSlides"
        :key="slide.src"
        class="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
        :style="{ opacity: i === heroIndex ? 1 : 0 }"
      >
        <img
          :src="slide.src"
          :alt="slide.label"
          class="w-full h-full object-cover object-center"
          :class="i === heroIndex ? 'ken-burns' : ''"
          :key="slide.src + (i === heroIndex ? '-on' : '-off')"
        />
      </div>
      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(16,20,25,0.72), rgba(16,20,25,0.55), rgba(16,20,25,0.82))"></div>
      <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(16,20,25,0.40), transparent, transparent)"></div>
    </div>

    <div class="section-container relative z-10 w-full pt-6 pb-8 md:pb-10" dir="rtl">
      <!-- Heading — RTL, aligned to the start (right) -->
      <div class="max-w-2xl ml-auto mb-5 hero-enter">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-1.5 bg-brand-gold rounded-full min-h-[100px] flex-shrink-0 hidden md:block"></div>
          <div class="text-start">
            <h1 class="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight">
              كل خيــارات السفر...
              <span class="text-brand-gold">بمكان واحد</span>
            </h1>
            <p class="text-gray-200 text-sm md:text-base mt-3 leading-relaxed">
              حجز رحلات الطيران، قدّم طلبات التأشيرة، واستكشف خدمات السفر – كل ذلك في مكان واحد
            </p>
          </div>
        </div>
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hero-enter-delay">
          <svg class="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
          {{ currentSlideLabel }}
        </div>
      </div>

      <!-- Main Search Card — centered -->
      <div class="bg-white rounded-2xl shadow-2xl shadow-black/25 overflow-hidden max-w-5xl mx-auto relative z-20 hero-card-enter">
        <!-- Tabs Row -->
        <div class="flex justify-center border-b border-gray-100 bg-gray-50/60 px-2 pt-3 pb-0 overflow-x-auto gap-2 md:gap-4">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="flex flex-col items-center gap-1 px-3 py-2 pb-3 rounded-t-xl transition-all duration-200 min-w-[56px] border-b-2"
            :class="activeTab === tab.id
              ? 'border-brand-gold bg-white -mb-px'
              : 'border-transparent opacity-60 hover:opacity-90'"
            @click="activeTab = tab.id"
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              :class="activeTab === tab.id ? 'bg-brand-gold text-brand-navy' : 'bg-gray-200 text-gray-500'"
            >
              <span v-html="tab.icon" class="flex items-center justify-center"></span>
            </div>
            <span class="text-[11px] font-semibold whitespace-nowrap"
              :class="activeTab === tab.id ? 'text-brand-gold' : 'text-gray-500'">
              {{ tab.label }}
            </span>
          </button>
        </div>

        <div class="p-5 md:p-6 relative">
          <Transition name="tab-fade" mode="out-in">
            <div :key="activeTab">
          <!-- ══════════════ FLIGHTS TAB ══════════════ -->
          <div v-if="activeTab === 'flights'">
            <div class="flex flex-wrap gap-2 mb-5">
              <button
                v-for="type in flightTypes"
                :key="type.id"
                class="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-all duration-200"
                :class="flightType === type.id
                  ? 'bg-gold-10 text-brand-navy border border-gold-30 font-semibold'
                  : 'text-gray-400 border border-gray-200 hover:border-gold-30'"
                @click="flightType = type.id"
              >
                <span v-if="flightType === type.id" class="w-2 h-2 bg-brand-gold rounded-full"></span>
                {{ type.label }}
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              <!-- From -->
              <div class="relative">
                <label class="block text-gray-400 text-xs mb-1 text-right">من</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <input v-model="flightForm.from" type="text" placeholder="المغادرة من" class="input-field" style="padding-right:2.25rem"
                    @focus="showFromDropdown = true" @blur="hideDropdown('from')" />
                  <Transition name="dropdown">
                    <div v-if="showFromDropdown && filteredFromAirports.length" class="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-44 overflow-y-auto">
                      <button v-for="ap in filteredFromAirports" :key="ap.code"
                        class="w-full text-right px-3 py-2 text-sm hover:bg-gold-05 flex items-center justify-between"
                        @mousedown.prevent="selectAirport('from', ap)">
                        <span class="text-gray-400 font-english text-xs">{{ ap.code }}</span>
                        <span class="text-brand-navy">{{ ap.city }} - {{ ap.country }}</span>
                      </button>
                    </div>
                  </Transition>
                </div>
              </div>
              <!-- To -->
              <div class="relative">
                <label class="block text-gray-400 text-xs mb-1 text-right">إلى</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <input v-model="flightForm.to" type="text" placeholder="الوصول إلى" class="input-field" style="padding-right:2.25rem"
                    @focus="showToDropdown = true" @blur="hideDropdown('to')" />
                  <Transition name="dropdown">
                    <div v-if="showToDropdown && filteredToAirports.length" class="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-44 overflow-y-auto">
                      <button v-for="ap in filteredToAirports" :key="ap.code"
                        class="w-full text-right px-3 py-2 text-sm hover:bg-gold-05 flex items-center justify-between"
                        @mousedown.prevent="selectAirport('to', ap)">
                        <span class="text-gray-400 font-english text-xs">{{ ap.code }}</span>
                        <span class="text-brand-navy">{{ ap.city }} - {{ ap.country }}</span>
                      </button>
                    </div>
                  </Transition>
                </div>
              </div>
              <!-- Date -->
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">تاريخ المغادرة</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <input v-model="flightForm.date" type="date" class="input-field date-hide-icon" style="padding-right:2.25rem" />
                </div>
              </div>
              <!-- Passengers -->
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">عدد المسافرين</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <select v-model="flightForm.passengers" class="input-field appearance-none" style="padding-right:2.25rem">
                    <option value="1eco">1 مسافر • اقتصادي</option>
                    <option value="2eco">2 مسافر • اقتصادي</option>
                    <option value="3eco">3 مسافر • اقتصادي</option>
                    <option value="1bus">1 مسافر • أعمال</option>
                    <option value="1first">1 مسافر • أولى</option>
                  </select>
                </div>
              </div>
            </div>

            <button class="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              ابحث الآن
            </button>

            <!-- Quick routes suggestions -->
            <div class="mt-5 pt-4 border-t border-gray-100">
              <p class="text-xs text-gray-400 text-right mb-3">مسارات شائعة من بغداد</p>
              <div class="flex gap-2 flex-wrap justify-end">
                <button v-for="r in quickRoutes" :key="r.to"
                  class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gold-10 hover:text-brand-navy border border-gray-200 hover:border-gold-30 text-sm transition-all"
                  @click="setQuickRoute(r)">
                  <span class="text-brand-gold font-english text-xs font-bold">{{ r.toCode }}</span>
                  <span class="text-gray-600">{{ r.to }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- ══════════════ HOTELS TAB ══════════════ -->
          <div v-else-if="activeTab === 'hotels'">
            <div class="mb-2 text-right">
              <h3 class="font-bold text-brand-navy text-lg">ابحث عن فندقك</h3>
              <p class="text-gray-400 text-sm">فنادق مميزة بأسعار حصرية</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 mt-4">
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">الوجهة</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <select v-model="hotelForm.city" class="input-field appearance-none" style="padding-right:2.25rem">
                    <option value="">اختر المدينة</option>
                    <option v-for="c in hotelCities" :key="c" :value="c">{{ c }}</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">تاريخ الوصول</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <input v-model="hotelForm.checkIn" type="date" class="input-field date-hide-icon" style="padding-right:2.25rem" />
                </div>
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">تاريخ المغادرة</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <input v-model="hotelForm.checkOut" type="date" class="input-field date-hide-icon" style="padding-right:2.25rem" />
                </div>
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">الغرف والضيوف</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <select v-model="hotelForm.rooms" class="input-field appearance-none" style="padding-right:2.25rem">
                    <option value="1-2">1 غرفة • 2 ضيوف</option>
                    <option value="1-3">1 غرفة • 3 ضيوف</option>
                    <option value="2-4">2 غرفة • 4 ضيوف</option>
                    <option value="2-6">2 غرفة • 6 ضيوف</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-base mb-5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              ابحث عن فندق
            </button>

            <!-- Featured Hotels -->
            <div class="pt-4 border-t border-gray-100">
              <p class="text-xs text-gray-400 text-right mb-3">فنادق مميزة</p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div v-for="h in featuredHotels" :key="h.id"
                  class="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gold-20 transition-all cursor-pointer">
                  <div class="relative h-28">
                    <img :src="h.image" :alt="h.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute top-2 left-2 bg-brand-gold text-brand-navy text-xs font-bold px-2 py-0.5 rounded-full font-english">
                      {{ h.price }}$/night
                    </div>
                  </div>
                  <div class="p-3">
                    <div class="flex justify-between items-start">
                      <div class="flex text-yellow-400 text-xs">
                        <span v-for="s in h.stars" :key="s">★</span>
                      </div>
                      <h4 class="text-brand-navy font-bold text-sm text-right">{{ h.name }}</h4>
                    </div>
                    <p class="text-gray-400 text-xs text-right mt-0.5">{{ h.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ══════════════ VISAS TAB ══════════════ -->
          <div v-else-if="activeTab === 'visas'">
            <div class="mb-4 text-right">
              <h3 class="font-bold text-brand-navy text-lg">تأشيرات سفر مضمونة</h3>
              <p class="text-gray-400 text-sm">اختر الوجهة وقدّم طلبك بسهولة</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">اختر الوجهة</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"/></svg>
                  <select v-model="visaForm.country" class="input-field appearance-none" style="padding-right:2.25rem">
                    <option value="">اختر الدولة</option>
                    <option v-for="v in visaOptions" :key="v.id" :value="v.nameEn">{{ v.name }}</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-gray-400 text-xs mb-1 text-right">نوع التأشيرة</label>
                <div class="relative">
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <select v-model="visaForm.type" class="input-field appearance-none" style="padding-right:2.25rem">
                    <option value="tourist">سياحية</option>
                    <option value="visit">زيارة</option>
                    <option value="business">عمل</option>
                    <option value="student">دراسية</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-base mb-5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              قدّم الآن
            </button>

            <!-- Visa Destination Cards -->
            <div class="pt-4 border-t border-gray-100">
              <p class="text-xs text-gray-400 text-right mb-3">وجهات شائعة</p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div v-for="v in popularVisas" :key="v.id"
                  class="relative h-24 rounded-xl overflow-hidden cursor-pointer group"
                  @click="visaForm.country = v.nameEn">
                  <img :src="v.image" :alt="v.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
                  <div class="absolute bottom-2 right-0 left-0 text-center">
                    <span class="text-white text-xs font-bold">{{ v.name }}</span>
                  </div>
                  <div v-if="visaForm.country === v.nameEn" class="absolute inset-0 ring-2 ring-brand-gold ring-inset rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- ══════════════ GROUPS TAB ══════════════ -->
          <div v-else-if="activeTab === 'groups'">
            <div class="mb-4 text-right">
              <h3 class="font-bold text-brand-navy text-lg">اختر برنامجك السياحي</h3>
              <p class="text-gray-400 text-sm">اكتشف وجهاتنا المميزة</p>
            </div>

            <!-- Tour destination grid — 2 columns, matching original -->
            <div class="grid grid-cols-2 gap-2.5 mb-4">
              <div v-for="tour in toursList" :key="tour.id"
                class="relative rounded-xl overflow-hidden cursor-pointer group h-28 md:h-32"
                :class="selectedTour === tour.id ? 'ring-2 ring-brand-gold' : ''"
                @click="selectedTour = tour.id">
                <img :src="tour.image" :alt="tour.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-2.5">
                  <p class="text-white font-bold text-sm leading-tight text-right">{{ tour.title }}</p>
                  <p class="text-brand-gold font-english text-xs font-bold mt-0.5">
                    {{ tour.currency }}{{ tour.price.toLocaleString() }} / {{ tour.perPerson }}
                  </p>
                </div>
                <div v-if="selectedTour === tour.id" class="absolute top-2 right-2 w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-brand-navy" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </div>
              </div>
            </div>

            <button class="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              ابحث الآن
            </button>
          </div>

          <!-- ══════════════ TRANSPORT TAB ══════════════ -->
          <div v-else-if="activeTab === 'transport'">
            <div class="mb-4 text-right">
              <h3 class="font-bold text-brand-navy text-lg">احجز رحلتك البرية</h3>
              <p class="text-gray-400 text-sm">اختر وجهتك من بغداد أو كربلاء</p>
            </div>

            <!-- Destination list -->
            <div class="space-y-3 mb-5">
              <div v-for="dest in groundDestinations" :key="dest.id"
                class="flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all"
                :class="selectedTransport === dest.id
                  ? 'border-brand-gold bg-gold-05'
                  : 'border-gray-200 hover:border-gold-40'"
                @click="selectedTransport = dest.id">
                <svg class="w-5 h-5" :class="selectedTransport === dest.id ? 'text-brand-navy' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <div class="text-right">
                  <p class="font-bold text-brand-navy">{{ dest.country }}</p>
                  <p class="text-gray-400 text-sm">{{ dest.airport }}</p>
                </div>
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                  :class="selectedTransport === dest.id ? 'bg-brand-gold text-brand-navy' : 'bg-gray-100 text-gray-500'">
                  <span v-html="dest.icon" class="flex items-center justify-center"></span>
                </div>
              </div>
            </div>

            <!-- Departure from -->
            <div class="mb-4">
              <label class="block text-gray-400 text-xs mb-1 text-right">نقطة المغادرة</label>
              <div class="relative">
                <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <select v-model="transportForm.from" class="input-field appearance-none" style="padding-right:2.25rem">
                  <option value="BGW">بغداد (مطار بغداد الدولي)</option>
                  <option value="KBL">كربلاء المقدسة</option>
                  <option value="NJF">النجف (مطار النجف الدولي)</option>
                </select>
              </div>
            </div>

            <button class="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
              احجز الآن
            </button>

            <!-- Price list -->
            <div class="pt-4 mt-2 border-t border-gray-100">
              <p class="text-xs text-gray-400 text-right mb-3">أسعار تقريبية من بغداد</p>
              <div class="divide-y divide-gray-100">
                <div v-for="price in transportPrices" :key="price.dest"
                  class="flex items-center justify-between py-2.5">
                  <div class="text-left">
                    <span class="text-brand-gold font-english font-bold text-sm">{{ price.price.toLocaleString() }}</span>
                    <span class="text-gray-400 text-xs ml-1">د.ع.</span>
                  </div>
                  <div class="text-right">
                    <p class="text-brand-navy font-semibold text-sm">{{ price.dest }}</p>
                    <p class="text-gray-400 text-xs">{{ price.airport }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Carousel dots — sit in the rounded corner gap -->
      <div class="flex justify-center gap-2 mt-5">
        <button
          v-for="(slide, i) in heroSlides"
          :key="slide.src"
          class="h-1.5 rounded-full transition-all duration-500"
          :class="i === heroIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-white/40 hover:bg-white/70'"
          :aria-label="slide.label"
          @click="heroIndex = i; restartHeroTimer()"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { airports } from '~/data/airports'
import { tours } from '~/data/tours'
import { visas } from '~/data/visas'
import { hotels } from '~/data/hotels'
import type { Airport } from '~/data/airports'

const activeTab = ref('flights')
const flightType = ref('oneWay')
const showFromDropdown = ref(false)
const showToDropdown = ref(false)
const selectedTour = ref<number | null>(null)
const selectedTransport = ref<number | null>(1)
const heroIndex = ref(0)
let heroTimer: ReturnType<typeof setInterval> | null = null

const heroSlides = [
  { src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80', label: 'الخطوط الجوية العراقية' },
  { src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=80', label: 'اسطنبول' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80', label: 'دبي' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', label: 'اكتشف العالم' },
  { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80', label: 'رحلات فاخرة' },
]

const currentSlideLabel = computed(() => heroSlides[heroIndex.value].label)

function startHeroTimer() {
  heroTimer = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroSlides.length
  }, 6000)
}

function restartHeroTimer() {
  if (heroTimer) clearInterval(heroTimer)
  startHeroTimer()
}

onMounted(() => startHeroTimer())
onUnmounted(() => { if (heroTimer) clearInterval(heroTimer) })

const flightForm = reactive({ from: '', to: '', date: '', passengers: '1eco' })
const hotelForm = reactive({ city: '', checkIn: '', checkOut: '', rooms: '1-2' })
const visaForm = reactive({ country: '', type: 'tourist' })
const transportForm = reactive({ from: 'BGW' })

const tabs = [
  { id: 'flights', label: 'الطيران', icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>' },
  { id: 'hotels', label: 'فنادق ايران', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
  { id: 'visas', label: 'التأشيرات', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
  { id: 'groups', label: 'كروبات', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
  { id: 'transport', label: 'النقل البري', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>' },
]

const flightTypes = [
  { id: 'oneWay', label: 'ذهاب فقط' },
  { id: 'roundTrip', label: 'ذهاب وعودة' },
  { id: 'multiCity', label: 'مدن متعددة' },
  { id: 'openReturn', label: 'عودة اوبن' },
]

const quickRoutes = [
  { to: 'اسطنبول', toCode: 'IST' },
  { to: 'دبي', toCode: 'DXB' },
  { to: 'طهران', toCode: 'IKA' },
  { to: 'عمان', toCode: 'AMM' },
  { to: 'مشهد', toCode: 'MHD' },
]

const hotelCities = ['طهران', 'مشهد', 'إصفهان', 'كيش', 'تبريز', 'شيراز', 'رشت']

const featuredHotels = computed(() => hotels.slice(0, 3))

const visaOptions = computed(() => visas.slice(0, 12))

const popularVisas = computed(() => visas.slice(0, 4))

const toursList = computed(() => tours)

const groundDestinations = [
  {
    id: 1,
    country: 'الأردن',
    airport: 'Amman / Queen Alia Airport',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
  {
    id: 2,
    country: 'تركيا',
    airport: 'Multiple destinations available',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>',
  },
  {
    id: 3,
    country: 'إيران',
    airport: 'Tehran / Mashhad / Isfahan',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"/></svg>',
  },
]

const transportPrices = [
  { dest: 'عمان (الأردن)', airport: 'AMM', price: 72435 },
  { dest: 'اسطنبول (تركيا)', airport: 'IST', price: 136754 },
  { dest: 'طهران (إيران)', airport: 'IKA', price: 74115 },
  { dest: 'مشهد (إيران)', airport: 'MHD', price: 108683 },
]

const filteredFromAirports = computed(() => {
  if (!flightForm.from) return airports
  return airports.filter(a =>
    a.city.includes(flightForm.from) ||
    a.cityEn.toLowerCase().includes(flightForm.from.toLowerCase()) ||
    a.code.toLowerCase().includes(flightForm.from.toLowerCase())
  )
})

const filteredToAirports = computed(() => {
  if (!flightForm.to) return airports
  return airports.filter(a =>
    a.city.includes(flightForm.to) ||
    a.cityEn.toLowerCase().includes(flightForm.to.toLowerCase()) ||
    a.code.toLowerCase().includes(flightForm.to.toLowerCase())
  )
})

function selectAirport(field: 'from' | 'to', airport: Airport) {
  flightForm[field] = `${airport.city} (${airport.code})`
  if (field === 'from') showFromDropdown.value = false
  else showToDropdown.value = false
}

function hideDropdown(field: 'from' | 'to') {
  setTimeout(() => {
    if (field === 'from') showFromDropdown.value = false
    else showToDropdown.value = false
  }, 200)
}

function setQuickRoute(r: { to: string; toCode: string }) {
  flightForm.from = 'بغداد (BGW)'
  flightForm.to = r.to + ' (' + r.toCode + ')'
}
</script>

<style scoped>
.date-hide-icon::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  width: 100%;
  left: 0;
  cursor: pointer;
}
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
