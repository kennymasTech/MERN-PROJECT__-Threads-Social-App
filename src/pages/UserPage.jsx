import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [ loading, setLoading ] = useState(true);
  const [ posts, setPosts ] = useState([]);
  const [ fetchingPosts, setFetchingPosts ] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/profile/${username}`);
        const data = await response.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };

    const getPosts = async () => {
      try {
        const response = await fetch(`/api/posts/user/${username}`);
        const data = await response.json();
        console.log(data);
        setPosts(data)

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    
    }


    getUser();
  }, [username, showToast]);
  if (!user && loading) {
    return (
      <Flex justifyContent={"center"} >
        <Spinner size={"xl"} />
      </Flex>
    )
  }

  return (
    <>
      {/* <UserHeader user={user} />
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
      /> */}
    </>
  );
};

export default UserPage;
