import { useState } from 'react'
import { Heading, VStack, SectionList, Text } from 'native-base'
import { ScreenHeader } from '@/components'
import { HistoryCard } from './HistoryCard'

export const History = () => {
  const [exercises, setExercises] = useState([
    {
      title: '19.09.22',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '18.09.22',
      data: ['Puxada frontal'],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercicios registrados ainda. Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
