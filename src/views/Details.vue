<template>
  <div>
    <Loader :loading="fetching"/>
    <div v-if="film !== null">


      <h1>{{ film.title }}</h1>
      <p>{{ film.opening_crawl }}</p>

      <div class="row">
        <div class="col-12">
          <strong>Director:</strong> {{ film.director }}
        </div>

        <div class="col-12">
          <strong>Producer:</strong> {{ film.producer }}
        </div>

        <div class="col-12">
          <strong>Release:</strong> {{ new Date(film.release_date).toDateString() }}
        </div>

        <div class="col-12">
          <strong>Created:</strong> {{ new Date(film.created).toDateString() }}
        </div>

        <div class="col-12">
          <strong>Edited:</strong> {{ new Date(film.edited).toDateString() }}
        </div>
      </div>

      <button class="btn btn-success btnBack" @click="$router.go(-1)">Voltar</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"
  import { Film } from "@/store/models"
  import films from '@/store/modules/films'
  import Loader from '@/components/Loader'

  @Component({
    components: {
      Loader
    }
  })
  export default class FilmItem extends Vue {
    film: Film | null = null

    fetching: boolean = false

    async created () {
      const episodeId: number = parseInt(this.$route.params.episodeId)

      if (!films.films.length) {
        this.fetching = true

        await films.getFilms()

        this.fetching = false
      }

      this.film = (films.films.find(film => film.episode_id === episodeId) as Film)
    }
  }
</script>

<style lang="sass">
  .btnBack
    margin-top: 20px
</style>