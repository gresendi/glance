import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: 'zTVSw8ND-pZv7p9f_VBa05lBDiDfVazocb8bC_IFnW4',
  fetch: nodeFetch,
});



const BackgroundAPI = {
  



  getBackground: () => {

    unsplash.photos.getRandom({
      featured: true,
      orientation: 'landscape',
      query: 'nature',
      count: 1,
    })
    .then(response =>{
      console.log(response.response[0])
      let name = response.response[0].user.name 
      let userLink = response.response[0].user.links.html       
      let backgroundUrls = (response.response[0].urls)
      let backgroundData={
        background:backgroundUrls,
        unslpashLink: 'https://unsplash.com/?utm_source=your_app_name&utm_medium=referral',
        userLink: userLink,
        user: name,

      }
      console.log(backgroundData)


      

      return (backgroundData)
      
    })
  }






}

export default BackgroundAPI