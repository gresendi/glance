import axios from 'axios'

const LinkAPI = {


  create: (link) => axios.post('api/links', link,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  delete: id => axios.delete(`/api/links/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  getLinks: _ => axios.get('/api/links/id', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),

}

export default LinkAPI