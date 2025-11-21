<script setup lang="ts">
import { provide } from 'vue'
import { fieldGroupInjectionKey } from '../composables/useFieldGroup'

provide(fieldGroupInjectionKey, undefined)
</script>

<template>
  <slot />
</template>
