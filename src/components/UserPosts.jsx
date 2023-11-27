import { Avatar } from "@chakra-ui/avatar";
import { Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const UserPosts = () => {
  return <Link to={"/aliumusa/post/1"}>
    <Flex>
        <Flex>
            <Avatar/>
        </Flex>
    </Flex>
  </Link>;
};

export default UserPosts;
