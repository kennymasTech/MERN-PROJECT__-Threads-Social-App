
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Hearder from "./components/Hearder";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Container maxW="620px">
      <Hearder />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
};

export default App;
