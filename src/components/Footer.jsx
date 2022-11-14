import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Input,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'#6925c5'} minH={'40'} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full">
          <Heading fontSize={['20','36']} size="md" textTransform={'uppercase'} textAlign = {['center','left']}>
            Subscribe to get updates
          </Heading>
          <HStack>
            <Input
              placeholder="Enter Your Email"
              border={'none'}
              borderRadius="none"
              outline={'none'}
            />
            <Button p={'0'} variant={'ghost'} colorScheme={'aliceblue'}>
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w="full"
          borderLeft={['none', '1px solid aliceblue']}
          borderRight={['none', '1px solid aliceblue']}
              >
                  <Heading fontSize={['20','36']} >My Social Media</Heading>
                  <Button variant={'outline'} colorScheme={'aliceblue'}>
                      <a href="https://github.com/ravimishra730" target="blank">Github</a>
                    </Button>
                    <Button variant={'outline'} colorScheme={'aliceblue'}>
                      <a href="https://www.linkedin.com/in/ravi-mishra-596b951a3/"target="blank">LinkedIn</a>
                  </Button>
                  <Button variant={'outline'} colorScheme={'aliceblue'}>
                      <a href="https://www.instagram.com/ravi_730/" target="blank">Instagram</a>
                  </Button>
              </VStack>
        <VStack w="full">
          <Heading size="md">Video Hub</Heading>
          <Text>All Rights Reserved @2k22</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
