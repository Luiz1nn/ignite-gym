import { useState } from 'react'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@/routes'
import ExerciseCard from './ExerciseCard'
import Group from './Group'
import Header from './Header'

export const Home = () => {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro'])
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ])
  const [groupSelected, setGroupSelected] = useState('Costas')

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleOpenExerciseDetails = (exerciseId: string) =>
    navigation.navigate('exercise', { exerciseId })

  return (
    <VStack flex={1}>
      <Header />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => (
            <ExerciseCard onPress={() => handleOpenExerciseDetails('item')} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  )
}
