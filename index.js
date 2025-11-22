import {useState} from 'react';
export default function Home(){
 const [product,setProduct]=useState('');
 const [result,setResult]=useState('');
 async function generate(){
  const res=await fetch('/api/generate',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({product})
  });
  const data=await res.json();
  setResult(data.output);
 }
 return (
 <div style={{padding:20,fontFamily:'sans-serif'}}>
   <h1>IA vendas online</h1>
   <p>Digite o produto que deseja anunciar:</p>
   <input 
     style={{padding:8,border:'1px solid #ccc',width:'100%',maxWidth:300}}
     placeholder="Ex: tênis esportivo"
     value={product}
     onChange={e=>setProduct(e.target.value)}
   />
   <br/><br/>
   <button 
     onClick={generate}
     style={{padding:'10px 20px',background:'#4f46e5',color:'#fff',border:'none',cursor:'pointer'}}
   >
     Gerar anúncio
   </button>
   <pre style={{marginTop:20,whiteSpace:'pre-wrap'}}>{result}</pre>
 </div>
 );
}