import axios from 'axios'

const TaskAPI = {


  create: (task) => axios.post('api/tasks', task, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  delete: id => axios.delete(`/api/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  getTasks: _ => axios.get('/api/tasks/id', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  getTask: id => axios.get(`/api/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  update: (id,task) => axios.put(`api/tasks/${id}`, task, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  } )

}

export default TaskAPI