<template>
<div class="flex flex-col gap-4">
        <p>Write 2-4 short &amp; energetic sentences to interest the reader! Mention your role, experience &amp; most importantly - your biggest achievements, best qualities and skills.</p>
        <UTextarea v-model="resumeStore.currentResume.professional_summary" :rows="6"
            placeholder="Pationated Software Engineer with 5+ years of experience and a track record of ..." />
    </div>
</template>

<script lang="ts" setup>

const resumeStore = useResumeStore();

</script>