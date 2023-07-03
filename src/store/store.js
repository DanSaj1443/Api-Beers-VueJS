import { defineStore } from 'pinia'
import axios from 'axios'

const URLBEERS = "http://localhost:8808/beers"

const beersStore = defineStore('beers',{
    state: () => {
    return (
        {
            beerList: [] //list to store beer
        }
    )
},
getters: {
    getAllBeers: (state) => state.beerList,
},
actions: {
    async getBeers() {       
        try {
          const promisBeerList = await axios.get(URLBEERS);
          let listBeers = promisBeerList.data;
          console.log(listBeers.data)
          this.beerList = listBeers.data
        } catch (error) {
          console.error(error);
        }
      }
}
})

export {beersStore}