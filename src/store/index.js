import Vue from 'vue'
import VueResource from 'vue-resource'

let API_ROOT = 'https://www.v2ex.com/api/'

Vue.use(VueResource)

export const initDate = function () {
  this.$http.get(API_ROOT + 'topics/hot.json').then((response) => {
    return response
  }, (response) => {
    console.log(response)
  })
}
