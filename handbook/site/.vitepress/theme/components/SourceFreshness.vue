<script setup lang="ts">
import { computed } from 'vue'
import staleSkills from '../../generated/stale-skills.json'

const props = defineProps<{ skill: string }>()
const stale = computed(() => staleSkills.includes(props.skill))
</script>

<template>
  <p v-if="stale" class="source-stale" role="status">
    英文原文已有更新：请核对本页中文说明后，再运行 <code>npm run handbook:refresh-source-hashes</code>。
  </p>
</template>
