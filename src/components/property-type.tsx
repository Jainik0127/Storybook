import { ListItem, Text } from "@chakra-ui/react"

type PropertyTypeProps = {
  id: number
  title: string
}

const PropertyType = (props: PropertyTypeProps) => {
  const { title } = props
  return (
    <ListItem
      as='button'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      w={{ base: "full", md: "540px", lg: "464px" }}
      h={{ base: "76px", lg: "80px", xxl: "90px" }}
      p={{ base: "8px", lg: "17px" }}
      mx='auto'
      rounded='lg'
      border='2px solid black'
      boxShadow='none'
      bgGradient='none'
      _hover={{
        boxShadow: "lg",
        border: "2px #F1C911 solid",
        bgGradient:
          "linear(to-r, rgba(212, 144, 40, 0.3), rgba(244, 206, 16, 0.3))",
      }}
    >
      <Text
        noOfLines={1}
        fontSize={{ base: "sm", lg: "md" }}
        fontWeight='medium'
      >
        {title}
      </Text>
    </ListItem>
  )
}
export default PropertyType
