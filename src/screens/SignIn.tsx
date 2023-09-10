import { BackgroundImg, LogoSvg } from '@/assets'
import { Input } from '@/components'
import { Center, Heading, Image, Text, VStack } from 'native-base'

export const SignIn = () => (
  <VStack flex={1} bg="gray.700" px={10}>
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

    <Center>
      <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
        Acesse a conta
      </Heading>

      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder="Senha" secureTextEntry />
    </Center>
  </VStack>
)
