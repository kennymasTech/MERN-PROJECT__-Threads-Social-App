import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Reactions from "./Reactions";

const UserPosts = () => {
    const 

  return (
    <Link to={"/aliumusa/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex alignItems={'center'} flexDir={"column"}>
          <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2} ></Box>
          <Box pos={"relative"} w={"full"}>
            <Avatar
              src="/post1.png"
              name="Messi"
              size={"xs"}
              pos={"absolute"}
              top={"0"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Ronaldo"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Hazard"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDir={"column"} gap={2}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} w={"full"}>
              <Text>AliuMusa</Text>
              <Image src="/verified.png" ml={1} w={4} h={4} />
            </Flex>

            <Flex alignItems={"center"} gap={"4"}>
              <Text>1day</Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text fontSize={'sm'}>Hello Thread!!!</Text>
          <Box overflow={'hidden'} borderRadius={6} border={'1px solid'} borderColor={'gray.light'}>
            <Image src="/post3.png" w={'full'} />
          </Box>

          <Flex>
            <Reactions liked={liked} setLiked={setLiked}/>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;
