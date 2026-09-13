export function useAnimations() {
  let observer: IntersectionObserver | null = null
  let mutation: MutationObserver | null = null

  function observeAll() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer?.observe(el)
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observeAll()

    mutation = new MutationObserver(() => observeAll())
    mutation.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    observer?.disconnect()
    mutation?.disconnect()
  })
}

export function useCountUp(target: number, duration: number = 2000) {
  const count = ref(0)
  const isVisible = ref(false)

  function startCount() {
    if (isVisible.value) return
    isVisible.value = true
    const start = performance.now()
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      count.value = Math.floor(progress * target)
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        count.value = target
      }
    }
    requestAnimationFrame(step)
  }

  return { count, startCount }
}
