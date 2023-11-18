import Person from "./Person"


const List = ({ person }) => {
  return (
    <section>
      {
        person.map(item => {
          return <Person key={item.id} {...item} />
        })
      }
    </section>
  )
}

export default List