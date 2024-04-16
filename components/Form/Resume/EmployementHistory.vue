<template>
    <div class="flex flex-col gap-4">
        <p>Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</p>
        <template v-for="(item, index) in resumeStore.currentResume.employement_history">
            <UCard>
                <template #header>
                    <div class="flex flex-row gap-3 justify-between items-center">
                        <div class="flex flex-col">
                            <p class="font-semibold">{{ item.jobTitle ?? '(Not Specified)' }} {{ item.employer ? `at ${item.employer}` :'' }}</p>
                            <span>{{ item.startDate }} - {{ item.endDate ?? 'Present' }}</span>
                        </div>
                        <UButton @click="onDeleteEmployementHistory(index)"
                            color="red" variant="ghost"
                            icon="i-heroicons-trash"/>
                    </div>
                </template>
                <div class="grid grid-cols-2 gap-2 relative">
                    <UFormGroup label="Job Title" class="col-span-2">
                        <UInput type="text" v-model="item.jobTitle" placeholder="Job Title" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Description" class="col-span-2">
                        <UTextarea v-model="item.description" placeholder="Description" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Employer">
                        <UInput type="text" v-model="item.employer" placeholder="Employer" size="sm" />
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
        <UButton icon="i-heroicons-plus" variant="ghost" @click="onAddEmployementHistory()">Add Experience</UButton>
    </div>
</template>

<script lang="ts" setup>
const resumeStore = useResumeStore();

function onDeleteEmployementHistory(index: number) {
  resumeStore.currentResume.employement_history.splice(index, 1);
}

function onAddEmployementHistory() {
  resumeStore.currentResume.employement_history.push({
    jobTitle: null,
    description: null,
    employer: null,
    city: null,
    startDate: null,
    endDate: null
  })
}
</script>