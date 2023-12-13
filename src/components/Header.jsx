import { useSetRecoilState } from 'recoil';
import { Flex, Image, useColorMode, Link, Button } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import {RxAvatar} from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from '../atoms/authAtom';
// import RxAvatar from "./RxAvatar";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const user = useRecoilValue(userAtom);
	const logout = useLogout()
	const setAuthScreen = useSetRecoilState(authScreenAtom);

	return (
		<Flex justifyContent={"space-between"}  mt={6} mb="12">
			{user && (
					<Link as={RouterLink} to="/">
					<AiFillHome fontSize={24} />
					</Link>
			)}

			{!user && (
					<Link as={RouterLink} to={'/auth'} onClick={() => setAuthScreen("login")} >
					Login
					</Link>
			)}
			{/* {!user && (
				<Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("login")}>
					Login
				</Link>
			)} */}
			<Image
				cursor="pointer"
				alt="logo"
				w={6}
				src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
				onClick={toggleColorMode}
			/>

         {user && (
			<Flex alignItems={"center"} gap={4}>
				<Link as={RouterLink} to={`/${user.username}`}>
				<RxAvatar fontSize={24} />
				</Link>

				<Button size={"xs"} onClick={logout} >
					<FiLogOut size={20} />
				</Button>
			</Flex>
         )}

		{!user && (
					<Link as={RouterLink} to={'/auth'} onClick={() => setAuthScreen("signup")} >
					Sign In
					</Link>
		)}

		</Flex>
	);
};

export default Header;
