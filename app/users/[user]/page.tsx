import Head from "next/head";
import { Metadata } from 'next';

import UserInfo from "./UserInfo";
import { IUser } from "@/utils/interfaces";

export const metadata: Metadata = {
  title: 'User',
  description: 'User info',
}


interface UserInfoProps {
  user: IUser
}

const User = ({ user }: UserInfoProps) => {
  return (
    <div>
      <Head><title>User</title></Head>
      <h2>User</h2>
      <UserInfo user={user} />
    </div>
    
  )
}

export default User;