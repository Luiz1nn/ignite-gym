import { IImageProps, Image } from 'native-base'

type Props = IImageProps & {
  size: number
  alt: string
}

export const UserPhoto = ({ size, alt, ...rest }: Props) => (
  <Image
    alt={alt}
    w={size}
    h={size}
    rounded="full"
    borderWidth={2}
    borderColor="gray.400"
    {...rest}
  />
)
