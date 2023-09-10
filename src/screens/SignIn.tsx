import { BackgroundImg } from '@/assets'
import { Image, VStack } from 'native-base'

export const SignIn = () => (
  <VStack flex={1} bg="gray.700">
    <Image
      alt="Pessoas treinando"
      source={BackgroundImg}
      defaultSource={BackgroundImg}
      resizeMode="contain"
      position="absolute"
    />
  </VStack>
)
