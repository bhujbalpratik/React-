import { Link } from "react-router-dom"
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react"

import { BiMenuAltLeft } from "react-icons/bi"

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        h={"10"}
        w={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"25"} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>LearnHUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/tutorials"}>Tutorials</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/notes"}>Notes</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/doubt"}>Doubt Session</Link>
              </Button>
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              justifyContent={"center"}
              w={"full"}
            >
              <Button
                onClick={onClose}
                colorScheme="purple"
                borderRadius={"20Px 5px 5px 20px"}
              >
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"outline"}
                borderRadius={"5Px 20px 20px 5px"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Header
