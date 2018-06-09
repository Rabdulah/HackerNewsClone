

<template>
<div class="container">
   <item v-for="story in stories" :key="story.data.id" :story="story"></item>
 </div>
</template>

<script>
import axios from 'axios' // the import must be within the script tags!
import Item from '@/components/Item'

export default {
  name: 'Homepage',
  components: {
    'item': Item
  },
  data: function () {
    return {
      err: '',
      stories: []
    }
  },
  created: function () {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(result => {
        this.results = result.data.slice(0, 10)
        this.results.forEach(element => {
          axios.get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
            .then(result => {
              this.stories.push(result)
            })
            .catch(err => {
              console.log(err)
            })
        })
      })
      .catch((err) => { this.err = err })
  }
}
</script>

<style scoped>

</style>
