import React from 'react';
import { Skill } from './skills_data';
import styles from './Skills.module.scss';

interface SkillBoxProps {
  skill: Skill;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill }) => {
  const { imgSrc, icon, name, type } = skill;

  return (
    <div className={styles.skillsBox}>
      {icon ? (
        <svg className={styles.skillsIcon}>
          <use xlinkHref={`/images/sprite.svg#${icon}`} />
        </svg>
      ) : (
        <img className={styles.skillsIconImage} src={imgSrc} alt={name} loading="lazy" />
      )}
      <div className={styles.skillsDetails}>
        <div className={styles.skillsType}>{type}</div>
        <div className={styles.skillsName}>{name}</div>
      </div>
    </div>
  );
};

export default SkillBox;
