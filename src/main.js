/*jshint esversion:6*/     //tells linter to be quiet about node syntax
require('../index.html');
//require('../index.css');

import Vue from 'vue';
import Router from './purejs/router';

console.log(Router);
window.myRouter = Router;
import hello from './components/hello.vue';

window.myVue = new Vue({
  el: '#app',
  //render: h => h(hello)
  render: function(callback){
    return callback(hello);
  }
});
