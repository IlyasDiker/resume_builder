<template>
    <div class="flex flex-col gap-4">
        <template v-for="(item, index) in resumeStore.currentResume.employement_history">
            <UCard>
                <div class="flex flex-row gap-3 justify-between items-center">
                    <div class="flex flex-col">
                        <p class="font-semibold">{{ item.jobTitle }} at {{ item.employer }}</p>
                        <span>{{ item.startDate }} - {{ item.endDate ?? 'Present' }}</span>
                    </div>
                    <UButton @click="onDeleteEmployementHistory(index)"
                        icon="i-heroicons-trash"></UButton>
                </div>
                <hr class="my-5"/>
                <div class="grid grid-cols-2 gap-2 relative">
                    <UFormGroup label="Job Title" class="col-span-2">
                        <UInput type="text" v-model="item.jobTitle" placeholder="Job Title" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="Description" class="col-span-2">
                        <UTextarea v-model="item.description" placeholder="Description" size="xl" />
                    </UFormGroup>
                    <UFormGroup label="Employer">
                        <UInput type="text" v-model="item.employer" placeholder="Employer" size="xl" />
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
        <UButton color="white" @click="onAddEmployementHistory()">Add Experience</UButton>
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