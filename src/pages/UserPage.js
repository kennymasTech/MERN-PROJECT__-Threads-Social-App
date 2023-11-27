import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
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
