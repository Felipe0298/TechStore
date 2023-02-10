import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) =>{
    return new Promise((resolve, reject) =>{
      const collectionRef = categoryId
    ?query(collection(db,"products"), where("category","==", categoryId))
    :collection(db,"products")
  
    getDocs(collectionRef).then(response=>{
      const productAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
      })
  
      resolve(productAdapted)
    }).catch(error =>{
      reject(error);
    })
    })
  }   