
import Main from "@/components/main/Main";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  //console.log(data)
  return <Main data ={data} />
}
