<template>
  <div class="home-page">

    <h1>StarWars films list</h1>

    <p>In this section, you can see StarWars films list.</p>

    <Loader :loading="fetching"/>

    <table class="table" v-if="!fetching">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        <FilmItem
          v-for="film in films"
          :film="film"
          :key="film.title"/>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import FilmItem from '@/components/FilmItem'
  import Loader from '@/components/Loader'
  import films from '@/store/modules/films'

  @Component({
    components: {
      FilmItem,
      Loader
    }
  })
  export default class Home extends Vue {
    films: FilmItem[] = []

    fetching: boolean = false

    created () {
      this.fetching = true
      films.getFilms()
        .then(() => {
          this.films = films.films
        })
        .finally(() => {
          this.fetching = false
        })
    }
  }
</script>