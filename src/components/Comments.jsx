import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comments = ({ comment, createdAt, likes, username, userAvater }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} my={2} py={2} w={"full"}>
        <Avatar src={reply.userProfilePic} size={"sm"} name={username} />
        <Flex flexDir={"column"} gap={1} w={"full"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {reply.username}
            </Text>

          </Flex>
          <Text>{reply}</Text>
         
        </Flex>
      </Flex>
    </>
  );
};

export default Comments;
