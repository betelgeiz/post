<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div>
        <h2 class="text-4xl my-7">{{ post.title }}</h2>
      </div>
      <br>
      <div>
        <img :src="`${post.url}`" class="mx-auto my-7" />
      </div>
      <br>
      <div class="p-7">
        <h3 class="font-bold border-b-2 mb-4 pb-2">Post description:</h3>
        <p class="mb-7">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { post } = defineProps(['post'])
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>