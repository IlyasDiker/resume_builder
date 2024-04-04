<template>
    <UiContainer>
        <div class="flex flex-row justify-between gap-3 border-b">
            <NuxtLink to="/" class="flex flex-row gap-4 py-6 items-center">
                <AppLogo class="h-6"/>
                <span class="text-3xl font-semibold text-gray-700">Resume</span>
            </NuxtLink>
            <UHorizontalNavigation :items="navItems"/>
        </div>
    </UiContainer>
</template>

<script lang="ts" setup>
const navItems = [
    {

    }
]
</script>