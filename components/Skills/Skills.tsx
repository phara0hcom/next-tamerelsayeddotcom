import React from 'react';
import { MySkills } from './skills_data';
import SkillBox from './SkillBox';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  return (
    <section className={styles.sectionSkills} id="section-skills">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary-white">My Skills</h2>
      </div>
      <div className={`row ${styles.skills}`}>
        {MySkills.map((skill, i) => (
          <SkillBox key={`skill_${i}`} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
