import axios from 'axios'

export default {
  fatchData ({commit}) { // 获取数据
    axios.get('/search').then((res) => {
      if (res.status === 200) {
        commit('FATCH_DATA', res.data)
      }
    })
  }
}