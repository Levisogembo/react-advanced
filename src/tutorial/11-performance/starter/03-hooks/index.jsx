import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import { slowFunction } from './slowFunction';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  //const value = useMemo(()=>slowFunction(),[]) 
  //console.log(value);
  
  //use callback for memoizing the function
  const removePerson = useCallback((id) => {
    const newPerson = people.filter((person)=>person.id !== id)
    setPeople(newPerson)
  },[people])
  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
