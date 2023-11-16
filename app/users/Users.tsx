"use client";
import Head from 'next/head';

import { useState, useEffect } from 'react'

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

const Users = () => {
  const [ users, setUsers ] = useState<IUser[] | null>( null );

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers( data );
    };
    fetchData();
  }, []);

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