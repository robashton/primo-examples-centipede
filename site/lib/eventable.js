define(function(require) {
  var EventContainer = require('eventcontainer');
  
  var Eventable = function() {
    this.eventListeners = {};
    this.eventDepth = 0;
    this.proxies = []
  };
  
  Eventable.prototype = {
    autoHook: function(container) {
      for(var key in container) { 
        if(key.indexOf('on') === 0) {
          this.on(key.substr(2), container[key], container);
        }   
      }
    },
    autoUnhook: function(container) {
      for(var key in container) { 
        if(key.indexOf('on') === 0) {
          this.off(key.substr(2), container[key], container);
        }   
      }
    },
    once: function(eventName, callback, context) {
      var self = this;
      var wrappedCallback = function(data, sender) {
        callback.call(this, data, sender);
        self.off(eventName, wrappedCallback, context);
      };
      this.on(eventName, wrappedCallback, context);
    },
    
    on: function(eventName, callback, context) {
      this.eventContainerFor(eventName).add(callback, context);
    },
    
    off: function(eventName, callback, context) {
      this.eventContainerFor(eventName).remove(callback, context);
    },
    raise: function(eventName, data, sender) {
      var container = this.eventListeners[eventName];

      if(container)
        container.raise(sender || this, data);

      var proxies = this.proxies
      for(var i = 0 ; i < proxies.length ; i++)
        proxies[i].raise(eventName, data, sender || this)
    },
    addProxy: function(proxy) {
      this.proxies.push(proxy)
    },
    removeProxy: function(proxy) {
      this.proxies = _.without(this.proxies, proxy)
    },
    eventContainerFor: function(eventName) {
      var container = this.eventListeners[eventName];
      if(!container) {
        container =  new EventContainer(this);
        this.eventListeners[eventName] = container;
      }
      return container;
    }
  };
  
  return Eventable;

});
