import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    posts: []
  }),
  getters: {
    getPosts: (state) => state.posts
  },
  actions: {
    async getPostsList() {
      try {
        const {data} = await useFetch('https://api.slingacademy.com/v1/sample-data/photos')

        if (data._rawValue?.photos)
          this.posts = data._rawValue.photos
      } catch (error) {
        console.log(error)
      }
    },

    addPost(title, description) {
      try {
        const id =  this.posts[this.posts.length-1].id + 1 //this.posts.length + 1
        const obj = {title, description, id, url: 'https://api.slingacademy.com/public/sample-photos/'+id+'.jpeg'}
        this.posts = [...this.posts, obj]
      } catch (error) {
        console.log(error)
      }
    },

    deletePost (id) {
      console.log(id)
      this.posts = this.posts.filter(p => p.id !== id);
    }
  },
})