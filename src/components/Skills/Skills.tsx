import './Skills.css'
import Typography from '@material-ui/core/Typography'
import { Section } from './Section'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Skills = () => {
  const skills = useSelector((state: RootState) => state.game.skills)

  return (
    <>
      <Typography variant="h5">Skills</Typography>
      <div className="skills">
        {Object.keys(skills).map((name, key) =>
          <Section
            key={key}
            itemName={name}
            number={skills[name]}
          />
        )}
      </div>
    </>
  )
}
