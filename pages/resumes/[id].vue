<template>
  <div class="flex flex-row min-h-screen">
    <div class="flex flex-col flex-grow h-full relative sticky top-0 bottom-0">
      <PreviewWrapper class="w-full h-screen">
        <div class="bg-white max-w-[800px] aspect-paper w-full flex-shrink-0 mx-auto shadow-xl"></div>
      </PreviewWrapper>
    </div>
    <main class="flex flex-col px-6 py-12 min-w-[400px] w-1/3">
      <form class="flex flex-col gap-4">
        <span class="text-3xl font-semibold">Resume</span>
        <UAccordion :items="accordionItems" color="gray" variant="ghost" multiple :defaultOpen="true">
          <template #default="{ item, open }">
            <UButton color="gray" variant="ghost" :ui="{ padding: { sm: 'py-3' } }" :icon="item.icon">
              <span class="truncate">{{ item.label }}</span>
              <template #trailing>
                <UIcon name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"/>
              </template>
            </UButton>
          </template>
          <template #personal_details>
            <FormResumePersonalDetails/>
          </template>
          <template #experience>
            <FormResumeEmployementHistory/>
          </template>
          <template #education>
            <FormResumeEducationHistory/>
          </template>
          <template #skills>
            <FormResumeSkills/>
          </template>
          <template #languages>
            <FormResumeLanguages/>
          </template>
          <template #courses>
            <LazyFormResumeCourses/>
          </template>
          <template #summary>
            <LazyFormResumeSummary/>
          </template>
        </UAccordion>
      </form>
    </main>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const resumeStore = useResumeStore();

resumeStore.currentResume = resumeStore.getEmptyResume();

const accordionItems = [
  { slot: "personal_details", label: "Personal Details", icon: "i-heroicons-user" },
  { slot: "experience", label: "Experience", icon: "i-heroicons-briefcase" },
  { slot: "education", label: "Education", icon: "i-heroicons-academic-cap" },
  { slot: "skills", label: "Skills", icon: "i-heroicons-bolt" },
  { slot: "languages", label: "Languages", icon: "i-heroicons-language" },
  { slot: "courses", label: "Certificats", icon: "i-heroicons-clipboard-document-check" },
  { slot: "summary", label: "Summary", icon: "i-heroicons-document-text" },
]

</script>

<style lang="scss">
.aspect-paper {
  aspect-ratio: 210 / 297;
}
</style>
