if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log('App is loader');
      navigator.serviceWorker.register('./sw.js')
          .then( () => {
              console.log("Service Worker registerd");
          })
    })
  }