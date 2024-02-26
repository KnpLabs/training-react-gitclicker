import './Skills.css'
import Typography from '@material-ui/core/Typography'
import { Section } from './Section'
import { OwnedItems } from '../../type'

type Props = {
  skills: OwnedItems;
}


export const Skills = ({ skills }: Props) => {
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
