
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
   return (
      <>
         <UserHeader/>
         <UserPosts userAvatar={'https://bit.ly/tioluwani-kolawole'} userName={'Kolisco'} postImg={'/post1.png'} postTitle={'Hello Kennymas'}/>
         <UserPosts/>
         <UserPosts/>
      </>
   );
};

export default UserPage;