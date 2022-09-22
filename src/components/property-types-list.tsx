import { Center, List } from "@chakra-ui/react"

import PropertyType from "components/property-type"
import { PropertyList } from "configs/property-type-list"

const PropertyTypeList = () => (
  <Center h={{ base: "auto", xl: "calc(100vh - 220px)" }}>
    <List spacing='12px' w='full' p={{ base: "20px 16px 72px", xl: "0" }}>
      {PropertyList.map((property) => (
        <PropertyType
          id={property.id}
          key={property.id}
          title={property.title}
        />
      ))}
    </List>
  </Center>
)

export default PropertyTypeList
