require.config({
    paths: {
      underscore: 'lib/underscore-min',
      eventable: 'lib/eventable',
      eventcontainer: 'lib/eventcontainer',
      jquery: 'lib/jquery',
      'bootstrap': 'lib/bootstrap/js/bootstrap'
    }
});
require(['editor/main'], function() { })
