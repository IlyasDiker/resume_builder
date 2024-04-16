<template>
    <div class="flex flex-col gap-4">
        <p>A varied education on your resume sums up the value that your learnings and background will bring to job.</p>
        <template v-for="(item, index) in resumeStore.currentResume.education">
            <UCard>
                <template #header>
                    <div class="flex flex-row gap-3 justify-between items-center">
                        <div class="flex flex-col">
                            <p class="font-semibold">{{ item.degree ?? '(Not Specified)' }} {{ item.school ? `at ${item.school}` :'' }}</p>
                            <span>{{ item.startDate }} - {{ item.endDate ?? 'Present' }}</span>
                        </div>
                        <UButton @click="onDeleteEducationHistory(index)"
                            color="red" variant="ghost"
                            icon="i-heroicons-trash"/>
                    </div>
                </template>
                <div class="grid grid-cols-2 gap-2 relative">
                    <UFormGroup label="School" class="col-span-2">
                        <UInput type="text" v-model="item.school" placeholder="School" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Description" class="col-span-2">
                        <UTextarea v-model="item.description" placeholder="Description" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Degree">
                        <UInput type="text" v-model="item.degree" placeholder="Degree" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="City">
                        <UInput type="text" v-model="item.city" placeholder="City" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Start Date">
                        <UInput type="month" v-model="item.startDate" placeholder="Start Date" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="End Date">
                        <UInput type="month" v-model="item.endDate" placeholder="End Date" size="sm" />
                    </UFormGroup>
                </div>
            </UCard>
        </template>
        <UButton icon="i-heroicons-plus" variant="ghost" @click="onAddEducationHistory()">Add Experience</UButton>
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