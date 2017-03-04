
export default {
  routes : {
  all: 'all',
  active: 'active',
  completed: 'completed'
  },
  onHashChange: function () {
    var route = window.location.hash.replace(/#\/?/, '');
    if (this.routes[route]) {
      app.currentRoute = route;
    } else {
      window.location.hash = '';
      app.currentRoute = 'all';
    }
    return(route);
  },
  addRouter : function(){
    window.addEventListener('hashchange', this.onHashChange);
  }
};
