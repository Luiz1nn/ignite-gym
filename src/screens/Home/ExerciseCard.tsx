import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps

const ExerciseCard = ({ ...rest }: Props) => (
  <TouchableOpacity {...rest}>
    <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
      <Image
        source={{
          uri: 'https://www.dicasdetreino.com.br/wp-content/uploads/2017/05/Tipos-de-Supino.jpg',
        }}
        alt="Imagem do exercicício"
        w={16}
        h={16}
        rounded="md"
        mr={4}
        resizeMode="cover"
      />

      <VStack flex={1}>
        <Heading fontSize="lg" color="white" fontFamily="heading">
          Supino reto
        </Heading>

        <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
          3 séries x 12 repetições
        </Text>
      </VStack>

      <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
    </HStack>
  </TouchableOpacity>
)

export default ExerciseCard
