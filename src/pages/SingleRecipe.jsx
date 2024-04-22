import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { db } from "../firebase/firebaseConfig";


// loader
export const loader =async({params})=>{
const docRef = doc(db, "ricipies",params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  console.log("No such document!");
}
return null
}

function SingleRecipe() {
  const data =useLoaderData()
  console.log(data);
  return(
    <>
    {data && (
      <div className="mb-20 text-center">
        <h1  className="text-3xl font-bold  text-green-400 mb-10">{data.title}</h1>
        <img className="w-full h-80 object-cover rounded-xl mb-5 bg-white object-center" src={data.image} alt="" />
        <h2 className="mb-3"><span className="text-2xl text-green-400">ingredients :</span> {data.ingredients} ;</h2>
        <p className="mb-3"><span className="text-2xl text-green-400">CookingTime : </span>{data.cookingTime} - minute</p>
        <span className="text-2xl text-green-400 mb-3">Method :</span>
        <p>{data.method}</p>
      </div>
    )}
   </>
  ) 
}

export default SingleRecipe