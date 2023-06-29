import axios from "axios";
const URLBEERS = "http://localhost:8808/beers"


class AxiosBeers {

    async getBeers() {
        

        try {
          const promisBeerList = await axios.get(URLBEERS);
          let listBeers = promisBeerList.data;
          console.log(listBeers)
          return listBeers.data
        } catch (error) {
          console.error(error);
        }
      }


     
    static async createBeers(name,tagline,first_brewed,image_url,contributed_by,brewers_tips,description){
      try {
          const response = await axios.post(urlBeers, {
              "name": name,
              "tagline": tagline,
              "first_brewed": first_brewed,
              "image_url": image_url,
              "contributed_by": contributed_by,
              // "food_pairing": [
              //     food_pairing,
              //     food_pairingDeux,
              //     food_pairingTrois
              // ],
              "brewers_tips": brewers_tips,
              "description": description
          });
          console.log(response.data);
          // let result = response.data.substr(response.data.length - 4, 4);
          // this.htmlId(result);
      } catch (error) {
          console.error(error);
      }
  }


}

export default AxiosBeers