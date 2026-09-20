<template>
  <UContainer class="space-y-8 py-16">
    <div class="space-y-2">
      <p class="font-mono text-xs uppercase tracking-widest text-primary">WissemUI</p>
      <h1 class="text-4xl font-semibold text-highlighted">Glass card</h1>
      <p class="text-muted">A neutral translucent surface with an optional restrained halo.</p>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <WGlassCard class="h-full">
        <div class="space-y-3">
          <h2 class="text-lg font-medium text-highlighted">Interactive halo</h2>
          <p class="text-sm leading-6 text-muted">
            The light stays behind the blurred surface and never replaces its neutral border.
          </p>
        </div>
      </WGlassCard>

      <WGlassCard :halo="false" class="h-full">
        <div class="space-y-3">
          <h2 class="text-lg font-medium text-highlighted">Without halo</h2>
          <p class="text-sm leading-6 text-muted">The same reusable glass surface in a quiet state.</p>
        </div>
      </WGlassCard>
    </div>
  </UContainer>
</template>
