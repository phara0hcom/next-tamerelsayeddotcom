import React from 'react';
import { Skill } from './skills_data';
import styles from './Skills.module.scss';

interface SkillBoxProps {
  skill: Skill;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill }) => {
  let imageSrc: string;
  switch (skill.name) {
    case 'Circle-CI':
      imageSrc = '/images/circle-logo-stacked-black.png';
      break;

    case 'TypeScript':
      imageSrc = '/images/typescriptlang-icon.svg';
      break;

    default:
      imageSrc = '/images/Docker-Logo-Black.png';
      break;
  }

  return (
    <div className={styles.skillsBox}>
      {skill.icon ? (
        <svg className={styles.skillsIcon}>
          <use xlinkHref={`/images/sprite.svg#${skill.icon}`} />
        </svg>
      ) : (
        <img className={styles.skillsIconImage} src={imageSrc} alt={skill.name} />
      )}
      <div className={styles.skillsDetails}>
        <div className={styles.skillsType}>{skill.type}</div>
        <div className={styles.skillsName}>{skill.name}</div>
      </div>
    </div>
  );
};

export default SkillBox;
