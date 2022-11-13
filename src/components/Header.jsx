import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

// ================================================
// Making the Header Part of the website
// ================================================

const Header = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button pos={'fixed'} top = {'4'} left = {'4'} colorScheme  = {'purple'} p = {'0'} h = {'10'} w = {'10'} onClick = {onOpen} zIndex = {'overlay'} >
                <BiMenuAltLeft />
            </Button>
            <Drawer isOpen={isOpen} placement = "left" onClose = {onClose} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Video Hub</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'} >
                            <Button variant = {'link'}    colorScheme={'purple'} onClick = {onClose} >
                                <Link to = {'/'}> Home </Link>
                            </Button>
                            <Button variant = {'link'}    colorScheme={'purple'} onClick = {onClose}>
                                <Link to = {'/videos'}> Videos </Link>
                            </Button>
                            <Button variant = {'link'}    colorScheme={'purple'} onClick = {onClose}>
                                <Link to = {'/videos ? category = free'}> Free Videos </Link>
                            </Button>
                            <Button variant = {'link'}    colorScheme={'purple'} onClick = {onClose}>
                                <Link to = {'/upload'}> upload video </Link>
                            </Button>
                        </VStack>
                        <HStack>
                            <Button m={30} colorScheme = {"purple"} >
                                <Link>Log IN </Link>
                            </Button>
                            <Button variant={'outline'} >
                                <Link> Sign UP </Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;