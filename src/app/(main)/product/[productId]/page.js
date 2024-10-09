import ProductDetails from "@/components/ProductDetails/ProductDetails";

export async function generateMetadata({params}) {
    const {productId} = params;
}


const page = ({params}) => {
  const {productId} = params;
  return <ProductDetails productId={productId}/>
}

export default page