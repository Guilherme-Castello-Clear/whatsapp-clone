import { GoogleAuthProvider } from "firebase/auth";


export class Firebase{

    constructor(){
        
        
            this.init();


    }

    init(){
      
        const firebaseConfig = {
            apiKey: "AIzaSyA7soIwRZ4IIb8BhYcCciPrz2dO6l6_ZNM",
            authDomain: "whatsapp-clone-clear.firebaseapp.com",
            projectId: "whatsapp-clone-clear",
            storageBucket: "whatsapp-clone-clear.appspot.com",
            messagingSenderId: "1069209169664",
            appId: "1:1069209169664:web:b13af8672d5e9dab484de5",
            measurementId: "G-8ZQZCNJ37W"
        };

        if(!window._initializedFirebase){

            firebase.initializeApp(firebaseConfig);
            firebase.firestore().settings({
                timestampsInSnapshots: true
            })
            if(firebase){
                console.log("Firebase Status: Running");
            }
            window._initializedFirebase = true;

        }
            
    }

    static db(){
        return firebase.firestore();
    }

    static hd(){
        return firebase.storage();
    }

    initAuth(){
        return new Promise((s, f) => {

            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result=>{
                let token = result.credential.accessToken;
                let user = result.user;
                s({
                    user,
                    token
                });
            }).catch(err=>{
                f(err);
            });
        });
    }
}