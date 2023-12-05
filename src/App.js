
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Hearder from "./components/Hearder";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";

const App = () => {
  const user = useRecoilValue(userAtom)
  console.log(user);

  return (
    <Container maxW="620px">
      <Hearder />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
};

export default App;
