import React from 'react';
import { MySkills } from './skills_data';

import svgSprite from '../../assets/images/sprite.svg';
import dockerLogo from '../../assets/images/Docker-Logo-Black.png';
import circleLogo from '../../assets/images/circle-logo-stacked-black.png';

const createSkillList = (data, i) => {
  let imageSrc;
  switch (data.name) {
    case 'Circle-CI':
      imageSrc = circleLogo;
      break;

    default:
      imageSrc = dockerLogo;
      break;
  }
  return (
    <div key={`skillB_nr${i}`} className="skills__box">
      {data.icon ? (
        <svg className="skills__icon">
          <use xlinkHref={`${svgSprite}#${data.icon}`} />
        </svg>
      ) : (
        <img className="skills__iconImage" src={imageSrc} alt={data.name} />
      )}
      <div className="skills__details">
        <div className="skills__type">{data.type}</div>
        <div className="skills__name">{data.name}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section-skills" id="section-skills">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary-white">My Skills</h2>
      </div>
      <div className="row skills">{MySkills.map((data, i) => createSkillList(data, i))}</div>
    </section>
  );
};
export default Skills;
