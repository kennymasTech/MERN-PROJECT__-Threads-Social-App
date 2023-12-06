import { useEffect, useState } from 'react';
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
// import { useParams } from 'react-router-dom';

const UserPage = () => {
  const [ user, setUser ] = useState(null);
  // const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`api/users/profile/${username}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [username])

  return (
    <>
      <UserHeader />
      <UserPosts
        likes={200}
        replies={70}
        postImg={"/post1.png"}
        postTitle={"Hello Kennymas"}
      />
      <UserPosts
        likes={100}
        replies={120}
        postImg={"/post2.png"}
        postTitle={"This is Great"}
      />
      <UserPosts
        likes={50}
        replies={250}
        postImg={"/post3.png"}
        postTitle={"Wow! Awesome"}
      />
    </>
  );
};

export default UserPage;
