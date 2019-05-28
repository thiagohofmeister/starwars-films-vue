import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { Film, FilmResponse } from '@/store/models'
import { getFilms } from '@/store/api'

@Module({
  namespaced: true,
  name: 'films',
  store,
  dynamic: true
})
export class FilmModule extends VuexModule {
  public films: Film[] | [] = []

  @Mutation
  public setFilms(films: Film[]) { this.films = films }

  @Action({ commit: 'setFilms' })
  public async getFilms() {
    const films: FilmResponse|undefined = await getFilms()

    if (films) {
      return films.results
    }

    return []
  }
}

export default getModule(FilmModule)
