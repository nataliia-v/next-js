import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Product users',
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


const Users = async () => {

  const users: IUser[] = await getUsers();
  return (
    <div>
      <Head><title>Users</title></Head>
      <h2>
         USERS LIST
      </h2>

      <ul>
        {
          users && users.map(({id, name, email}) => (
            <li key={id}>
              <strong>{name} {email}</strong>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users;