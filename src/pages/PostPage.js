import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Reactions from "../components/Reactions";

const PostPage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex
          w={"full"}
          gap={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"}>
            <Avatar src="/aliumusa.jpeg" name="Aliu Musa" size={"md"} mr={2} />
            <Text fontSize={"sm"}>Aliu Musa</Text>
            <Image src="/verified.png" h={4} w={4} ml={2} />
          </Flex>

          <Flex gap={4} alignItems={"center"}>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textAlign={"right"}
              width={36}
              color={"gray.light"}
            >
              2day
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
      </Flex>

      <Text my={3}>Hello My People !!!</Text>
      <Box
        overflow={"hidden"}
        borderRadius={6}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" w={"full"} />
      </Box>

      <Flex>
        <Reactions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
        <Text>250 Replies</Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text>{55 + (liked ? 1 : 0)} likes</Text>
      </Flex>
    </>
  );
};

export default PostPage;
