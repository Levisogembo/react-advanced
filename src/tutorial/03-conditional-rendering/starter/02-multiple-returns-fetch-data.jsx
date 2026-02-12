import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading,setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data);
      setUser(data)
      setTimeout(() => {
        setLoading(!isLoading)
      },1000);
    }
    fetchUser()
  }, [])
  if(isLoading) return <h2>Loading...</h2>
  const {id, avatar_url,login} = user
  return (
    <section>
      <div key={id}>
        <img src={avatar_url}></img>
        <p>{login}</p>
      </div>
    </section>
  )
};
export default MultipleReturnsFetchData;
