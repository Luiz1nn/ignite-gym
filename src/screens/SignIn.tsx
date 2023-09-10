import { BackgroundImg, LogoSvg } from '@/assets'
import { Center, Image, Text, VStack } from 'native-base'

export const SignIn = () => (
  <VStack flex={1} bg="gray.700">
    <Image
      alt="Pessoas treinando"
      source={BackgroundImg}
      defaultSource={BackgroundImg}
      resizeMode="contain"
      position="absolute"
    />

    <Center py={24}>
      <LogoSvg />

      <Text color="gray.100" fontSize="sm">
        Treine sua mente e o seu corpo
      </Text>
    </Center>
  </VStack>
)
