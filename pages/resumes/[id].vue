<template>
  <div class="flex flex-row h-screen">
    <PreviewWrapper class="flex-grow">
      <div class="bg-white max-w-[800px] aspect-paper w-full flex-shrink-0 mx-auto shadow-xl"></div>
    </PreviewWrapper>
    <main class="flex flex-col px-6 py-12 min-w-[400px] w-1/3">
      <form class="flex flex-col gap-4">
        <span class="text-3xl font-semibold">Resume</span>
        <UAccordion :items="accordionItems" color="gray" variant="ghost" multiple :defaultOpen="true">
          <template #personal_details>
            <div class="grid grid-cols-2 gap-4">
              <label>
                <span>First Name</span>
                <UInput type="text" v-model="resumeStore.currentResume.personal_details.first_name"/>
              </label>
              <label>
                <span>Last Name</span>
                <UInput type="text" v-model="resumeStore.currentResume.personal_details.last_name"/>
              </label>
            </div>
          </template>
          <template #experience>
            <FormResumeEmployementHistory/>
          </template>
          <template #education>
            <FormResumeEducationHistory/>
          </template>
          <template #skills>
            <div class="grid grid-cols-2 gap-4">

            </div>
          </template>
          <template #languages>
            <div class="grid grid-cols-2 gap-4">

            </div>
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
  { slot: "certificats", label: "Certificats", icon: "i-heroicons-clipboard-document-check" },
  { slot: "summary", label: "Summary", icon: "i-heroicons-document-text" },
]

</script>

<style lang="scss">
.aspect-paper {
  aspect-ratio: 210 / 297;
}
</style>
