
    importScripts(
      'https://www.gstatic.com/firebasejs/9.6.8/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyDsptHTRH45Y-btAGjfuRjQDssweHyMU3I","authDomain":"mukyfy-951e0.firebaseapp.com","projectId":"mukyfy-951e0","storageBucket":"mukyfy-951e0.appspot.com","messagingSenderId":"548835319766","appId":"1:548835319766:web:00670755cb06a515b00e77","measurementId":"G-HRTG9YRZM6"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    