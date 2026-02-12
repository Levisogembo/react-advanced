import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url)
        const jsonData = await data.json()
        setUsers(jsonData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  const logId = (node_id) => {
    console.log(node_id);
  }
  return (
    <section>
      <h3>Github users</h3>
      <ul className='users'>{users.map((user) => {
        //console.log(user);
        const { id, login, avatar_url, node_id, html_url } = user
        return <li key={id}>
          <img src={avatar_url} ></img>
          <p>{login}</p>
          <div><a href={html_url}>Profile</a></div>
          <div><button type="button" className="btn" onClick={() => logId(node_id)}>Click Me</button></div>
        </li>
      })}</ul>
    </section>
  );
};
export default FetchData;
