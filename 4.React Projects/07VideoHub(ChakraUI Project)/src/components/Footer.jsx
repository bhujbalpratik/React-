import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Input,
  Text,
  Button,
} from "@chakra-ui/react"
import { AiOutlineSend } from "react-icons/ai"
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"} m={"5"}>
          <Heading
            size="md"
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
          >
            Get in Touch
          </Heading>
          <HStack borderBottom={"2px solid white"} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={"none"}
              borderRadius="none"
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
          m={"5"}
        >
          <Heading textAlign={"center"}>LearnHUB</Heading>
          <Text>&copy; All rights received</Text>
        </VStack>

        <VStack w={"full"} m={"5"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <Button variant={"link"} colorScheme={"white"}>
            <a target={"black"} href="https://youtube.com/pratikbhujbal">
              Youtube
            </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a target={"black"} href="https://instagram.com/bhujbal_pb">
              Instagram
            </a>
          </Button>

          <Button variant={"link"} colorScheme={"white"}>
            <a target={"black"} href="https://facebook.com/pratikbhujbal">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  )
}
export default Footer
