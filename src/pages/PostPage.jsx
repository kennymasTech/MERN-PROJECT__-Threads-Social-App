
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Reactions from "../components/Reactions";
import Comments from "../components/Comments";

const PostPage = () => {
  // const [liked, setLiked] = useState(false);
  return (
    <>
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
        <Flex alignItems={"center"} gap={4}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign={"right"}
            w={36}
            color={"gray.light"}
          >
            2day
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Hello My People !!!</Text>

      <Box
        overflow={"hidden"}
        borderRadius={6}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" width={"full"} />
      </Box>
      <Flex>
        <Reactions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
        <Text>20 replies</Text>
        <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
        <Text>{21 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={2}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />

      {/* <Comments comment={"This is Great"} createdAt={"2 min ago"} userAvater={"https://bit.ly/ryan-florence"} likes={67} username={"Kennymas"}/> */}
      
    </>
  );
};

export default PostPage;


// import {
//   Avatar,
//   Box,
//   Button,
//   Divider,
//   Flex,
//   Image,
//   Text,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import Reactions from "../components/Reactions";
// import Comments from "../components/Comments";

// const PostPage = () => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <>
//       <Flex>
//         <Flex
//           w={"full"}
//           gap={3}
//           alignItems={"center"}
//           justifyContent={"space-between"}
//         >
//           <Flex alignItems={"center"}>
//             <Avatar src="/aliumusa.jpeg" name="Aliu Musa" size={"md"} mr={2} />
//             <Text fontSize={"sm"}>Aliu Musa</Text>
//             <Image src="/verified.png" h={4} w={4} ml={2} />
//           </Flex>

//           <Flex gap={4} alignItems={"center"}>
//             <Text
//               fontSize={{ base: "xs", md: "sm" }}
//               textAlign={"right"}
//               width={36}
//               color={"gray.light"}
//             >
//               2day
//             </Text>
//             <BsThreeDots />
//           </Flex>
//         </Flex>
//       </Flex>

//       <Text my={3}>Hello My People !!!</Text>
//       <Box
//         overflow={"hidden"}
//         borderRadius={6}
//         border={"1px solid"}
//         borderColor={"gray.light"}
//       >
//         <Image src="/post1.png" w={"full"} />
//       </Box>

//       <Flex>
//         <Reactions liked={liked} setLiked={setLiked} />
//       </Flex>

//       <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
//         <Text>250 Replies</Text>
//         <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
//         <Text>{55 + (liked ? 1 : 0)} likes</Text>
//       </Flex>

//       <Divider my={4} />

//       <Flex justifyContent={"space-between"}>
//         <Flex alignItems={"center"} gap={2}>
//           <Text fontSize={"2x1"}> 👋 </Text>
//           <Text color={"gray.light"}>
//             Get the app to like, reply and post{" "}
//           </Text>
//         </Flex>  
//         <Button> Get </Button>
//       </Flex>

//       <Divider my={4} />

//       <Comments/>
//     </>
//   );
// };

// export default PostPage;
