import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, Firestore, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  // Método para obtener todos los documentos de una colección
  getCollection<T>(collectionPath: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionPath);
    return from(getDocs(collectionRef)).pipe(
      take(1),
      map(querySnapshot => 
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as T))
      ),
      catchError(error => {
        console.error('Error al obtener la colección:', error);
        throw error;
      })
    );
  }

  // Método para obtener un documento por su ID
  getDocumentById<T>(collectionPath: string, docId: string): Observable<T> {
    const documentReference: DocumentReference = doc(this.firestore, `${collectionPath}/${docId}`);
    return from(getDoc(documentReference)).pipe(
      take(1),
      map(docSnapshot => {
        if (docSnapshot.exists()) {
          return { id: docSnapshot.id, ...docSnapshot.data() } as T;
        } else {
          throw new Error('Document does not exist');
        }
      }),
      catchError(error => {
        console.error('Error al obtener el documento:', error);
        throw error;
      })
    );
  }

}
