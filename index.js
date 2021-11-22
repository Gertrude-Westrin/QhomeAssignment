//Start with configuration
var config = {
    host: "pu2je9nt8k3awgt.eu.qlikcloud.com",
    prefix: "/",
    port: window.location.port,
    isSecure: true
 };

 //export sheet as pdf
var settings = {
  documentSize: "a4",
  aspectRatio: 2,
  orientation: "landscape"
};
var app = qlik.openApp("9bd17d8f-ebaa-4651-99c6-3a2d231b0353");
app.visualization.get("hRZaKk").then(function(vis){
  vis.exportPdf(settings).then(function (result) {
    console.log('https://pu2je9nt8k3awgt.eu.qlikcloud.com/sense/app/9bd17d8f-ebaa-4651-99c6-3a2d231b0353/sheet/1ff88551-9c4d-41e0-b790-37f4c11d3df8/state/analysis ', result);
  });
});

/*
//define qlik?
 requirejs(["js/qlik"], function(qlik) {
    // open the app
   var app = qlik.openApp("1ff88551-9c4d-41e0-b790-37f4c11d3df8", config);
    // insert Qlik objects into the page.
    app.getObject(document.getElementById("LB01"), "hRZaKk");
 });

 //set visualisation options
 var app = qlik.openApp("9bd17d8f-ebaa-4651-99c6-3a2d231b0353");
app.visualization.get("hRZaKk").then(function(vis){
  vis.setOptions({title:"Now improved"});
});
*/

 