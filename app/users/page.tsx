import { Metadata } from 'next';

import Users from './Users';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Product users',
}

const UsersPage = () => {

  return (
    <>
    <Users/>
    </>
  )
}

export default UsersPage;