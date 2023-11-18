import { useState } from 'react';
import data from './data'
import List from './components/List';

const App = () => {
  const [person, setPerson] = useState(data)
  console.log(person)
  return (
    <main>
      <section className='container'>
        <h3>{person.length} Birthdays Today</h3>
        <List person={person} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPerson([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
