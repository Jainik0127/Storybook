import { ComponentMeta, ComponentStory } from "@storybook/react"

import PropertyTypeList from "../property-types-list"

export default {
  title: "Components/PropertyTypes/Property Type List",
  component: PropertyTypeList,
} as ComponentMeta<typeof PropertyTypeList>

const Template: ComponentStory<typeof PropertyTypeList> = () => (
  <PropertyTypeList />
)

export const Default = Template.bind({})

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hb9sqICXPyVYEDhhx3JKqu",
  },
}
