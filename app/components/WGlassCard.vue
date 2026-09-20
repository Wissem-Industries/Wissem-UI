<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    halo?: boolean
    bodyClass?: string
  }>(),
  {
    halo: true,
    bodyClass: undefined,
  },
)

function updateHalo(event: PointerEvent) {
  const element = event.currentTarget as HTMLElement
  const bounds = element.getBoundingClientRect()
  element.style.setProperty('--wi-glass-x', `${event.clientX - bounds.left}px`)
  element.style.setProperty('--wi-glass-y', `${event.clientY - bounds.top}px`)
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="wi-glass-card"
    :class="{ 'wi-glass-card--halo': halo }"
    @pointermove="updateHalo"
  >
    <UCard class="wi-glass-card__surface h-full" :ui="{ body: bodyClass }">
      <slot />
    </UCard>
  </div>
</template>
