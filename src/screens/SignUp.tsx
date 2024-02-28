import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { BackgroundImg, LogoSvg } from '@/assets'
import { Button, Input } from '@/components'
import { AppError } from '@/utils'
import { api } from '@/services'
import { useState } from 'react'
import { useAuth } from '@/hooks'

type FormDataProps = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  passwordConfirmation: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'A confirmação da senha não confere.'),
})

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()
  const { signIn } = useAuth()

  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })

  const handleGoBack = () => navigation.goBack()

  const handleSignUp = async ({ name, email, password }: FormDataProps) => {
    try {
      setIsLoading(true)

      await api.post('/users', { name, email, password })
      await signIn(email, password)
    } catch (error) {
      setIsLoading(false)

      const isAppError = error instanceof AppError

      const title = isAppError
        ? error.message
        : 'Não foi possível criar a conta. Tente novamente mais tarde.'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

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

          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="passwordConfirmation"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Confirmar a Senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.passwordConfirmation?.message}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Button
            title="Criar e acesssar"
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
          />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={12}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}
