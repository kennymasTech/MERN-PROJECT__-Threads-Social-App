import { AddIcon } from '@chakra-ui/icons'
import { Button, 
          Modal,
          ModalOverlay,
          ModalContent,
          ModalHeader,
          ModalFooter,
          ModalBody,
          ModalCloseButton, 
          useDisclosure,
          FormControl,
          Textarea,
          Text} from '@chakra-ui/react'
import React from 'react'

const handleTextChange = () => {

}

const postText = () => {
  
}

const CreatePosts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button
    position={"fixed"}
    bottom={10}
    right={10}
    leftIcon={<AddIcon/>}
    bg={"gray"}
    onClick={onOpen}
    >
        Post
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
              <FormControl>
                <Textarea placeholder='post content goes here'
                          onChange={handleTextChange}
                          value={postText}
                />
                <Text fontSize={"xs"} fontWeight={"bold"} textAlign={"right"} m={"1"} color={"gray.800"}>
                  500/500
                </Text>
              </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePosts