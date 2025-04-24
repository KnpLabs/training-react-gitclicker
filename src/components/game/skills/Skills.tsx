import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { Section } from './Section'

export const Skills = () => {
  const skills = useSelector((state: RootState) => state.game.skills)

  return (
    <>
      {Object.keys(skills).map(name => (
        <Section
          key={name}
          itemName={name}
          number={skills[name]}
        />
      ))}
    </>
  )
}
