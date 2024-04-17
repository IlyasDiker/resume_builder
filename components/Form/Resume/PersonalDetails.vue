<template>
    <div class="grid grid-cols-2 gap-4">
        <label class="col-span-2">
            <span>Avatar</span>
            <div class="flex flex-row gap-4 items-center mt-1">
                <UAvatar class="avatar-image-center" size="lg" icon="i-heroicons-user" :src="getFilePreview(resumeStore.currentResume.personal_details.avatar)" />
                <div class="flex flex-col">
                    <UInput type="file" accept="image/*" size="xs" @change="handleFileChange" />
                    <small>JPG, GIF or PNG. 10MB Max.</small>
                </div>
            </div>
        </label>
        <label class="col-span-2">
            <span>Wanted job title</span>
            <UInput type="text" v-model="resumeStore.currentResume.personal_details.wanted_job_title" />
        </label>
        <label>
            <span>First Name</span>
            <UInput type="text" v-model="resumeStore.currentResume.personal_details.first_name" />
        </label>
        <label>
            <span>Last Name</span>
            <UInput type="text" v-model="resumeStore.currentResume.personal_details.last_name" />
        </label>
        <label>
            <span>Email</span>
            <UInput type="email" v-model="resumeStore.currentResume.personal_details.email" />
        </label>
        <label>
            <span>Phone</span>
            <UInput type="tel" v-model="resumeStore.currentResume.personal_details.phone" />
        </label>
        <label>
            <span>Country</span>
            <UInput type="text" v-model="resumeStore.currentResume.personal_details.country" />
        </label>
        <label>
            <span>City</span>
            <UInput type="text" v-model="resumeStore.currentResume.personal_details.city" />
        </label>
        
    </div>
</template>

<script setup lang="ts">

const resumeStore = useResumeStore();

function getFilePreview(file: File | null) {
  if (!file) {
    return null
  }
  return URL.createObjectURL(file);
}

function handleFileChange(files: FileList|null) {
    resumeStore.currentResume.personal_details.avatar = files ? files[0] : null
}

</script>

<style lang="scss" scoped>
.avatar-image-center{
    img{
        @apply object-center object-cover;
    }
}
</style>