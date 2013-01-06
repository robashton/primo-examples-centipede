require.config({
    baseUrl: './',
    paths: {
      underscore: 'lib/underscore-min',
      eventable: 'lib/eventable',
      eventcontainer: 'lib/eventcontainer',
      jquery: 'lib/jquery'
    }
});
require(['tests/collisionperformance'], function() { })

