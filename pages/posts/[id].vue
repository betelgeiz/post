<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ post.photo.title }}</Title>
      <Meta name="description" :content="post.photo.description" />
    </Head>
    
    <PostDetails :post="post.photo" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://api.slingacademy.com/v1/sample-data/photos/' + id

  //  fetch the products
  const { data: post } = await useFetch(uri, { key: id })

  if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }

  definePageMeta({
    layout: "posts",
  })
</script>