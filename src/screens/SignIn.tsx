import { Center, Heading, Image, Text, VStack, ScrollView } from 'native-base'
import { BackgroundImg, LogoSvg } from '@/assets'
import { Button, Input } from '@/components'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@/routes'

export const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const handleNewAccount = () => navigation.navigate('signUp')

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
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

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
