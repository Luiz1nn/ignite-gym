import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { HStack, Heading, Icon, Text, VStack } from 'native-base'
import { UserPhoto } from '@/components'

const Header = () => (
  <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
    <UserPhoto
      source={{ uri: 'https://github.com/Luiz1nn.png' }}
      size={16}
      alt="Imagem do usuário"
      mr={4}
    />

    <VStack flex={1}>
      <Text color="gray.100" fontSize="md">
        Olá,
      </Text>

      <Heading color="gray.100" fontSize="md" fontFamily="heading">
        Luis
      </Heading>
    </VStack>

    <TouchableOpacity>
      <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
    </TouchableOpacity>
  </HStack>
)

export default Header
