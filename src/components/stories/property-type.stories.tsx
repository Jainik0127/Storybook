import { List } from "@chakra-ui/react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import PropertyType from "../property-type"

export default {
  title: "Components/PropertyTypes/Property Type",
  component: PropertyType,
} as ComponentMeta<typeof PropertyType>

const Template: ComponentStory<typeof PropertyType> = (args) => (
  <List>
    <PropertyType {...args} />
  </List>
)

export const Default = Template.bind({})
Default.args = {
  title: "Appartment or Condo",
}

export const PropertyNameLongText = Template.bind({})
PropertyNameLongText.args = {
  title: "Appartment or Condo Property Name using WhimStay",
}
