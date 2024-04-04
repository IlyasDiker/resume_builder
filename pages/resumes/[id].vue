<template>
  <div class="flex flex-row h-screen">
    <PreviewWrapper class="flex-grow">
      <div class="bg-white max-w-[800px] aspect-paper w-full mx-auto shadow-xl"></div>
    </PreviewWrapper>
    <main class="flex flex-col px-6 py-12 min-w-[400px] w-1/3">
      <form class="flex flex-col gap-4">
        <span class="text-3xl font-semibold">Resume</span>
        <UAccordion :items="accordionItems">
        </UAccordion>
      </form>
    </main>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute();

const accordionItems = [
  {label: "General", icon: "i-heroicons-user"},
  {label: "General", icon: "i-heroicons-user"},
  {label: "General", icon: "i-heroicons-user"},
  {label: "General", icon: "i-heroicons-user"},
]

</script>

<style lang="scss">
.aspect-paper{
  aspect-ratio: 1 / 1.41;
}
</style>
