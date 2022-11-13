import React from 'react';
import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import { Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: 'xl',
    FontFace: 'Helvetica',
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16" >
                <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom = {'2px solid green'} m = 'auto'>
                    Services
                </Heading>
                <Stack h='full' p={'4'} alignItems={'center'} direction={['column', 'row']}>
                    <Image src={img5} h = {['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo velit labore eos eveniet facere quidem veniam, et necessitatibus rerum consequuntur dolor, commodi nemo molestias optio voluptates quas, in iste voluptate amet? Obcaecati aliquam rem porro aspernatur eligendi, esse enim tempore?
                    </Text>
                </Stack>
            </Container>
        </Box>
  );
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color = {'white'} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'blackAlpha.600'} color = {'white'}{...headingOptions}>Gaming is Future</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.600'} color = {'white'}{...headingOptions}>Gaming On console</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'blackAlpha.600'} color = {'white'}{...headingOptions}>Night Life is cool</Heading>
        </Box>
    </Carousel>
);
export default Home;