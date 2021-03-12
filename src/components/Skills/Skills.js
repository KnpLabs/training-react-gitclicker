import React from 'react'
import { useSelector } from 'react-redux'
import './Skills.css'
import Typography from '@material-ui/core/Typography'
import { Section } from './Section'

export const Skills = () => {
  const skills = useSelector(state => state.game.skills)

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
