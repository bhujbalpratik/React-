import { HStack, Container, VStack, Button, Textarea } from "@chakra-ui/react"
import { AiFillQuestionCircle, AiOutlineSend } from "react-icons/ai"
const Doubt = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiFillQuestionCircle size={"10vmax"} />

        <form>
          <HStack>
            <Textarea placeholder="Ask your Doubt Here ...."></Textarea>
            <Button colorScheme={"purple"} type={"submit"} variant={"ghost"}>
              <AiOutlineSend size={"5vmax"} />
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  )
}
export default Doubt
