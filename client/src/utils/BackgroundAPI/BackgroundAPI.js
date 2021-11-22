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
      return response
      
    })
  }






}

export default BackgroundAPI