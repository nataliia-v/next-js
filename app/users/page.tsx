import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Product users',
}

const Users = () => {
  return (
    <div>
      <Head><title>Users</title></Head>
      <h2>
         USERS LIST
      </h2>
    </div>
  )
}

export default Users;