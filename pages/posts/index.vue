<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in getPosts" :key="p.id">
        <PostCard :post="p" />
      </div>
    </div>
    <hr>
    <div class="addPost">
      <label>Title</label><input type="text" v-model="title">
      <label>Description</label><input type="text" v-model="description">

      <button type="button" class="btn my-4" @click="AddPost">Add</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/index'

const main = useMainStore()

const {getPostsList, addPost} = main;
const { getPosts } = storeToRefs(main)
main.getPosts.length == 0 ? await getPostsList() : null;


definePageMeta({
  layout: "posts",
})

useHead({
  title: 'Posts | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch' }
  ]
})

const title = ref('')
const description = ref('')

function AddPost() {
  addPost(title.value, description.value)
}

</script>