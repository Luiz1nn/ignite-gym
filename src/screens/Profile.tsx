import { VStack, ScrollView, Center } from 'native-base'
import { ScreenHeader, UserPhoto } from '@/components'

export const Profile = () => (
  <VStack flex={1}>
    <ScreenHeader title="Perfil" />
    <ScrollView>
      <Center mt={6} px={10}>
        <UserPhoto
          source={{ uri: 'https://github.com/Luiz1nn.png' }}
          alt="Foto do usuário"
          size={33}
        />
      </Center>
    </ScrollView>
  </VStack>
)
