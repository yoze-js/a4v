<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="p-24px">
    <NP>{{ t('welcome') }}</NP>
    <NDatePicker />
    <NDataTable />
  </div>
</template>
