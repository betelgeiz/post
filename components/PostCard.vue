<template>
  <div class="card text-center">
    <img :src="`${post.url}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ post.title }}</p>
    <NuxtLink :to="`/posts/${post.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
    <button type="button" class="btn my-4" @click="DeletePost(post.id)">Delete</button>

  </div>
</template>
  
<script setup>
const { post } = defineProps(['post'])
import { useMainStore } from '@/stores/index'

const main = useMainStore()
const { deletePost } = main



function DeletePost(id) {
  deletePost(id)

  //console.log(id)
}
</script>
  
<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
  