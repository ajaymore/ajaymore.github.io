var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackButtonPress, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        angular.bootstrap(document, ['myApp']);
    },
    onBackButtonPress: function() {
        alert('back button press.');
    }
};
angular.module('fsCordova', [])
        .service('CordovaService', ['$document', '$q',
            function($document, $q) {

                var d = $q.defer(),
                        resolved = false;

                var self = this;
                this.ready = d.promise;

                document.addEventListener('deviceready', function() {
                    resolved = true;
                    d.resolve(window.cordova);
                });

                // Check to make sure we didn't miss the 
                // event (just in case)
                setTimeout(function() {
                    if (!resolved) {
                        if (window.cordova)
                            d.resolve(window.cordova);
                    }
                }, 3000);
            }]);