import { Section } from './Section'
import { OwnedItems } from '@/types'

type Props = {
  skills: OwnedItems
}

export const Skills = ({ skills }: Props) => {
  return (
    <>
      {Object.keys(skills).map((name, key) => (
        <Section
          key={key}
          itemName={name}
          number={skills[name]}
        />
      ))}
    </>
  )
}
