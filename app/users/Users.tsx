import Head from 'next/head';

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

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      return {
        props: { users: data }
      }
};

export interface UsersProps {
  users: IUser[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
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