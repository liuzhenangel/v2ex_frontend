import marked from 'marked'

let API_ROOT = 'https://www.v2ex.com/api/'

export const setBlogs = function ({ dispatch }, page, size = 5) {
  dispatch('SET_ISFETCH', 0)
  this.$http.get(API_ROOT + 'topics/hot.json', {
  }).then(function (res) {
    dispatch('SET_BLOGS', res)
    dispatch('SET_ISFETCH', 1)
  }).then(function (err) {
    console.log(err)
  })
}
