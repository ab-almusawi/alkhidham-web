<template>
  <div class="min-h-screen bg-[#f4f6f8] font-arabic pb-16 lg:pb-0">
    <LayoutNavbar />
    <main>
      <slot />
    </main>
    <LayoutFooter />
    <LayoutWhatsappButton />
    <LayoutBottomNav />
  </div>
</template>

<script setup lang="ts">
useAnimations()
</script>
