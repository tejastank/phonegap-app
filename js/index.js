/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.vibrate(301);
         /*   function onSuccess() {
            console.log("Camera cleanup success.")
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
            */
                /*
                       // onSuccess Callback
                    //   This method accepts a `Position` object, which contains
                    //   the current GPS coordinates
                    //
                    function onSuccess(position) {
                        console.log('Latitude: '  + position.coords.latitude      + '<br />' +
                                            'Longitude: ' + position.coords.longitude     + '<br />' +
                                            '<hr />'      + element.innerHTML);
                    }

                    // onError Callback receives a PositionError object
                    //
                    function onError(error) {
                        console.log('code: '    + error.code    + '\n' +
                              'message: ' + error.message + '\n');
                    }
                    // Options: throw an error if no update is received every 30 seconds.
                    //
                    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 1000 });
                */

                function alertDismissed(trg) {
                    // do something
                   console.log(trg);
                navigator.notification.beep(2);
                }
                                
               /* navigator.notification.alert(
                    'You are the winner!',  // message
                    alertDismissed,         // callback
                    'Game Over',            // title
                    ['Done','Confirm']                  // buttonName
                ); */

                StatusBar.overlaysWebView(true);
                StatusBar.styleLightContent();
        console.log( device.platform, device.manufacturer,  device.version, device.model);


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        receivedElement.innerHTML = "Welcome,<br/>"+device.platform+ device.manufacturer+  device.version+ device.model;
        console.log('Received Event: ' + id);
    },
    
};
