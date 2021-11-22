const config = {
    host: 'pu2je9nt8k3awgt.eu.qlikcloud.com', //for example, 'abc.us.example.com' this is my tenant account
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: 'uAkLBIs5cLtf-23Ui5cs6VjnKMRxEFin'
  };

  require.config({
    baseUrl:`https://${config.host}/resources`,
    webIntegrationId: config.webIntegrationId
  });

  require(['js/qlik'], (qlik) => {
    const app = qlik.openApp('9bd17d8f-ebaa-4651-99c6-3a2d231b0353', config);
    app.visualization.get('hRZaKk').then(vis => vis.show('QV01'));
    qlik.on('error', (error) => console.error(error));  
});

