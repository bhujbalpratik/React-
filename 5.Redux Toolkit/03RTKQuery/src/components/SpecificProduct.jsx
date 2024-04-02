import { useGetProductByIdQuery } from "../app/service/apiData"

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2)
  console.log(data)
  if (isError) return <h1>Error while using API</h1>

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <img src={data?.images[1]} alt="" />
      <h1>Brand : {data?.brand}</h1>
      <h1>Category : {data?.category}</h1>
      <h1>Description :{data?.description}</h1>
      <h1>Price : {data?.price}$</h1>
    </div>
  )
}
export default SpecificProduct
