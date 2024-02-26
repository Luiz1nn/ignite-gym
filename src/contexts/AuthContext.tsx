import { UserDTO } from '@/dtos'
import { api } from '@/services'
import { ReactNode, createContext, useState } from 'react'
import { storageUserSave } from '@/storage'

export type AuthContextDataProps = {
  user: UserDTO
  isLoadingUserStorageData: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/sessions', { email, password })

      if (data.user) {
        await storageUserSave(data.user)
        setUser(data.user)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  const signOut = async () => {
    try {
      setIsLoadingUserStorageData(true)
      setUser({} as UserDTO)
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoadingUserStorageData, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
