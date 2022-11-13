import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
    return (
        <Stack direction={['column','row']} h = {'100vh'} >
            <VStack w={'full'}>
                <video src="" controls controlsList='nodownload' style={{
                    width: '100%',
                }}></video>
        </VStack>
            
      </Stack>
  )
}

export default Videos