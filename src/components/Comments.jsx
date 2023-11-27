import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Reactions from "./Reactions";

const Comments = ({ comment, createdAt, likes, username, userAvater }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} my={2} py={2} w={"full"}>
        <Avatar src={userAvater} size={"sm"} name={username} />
        <Flex flexDir={"column"} gap={1} w={"full"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Reactions liked={liked} setLiked={setLiked} />
          <Text>{likes + (liked ? 1 : 0)} likes</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comments;

// import { ReactIcon } from "@chakra-ui/icons";
// import { Avatar, Flex, Text } from "@chakra-ui/react";
// import React from "react";
// import { BsThreeDots } from "react-icons/bs";
// import Reactions from "./Reactions";

// const Comments = ({ comment, createdAt, liked, username, userAvatar }) => {
//   return (
//     <React.Fragment>
//       <Flex gap={4} my={2} py={2} w={"full"}>
//         <Avatar
//           src="https://bit.ly/ryan-florence"
//           size={"sm"}
//           name="Ryan Florence"
//         />
//         <Flex
//           flexDirection={"column"}
//           gap={1}
//           w={"full"}
//           border={"2px solid white"}
//         >
//           <Flex
//             justifyContent={"space-between"}
//             alignItems={"center"}
//             w={"full"}
//           >
//             <Text fontWeight={"bold"} fontSize={"sm"}>
//               JohnDoe
//             </Text>

//             <Flex gap={2} alignItems={"center"}>
//               <Text fontSize={"sm"} color={"gray.light"}>
//                 2 min ago
//               </Text>
//               <BsThreeDots />
//             </Flex>
//           </Flex>

//           <Text>{comment}</Text>

//           <Reactions liked={liked} setLiked={setLiked}/>

//           <Text>{12 + (liked ? 1 : 0)} likes</Text>
//         </Flex>
//       </Flex>
//     </React.Fragment>
//   );
// };

// export default Comments;
