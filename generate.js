export default function handler(req,res){
 const {product}=req.body;
 res.status(200).json({
   output:`Aqui está um anúncio gerado automaticamente para o produto: ${product}`
 });
}