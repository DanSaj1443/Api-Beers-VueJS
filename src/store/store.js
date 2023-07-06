import { defineStore } from 'pinia'
import axios from 'axios'

const URLBEERS = "http://localhost:8808/beers"

const beersStore = defineStore('beers',{
    state: () => {
    return {
        beerList: [], //list to store beer
        responseAdd:{}
    }
},
getters: {
    getAllBeers: (state) => state.beerList,
    getResponseAddBeer: (state) => state.responseAdd
},
actions: {
    async getBeers() {       
        try {
          const promisBeerList = await axios.get(URLBEERS);
          let listBeers = promisBeerList.data;
          this.beerList = listBeers.data
        } catch (error) {
          console.error(error);
        }
      },

      async createBeers(beer){
        try {
          console.log('[STORE][berrsStore][createBeers] Post beer')
            const response = await axios.post(URLBEERS, {
                "name": beer.name,
                "tagline": beer.tagline,
                "first_brewed": beer.first_brewed,
                "image_url": beer.image_url,
                "contributed_by": beer.contributed_by,
                "food_pairing": [
                  beer.food_pairing,
                  beer.food_pairingDeux,
                  beer.food_pairingTrois
                ],
                "brewers_tips": beer.brewers_tips,
                "description": beer.description
            });
           this.beerList.push(response.data)
           this.responseAdd = response
        } catch (error) {
            console.error(error);
      }
    },

      async deleteBeer(id){
        try {
          console.log('[Service][AxiosService][deleteBeers] Deleting beer by id', id)
          const del = await axios.delete(URLBEERS + '/' + id)
          if (del.status !== 200) throw new Error('Beer not deleted')
          const indexOfBeerToDelete = this.beerList.findIndex((beer) => beer.id === id)
          this.beerList.splice(indexOfBeerToDelete, 1)
        } catch (error) {
          console.error(error)
        }
      }
    
}
})

export {beersStore}