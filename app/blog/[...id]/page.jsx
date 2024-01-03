'use client'
import { useParams } from 'next/navigation'
const documentPage = () => {
    const {id}=useParams()
    // console.log(id)
    return (
        <div>
           <h1> this is document page</h1>
           {
            id.map((item,i)=>(
                <li key={i}>{item}</li>
            ))
           }
        </div>
    );
};

export default documentPage;


