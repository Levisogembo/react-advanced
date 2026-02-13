import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url)
        if(!res.ok){
          setError(true)
          setLoading(false)
          return
        }
        const data = await res.json()
        //console.log(res);
        setUser(data)
        setTimeout(() => {
          setLoading(!isLoading)
        }, 1000);
      } catch (error) {
        setError(true)
      }
    }
    fetchUser()
  }, [])
  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>There was an error</h2>
  const { id, avatar_url, login, company } = user
  return (
    <section>
      <div key={id}>
        <img style={{width:'150px', borderRadius: '25px' }} alt={login} src={avatar_url}></img>
        <p>{login}</p>
        <h2>works at: {company}</h2>
      </div>
    </section>
  )
};
export default MultipleReturnsFetchData;
