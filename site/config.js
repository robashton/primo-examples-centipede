require.config({
    paths: {
      underscore: 'lib/underscore-min',
      eventable: 'lib/eventable',
      eventcontainer: 'lib/eventcontainer'
    }
});
require(['game/main'], function() { })

