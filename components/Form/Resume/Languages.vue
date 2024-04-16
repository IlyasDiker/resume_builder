<template>
    <div class="flex flex-col gap-4">
        <p>Choose 5 important langages that show you fit the position. Make sure they match the key langages mentioned in the job listing (especially when applying via an online system).</p>
        <template v-for="(item, index) in resumeStore.currentResume.langages">
            <UCard>
                <template #header>
                    <div class="flex flex-row gap-3 justify-between items-center">
                        <div class="flex flex-col">
                            <p class="font-semibold">{{ item.name ?? '(Not Specified)' }}</p>
                            <span>{{ formatLanguageLevelLabel(item.level) }}</span>
                        </div>
                        <UButton @click="onDeleteLangage(index)"
                            color="red" variant="ghost" icon="i-heroicons-trash"/>
                    </div>
                </template>
                <div class="grid grid-cols-2 gap-5 relative">
                    <UFormGroup label="Name">
                        <UInput type="text" v-model="item.name" placeholder="Name" size="sm" />
                    </UFormGroup>
                    <UFormGroup label="Level">
                        <USelect v-model="item.level" size="sm" :options="languagesProficieny" 
                            optionAttribute="label" valueAttribute="value"/>
                    </UFormGroup>
                </div>
            </UCard>
        </template>
        <UButton icon="i-heroicons-plus" variant="ghost" @click="onAddLangage()">Add Skill</UButton>
    </div>
</template>

<script lang="ts" setup>
import { languagesProficieny } from '~/data/languagesProficieny';

const resumeStore = useResumeStore();
 
function onDeleteLangage(index: number) {
  resumeStore.currentResume.langages.splice(index, 1);
}

function onAddLangage() {
  resumeStore.currentResume.langages.push({
    name: null,
    level: 0
  })
}

</script>