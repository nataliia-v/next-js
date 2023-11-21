import { IUser } from "@/utils/interfaces";

interface UserInfoProps {
  user: IUser
}

const UserInfo = ( { user }: UserInfoProps ) => {

  const { name, email, address } = user || {};
  const { city } = address || {};

  if ( !user ) {
    return <div>User does not exist</div>
  }

  return (
    <>
      <h3>{name}</h3>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>City: </strong>
        {city}
      </div>
    </>
    
  )
}

export default UserInfo;