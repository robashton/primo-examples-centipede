require.config({
    paths: {
      underscore: 'lib/underscore-min',
      eventable: 'lib/eventable',
      eventcontainer: 'lib/eventcontainer',
      jquery: 'lib/jquery'
    }
});
require(['game/main'], function() { })

