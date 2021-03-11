import React from 'react'
import './Skills.css'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Section } from './Section'

export const Skills = ({ skills }) => {
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

Skills.propTypes = {
  skills: PropTypes.objectOf(PropTypes.number).isRequired,
}
