import { BackgroundImg, LogoSvg } from '@/assets'
import { Button, Input } from '@/components'
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'

export const SignUp = () => (
  <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
  >
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        alt="Pessoas treinando"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo.
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
          Crie sua conta
        </Heading>

        <Input placeholder="Nome" />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input placeholder="Senha" secureTextEntry />

        <Input placeholder="Confirmar a Senha" secureTextEntry />

        <Button title="Criar e acesssar" />
      </Center>

      <Button title="Voltar para o login" variant="outline" mt={12} />
    </VStack>
  </ScrollView>
)
