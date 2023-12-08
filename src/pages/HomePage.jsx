import { Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };

    getFeedPosts();
  }, [showToast]);

  return (
    <>
    {!loading && posts.length === 0 && (
      <Text>Please Follow A User To See Feed Posts</Text>
    )}

      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"}/>
        </Flex>
      )}

      {posts.map((post) => (
      <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  );
};

export default HomePage;
