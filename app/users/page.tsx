import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { IUser } from '@/utils/interfaces';


export const metadata: Metadata = {
  title: 'Users',
  description: 'Product users',
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
              <Link key={id} href={`users/${id}`}>{ name }</Link> 
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users;