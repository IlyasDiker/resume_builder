<template>
    <div class="flex flex-col gap-4">
        <template v-for="(item, index) in resumeStore.currentResume.education">
            <UCard>
                <div class="flex flex-row gap-3 justify-between items-center">
                    <div class="flex flex-col">
                        <p class="font-semibold">{{ item.degree }} at {{ item.school }}</p>
                        <span>{{ item.startDate }} - {{ item.endDate ?? 'Present' }}</span>
                    </div>
                    <UButton @click="onDeleteEducationHistory(index)"
                        icon="i-heroicons-trash"></UButton>
                </div>
                <hr class="my-5"/>
                <div class="grid grid-cols-2 gap-2 relative">
                    <UFormGroup label="School" class="col-span-2">
                        <UInput type="text" v-model="item.school" placeholder="School" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="Description" class="col-span-2">
                        <UTextarea v-model="item.description" placeholder="Description" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="Degree">
                        <UInput type="text" v-model="item.degree" placeholder="Degree" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="City">
                        <UInput type="text" v-model="item.city" placeholder="City" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="Start Date">
                        <UInput type="month" v-model="item.startDate" placeholder="Start Date" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="End Date">
                        <UInput type="month" v-model="item.endDate" placeholder="End Date" size="xl" />
                    </UFormGroup>
                </div>
            </UCard>
        </template>
        <UButton color="white" @click="onAddEducationHistory()">Add Experience</UButton>
    </div>
</template>

<script lang="ts" setup>
const resumeStore = useResumeStore();

function onDeleteEducationHistory(index: number) {
  resumeStore.currentResume.education.splice(index, 1);
}

function onAddEducationHistory() {
  resumeStore.currentResume.education.push({
    school: null,
    degree: null,
    city: null,
    description: null,
    startDate: null,
    endDate: null
  })
}
</script>