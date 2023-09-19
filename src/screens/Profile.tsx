import { VStack, ScrollView, Center, Skeleton } from 'native-base'
import { ScreenHeader, UserPhoto } from '@/components'
import { useState } from 'react'

const PHOTO_SIZE = 33

export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https://github.com/Luiz1nn.png' }}
              alt="Foto do usuário"
              size={33}
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  )
}
