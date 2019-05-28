<template>
  <tr class="film-item">
    <td>{{ film.episode_id }}</td>
    <td>{{ film.title }}</td>
    <td>
      <button class="btn btn-info" @click="seeMore">See more</button>
    </td>
  </tr>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator"
  import { Film } from "@/store/models"

  @Component
  export default class FilmItem extends Vue {
    @Prop() film?: Film

    seeMore() {
      this.$router.push(`details/${this.film.episode_id}`)
    }
  }
</script>