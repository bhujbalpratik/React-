import axios from "axios"
import { useState, useEffect } from "react"

function Component() {
  const [items, setitems] = useState([])

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken")
      .then((res) => {
        // console.log(res.data);
        setitems(res.data.meals)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )
  })

  return <div className="items-container">{itemslist}</div>
}

export default Component
