<script setup lang="ts">
const name = ref('')
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <UApp>
    <UContainer class="py-12">
      <div class="mx-auto max-w-xl space-y-6">
        <div>
          <div class="flex items-center justify-between gap-4">
            <UBadge label="Wissem UI" />
            <UButton
              label="Toggle theme"
              color="neutral"
              variant="ghost"
              @click="toggleColorMode"
            />
          </div>

          <h1 class="mt-3 text-3xl font-semibold">
            Wissem UI Playground
          </h1>

          <p class="mt-2 text-muted">
            Shared Wissem foundations through the Nuxt Layer.
          </p>
        </div>

        <UCard>
          <div class="space-y-4">
            <UFormField label="Example input">
              <UInput
                v-model="name"
                class="w-full"
                placeholder="Type something..."
              />
            </UFormField>

            <p v-if="name" class="text-sm text-muted">
              Hello, {{ name }}.
            </p>

            <div class="flex flex-wrap gap-2">
              <UButton label="Primary action" />
              <UButton label="Secondary action" variant="outline" />
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </UApp>
</template>
