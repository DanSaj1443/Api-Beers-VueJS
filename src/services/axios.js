import axios from "axios";

// Url API
const URLBEERS = "http://localhost:8808/beers"


class AxiosBeers {

    static async getBeers() {       
        try {
          const promisBeerList = await axios.get(URLBEERS);
          let listBeers = promisBeerList.data;
          console.log(listBeers.data)
          return listBeers.data
        } catch (error) {
          console.error(error);
        }
      }
     
    static async createBeers(name,tagline,first_brewed,image_url,food_pairing,food_pairingDeux,food_pairingTrois,contributed_by,brewers_tips,description){
      try {
        console.log('[Service][AxiosService][createBeers] Post beer')
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
          console.log(response.data);
      } catch (error) {
          console.error(error);
    }
  }

  static async deleteBeer(id){
    try {
      console.log('[Service][AxiosService][deleteBeers] Delete beer')
      const del = await axios.delete(URLBEERS + '/' + id)
      console.log(del)
    } catch (error) {
      console.error(error)
    }
  }


}

export default AxiosBeers