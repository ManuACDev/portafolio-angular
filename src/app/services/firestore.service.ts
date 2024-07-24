import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  // Método para obtener todos los documentos de una colección
  getCollection(path: string): Observable<any[]> {
    // Crea una referencia a la colección
    const collectionRef: CollectionReference = collection(this.firestore, path);
    
    // Obtiene los documentos de la colección
    return from(getDocs(collectionRef)).pipe(
      map(querySnapshot => 
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      )
    );
  }

  // Método para obtener un documento por su ID
  getDocumentById(path: string, id: string): Observable<any> {
    const docRef = doc(this.firestore, `${path}/${id}`);
    return from(getDoc(docRef)).pipe(
      map(docSnap => {
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() };
        } else {
          throw new Error('No such document!');
        }
      })
    );
  }

}
