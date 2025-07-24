<template>
  <div class="relative bg-white w-full aspect-[16/9] flex flex-col overflow-hidden group">
    <div 
      class="flex justify-start z-10 p-6 font-glancyr-regular"
      :style="{
        color: [1, 4].includes(magic.id) ? '#ffffff' : '#000000'
      }"
    >
      <h3 class="text-2xl lg:text-3xl leading-tight tracking-wide whitespace-pre-line">
        {{ magic.title }}
      </h3>
    </div>
    <img
      :src="magic.image"
      :alt="magic.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  magic: {
    type: Object,
    required: true,
    validator: (value) => {
      return 'title' in value && 'image' in value && 'id' in value
    }
  }
})
</script>

<style scoped>
img {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>