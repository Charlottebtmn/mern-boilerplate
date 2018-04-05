import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3030/api',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getCountries() {
    return service
    .get('/countries')
    .then(res => res.data)
    .catch(errHandler);
  },

  postCountries(data) {
    return service
      .post('/countries', data)
      .then(res => res.data)
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler);
  },

  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        console.log("DEBUG res", res)
        const { data } = res;
        localStorage.setItem('user', JSON.stringify(data));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        return data;
      })
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.firstName) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
      return user;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

  getProfile() {
    return service
    .get('users/profile')
    .then(res => res.data)
    .catch(errHandler);
  },

  getCelebrities() {
    return service
    .get('/celebrities')
    .then(res => res.data)
    .catch(errHandler);
  },

  createConversation(celebrity) {
    return service
    .post('/conversations',{celebrity})
    .then(res => res.data)
    .catch(errHandler)
  },

  getConversation(conversation) {
    return service
    .get('/conversations/'+conversation)
    .then(res => {
      if (res.data.history)
        localStorage.setItem('cache_'+conversation, res.data.history);
      return res.data;
    })
    .catch(errHandler);
  },

  getAllConversations() {
    return service
    .get('/conversations')
    .then(res => res.data)
    .catch(errHandler)
  },

  saveHistory (conversation) {
    let history = localStorage.getItem('cache_'+conversation);
    return service
    .post('/conversations/'+conversation+'/history', {history})
    .then(res => res.data)
    .catch(errHandler);
  },

  addTodo (celebrityId, description) {
    return service
    .post('/users/todos', {celebrityId,description})
    .then(res => res.data)
    .catch(errHandler)
  }

};
