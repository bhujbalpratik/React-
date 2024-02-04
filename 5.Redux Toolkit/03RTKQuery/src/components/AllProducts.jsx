import { useGetAllProductQuery } from "../app/service/apiData"

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery()

  if (isError) return <h1>Nope we got an error</h1>

  if (isLoading)
    return (
      <h1 style={({ position: "absolute" }, { top: "50%" }, { left: "50%" })}>
        Loading...
      </h1>
    )

  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h3 key={p.id}>{p.title}</h3>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  )
}
export default AllProducts
