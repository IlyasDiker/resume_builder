<template>
    <div class="flex flex-col gap-4">
        <template v-for="(item, index) in resumeStore.currentResume.courses">
            <UCard>
                <template #header>
                    <div class="flex flex-row gap-3 justify-between items-center">
                        <div class="flex flex-col">
                            <p class="font-semibold">{{ item.name ?? '(Not Specified)' }} {{ item.school ? `at ${item.school}` :'' }}</p>
                            <span>{{ item.startDate }} - {{ item.endDate ?? 'Present' }}</span>
                        </div>
                        <UButton @click="onDeleteCourseHistory(index)"
                            color="red" variant="ghost"
                            icon="i-heroicons-trash"/>
                    </div>
                </template>
                <div class="grid grid-cols-2 gap-2 relative">
                    <UFormGroup label="Name" class="col-span-2">
                        <UInput v-model="item.name" placeholder="Name" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="School" class="col-span-2">
                        <UInput type="text" v-model="item.school" placeholder="School" size="sm" />
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
        <UButton icon="i-heroicons-plus" variant="ghost" @click="onAddCourseHistory()">Add Course</UButton>
    </div>
</template>

<script lang="ts" setup>
const resumeStore = useResumeStore();

function onDeleteCourseHistory(index: number) {
  resumeStore.currentResume.courses.splice(index, 1);
}

function onAddCourseHistory() {
  resumeStore.currentResume.courses.push({
    name: null,
    school: null,
    startDate: null,
    endDate: null
  })
}
</script>