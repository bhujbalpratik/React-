import { Box, Heading, Image, Container, Stack, Text } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: ["70%", "90%"],
  transform: "translate(-50%, -50%)",
  p: "4",
  size: "3xl",
}

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={["50vh", "100vh"]}>
        <Image src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Enjoy Learning
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Best Faculty
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image src={img2} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Online Doubt Session
        </Heading>
      </Box>
      <Box w="full" h={["50vh", "100vh"]}>
        <Image src={img4} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Best Quality Notes
        </Heading>
      </Box>
    </Carousel>
  )
}
const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
          <Heading
            textTransform={"uppercase"}
            py={"2"}
            borderBottom={"2px solid"}
            w={"fit-content"}
            m={"auto"}
            mt={["0", "28"]}
          >
            Quality Education
          </Heading>
          <Stack
            h={"full"}
            py={"4"}
            alignItems={"center"}
            direction={["column", "row"]}
          >
            <Image
              src={img5}
              h={["40", "400"]}
              filter={"hue-rotate(-130deg)"}
            />
            <Text
              letterSpacing={"widest"}
              lineHeight={"190%"}
              p={[4, 16]}
              textAlign={"center"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quasi aliquam, suscipit ad saepe culpa numquam modi odio dolor
              exercitationem labore illo ipsum at ullam enim quo reprehenderit
              eligendi in iste facilis tempora veniam adipisci dolorum officiis!
              Eos quae, esse necessitatibus assumenda saepe quaerat nemo
              accusantium maiores at? Hic, aspernatur aliquid labore quidem
              omnis natus modi incidunt voluptatem beatae nostrum ut! Quidem
              dicta nemo corrupti odit culpa. Voluptates reprehenderit tenetur
              est dolore blanditiis
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Home
