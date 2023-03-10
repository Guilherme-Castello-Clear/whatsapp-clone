import { Firebase } from './Firebase'

export class Upload{

    static send(file, from){
        return new Promise((s, f) => {
            console.log(file);
            let uploadTask = Firebase
            .hd()
            .ref(from)
            .child(Date.now() + '_' + file.name)
            .put(file);
            uploadTask.on('state_changed', snapshot => {
 
                console.info('upload', snapshot);
 
            }, err => {
                f(err);
            }, () => {
 
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                s(downloadURL);
            
            });
        });
     });
    }

}