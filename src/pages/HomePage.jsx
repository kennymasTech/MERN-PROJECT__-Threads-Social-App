import { Button, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';
import { set } from 'mongoose';

const HomePage = () => {
  const showToast = useShowToast()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true)

      try {
        const response = await fetch("/api/posts/feed");

      } catch (error) {
        console.log(error);
        showToast("Error", error, "error")
        
      } finally {
        setLoading(false)
      }
    
    }

    getFeedPosts()
  }, [showToast])




  return (
    <div>
        <Link to={"/kennymas"}>
            <Flex w={"full"} justifyContent={"center"}>
                <Button mx={"auto"}>Visit Profile Page</Button>
            </Flex>
        </Link>
    </div>
  )
};

export default HomePage;