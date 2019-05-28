import axios from 'axios'
import { FilmResponse } from '@/store/models'

const instanceApi = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function getFilms(): Promise<FilmResponse|undefined> {
  try {
    const response = await instanceApi.get('5cec35c233000092726d79f5')
    return (response.data as FilmResponse)
  } catch (e) {
  }
}
