import {
  Stack,
  VStack,
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"
import { BiDownload } from "react-icons/bi"

const CardComponent = ({ lecNum, imgSrc }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imgSrc}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">Lecture {lecNum} Notes</Heading>

          <Text py="2">In lecture {lecNum} beverage of Italian.</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="purple">
            Download &nbsp;
            <BiDownload />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

const Notes = () => {
  const items = {
    1: "https://images.pexels.com/photos/1181537/pexels-photo-1181537.jpeg?auto=compress&cs=tinysrgb&w=600",
    2: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600",
    3: "https://images.pexels.com/photos/1181537/pexels-photo-1181537.jpeg?auto=compress&cs=tinysrgb&w=600",
    4: "https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=600",
    5: "https://images.pexels.com/photos/5999812/pexels-photo-5999812.jpeg?auto=compress&cs=tinysrgb&w=600",
    6: "https://images.pexels.com/photos/5905716/pexels-photo-5905716.jpeg?auto=compress&cs=tinysrgb&w=600",
    7: "https://images.pexels.com/photos/5905476/pexels-photo-5905476.jpeg?auto=compress&cs=tinysrgb&w=600",
    8: "https://images.pexels.com/photos/6238000/pexels-photo-6238000.jpeg?auto=compress&cs=tinysrgb&w=600",
    9: "https://images.pexels.com/photos/5310562/pexels-photo-5310562.jpeg?auto=compress&cs=tinysrgb&w=600",
    10: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
  return (
    <>
      <Heading mt={"8"} textAlign={"center"} color={"purple"}>
        Download Notes Here
      </Heading>
      <Stack
        direction={["column", "row"]}
        h={"100vh"}
        p={"8"}
        overflowY={"auto"}
      >
        <VStack w={"full"}>
          {Object.keys(items).map((key) => (
            <CardComponent lecNum={key} imgSrc={items[key]} />
          ))}
        </VStack>
        <VStack w={"full"}>
          {Object.keys(items).map((key) => (
            <CardComponent lecNum={Number(key) + 10} imgSrc={items[key]} />
          ))}
        </VStack>
      </Stack>
    </>
  )
}
export default Notes
