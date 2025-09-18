import  '../../../../index.css';
import  ExperienceCardStyle from './ExperienceCard.module.css';

function ExperienceCard({ img,imageAlt, title, role, date, description}) {
  return (
    <div className={ExperienceCardStyle.card}>
      <div>
              <img src={img} alt={imageAlt}
                style={{borderradius: '0.25rem', marginbottom: '1rem', maxwidth: '100%',
                    height: 'auto', display: 'block',
                    verticalalign: 'middle',}}
              ></img>
              <h3>{title}</h3>
              <p className={ExperienceCardStyle.cardSubtitle}>{role}</p>
              <p className={ExperienceCardStyle.cardSubtitle}>{date}</p>
              <div className={ExperienceCardStyle.description} >{description}</div>
            </div>
    </div>
  );
}

export default ExperienceCard;