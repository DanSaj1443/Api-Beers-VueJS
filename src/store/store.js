import { defineStore } from 'pinia'
import axios from 'axios'

const URLBEERS = "http://localhost:8808/beers"

const beersStore = defineStore('beers',{
    state: () => {
    return {
        beerList: [], //list to store beer
    }
},
getters: {
    getAllBeers: (state) => state.beerList
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

      async createBeers(name,tagline,first_brewed,image_url,food_pairing,food_pairingDeux,food_pairingTrois,contributed_by,brewers_tips,description){
        try {
          console.log('[STORE][berrsStore][createBeers] Post beer')
            const response = await axios.post(URLBEERS, {
                "name": name,
                "tagline": tagline,
                "first_brewed": first_brewed,
                "image_url": image_url,
                "contributed_by": contributed_by,
                "food_pairing": [
                    food_pairing,
                    food_pairingDeux,
                    food_pairingTrois
                ],
                "brewers_tips": brewers_tips,
                "description": description
            });
           this.beerList.push(response.data)
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