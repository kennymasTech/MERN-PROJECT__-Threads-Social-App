
import { Avatar, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserPosts = () => {
  return <Link to={"/aliumusa/post/1"}>
    <Flex gap={3} mb={4} py={5}>
        <Flex>
            <Avatar src="/post1.png" name="Mark Zuckerberg"/>
        </Flex>
    </Flex>
  </Link>;
};

export default UserPosts;
