import { useState } from 'react';
import data from './data'
import List from '../List';

const App = () => {
  const [person, setPerson] = useState(data)
  console.log(person)
  return (
    <>
      <main>
        <section className='container'>
          <h1>{person.length} birthday today</h1>
          <List person={person} />
          <button className='btn' onClick={() => setPerson([])}>Clear All</button>
        </section>
      </main>
    </>
  );
};
export default App;
