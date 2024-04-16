<template>
    <div class="flex flex-col gap-4">
        <p>Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).</p>
        <template v-for="(item, index) in resumeStore.currentResume.skills">
            <UCard>
                <template #header>
                    <div class="flex flex-row gap-3 justify-between items-center">
                        <div class="flex flex-col">
                            <p class="font-semibold">{{ item.name ?? '(Not Specified)' }}</p>
                            <span>{{ formatLevelLabel(item.level) }}</span>
                        </div>
                        <UButton @click="onDeleteSkills(index)"
                            color="red" variant="ghost"
                            icon="i-heroicons-trash"/>
                    </div>
                </template>
                <div class="grid grid-cols-2 gap-5 relative">
                    <UFormGroup label="Name">
                        <UInput type="text" v-model="item.name" placeholder="Name" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Level">
                        <URange v-model="item.level" size="sm" :step="1" :min="0" :max="4" class="py-4" />
                    </UFormGroup>
                </div>
            </UCard>
        </template>
        <UButton icon="i-heroicons-plus" variant="ghost" @click="onAddSkills()">Add Skill</UButton>
    </div>
</template>

<script lang="ts" setup>
const resumeStore = useResumeStore();

function onDeleteSkills(index: number) {
  resumeStore.currentResume.skills.splice(index, 1);
}

function onAddSkills() {
  resumeStore.currentResume.skills.push({
    name: null,
    level: 0
  })
}

function formatLevelLabel(level: number) {
  return level === 0 ? 'Novice': level === 1 ? 'Beginner' : level === 2 ? 'Skillfull' : level === 3 ? 'Experienced' : 'Expert'
}
</script>