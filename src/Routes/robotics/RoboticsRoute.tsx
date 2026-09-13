import { useEffect, useState } from 'react';
import { CHAPTERS } from './missionStory';
import WarehouseScene from './WarehouseScene';
import { useScrollProgress } from './useScrollProgress';
import '../RoboticsRoute.css';

function SensorView({ thermal = false }: { thermal?: boolean }) {
  return <div className={`mission-sensor ${thermal ? 'mission-sensor--thermal' : ''}`}>
    <div className="mission-sensor__scene"><i /><i /><i /><span className="mission-sensor__fire" /><span className="mission-sensor__box" /></div>
    <span className="mission-sensor__label">{thermal ? 'THERMAL / VALIDATION' : 'RGB / YOLO DETECTION'}</span>
  </div>;
}

export default function RoboticsRoute({ onClose }: { onClose?: () => void }) {
  const { scrollRef, progress } = useScrollProgress();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);update();media.addEventListener('change',update);
    const previousTitle=document.title;
    const previousDescription=document.querySelector('meta[name="description"]')?.getAttribute('content');
    const previousCanonical=document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const setMeta=(selector:string,attribute:string,value:string)=>document.querySelector(selector)?.setAttribute(attribute,value);
    document.title='Firefighting Robotics · Pavlou | Dimitrios Gkegkas';
    setMeta('meta[name="description"]','content','An interactive case study of an autonomous firefighting quadruped: ROS2 autonomy, perception, localization, navigation, fire detection, and suppression support.');
    setMeta('link[rel="canonical"]','href','https://dimitriosgkegkas.github.io/portfolio/robotics/');
    setMeta('meta[property="og:url"]','content','https://dimitriosgkegkas.github.io/portfolio/robotics/');
    setMeta('meta[property="og:title"]','content','Firefighting Robotics · Pavlou | Dimitrios Gkegkas');
    setMeta('meta[property="og:description"]','content','Explore the robotics engineering behind an autonomous firefighting quadruped, from spatial perception and fire localization to navigation and suppression.');
    setMeta('meta[property="og:image"]','content','https://dimitriosgkegkas.github.io/portfolio/projects/slam/slam_1%20Large.jpeg');
    setMeta('meta[name="twitter:title"]','content','Firefighting Robotics · Pavlou | Dimitrios Gkegkas');
    setMeta('meta[name="twitter:description"]','content','An interactive case study of autonomous firefighting robotics, ROS2 autonomy, perception, localization, and suppression support.');
    setMeta('meta[name="twitter:image"]','content','https://dimitriosgkegkas.github.io/portfolio/projects/slam/slam_1%20Large.jpeg');
    document.documentElement.classList.add('robotics-route');document.body.classList.add('robotics-route');
    return () => {media.removeEventListener('change',update);document.title=previousTitle;if(previousDescription)setMeta('meta[name="description"]','content',previousDescription);if(previousCanonical)setMeta('link[rel="canonical"]','href',previousCanonical);document.documentElement.classList.remove('robotics-route');document.body.classList.remove('robotics-route');};
  }, []);
  const index = Math.min(5,Math.floor(progress*5+.15));
  const chapter=CHAPTERS[index];
  const navigate = (i: number) => {
    const el=scrollRef.current;if(el) el.scrollTo({top:(el.scrollHeight-el.clientHeight)*i/5,behavior:reduced?'instant':'smooth'});
  };
  return <main className={`robotics-page${onClose?' robotics-page--embedded':''}`}>
    <WarehouseScene progress={reduced ? index/5 : progress} reduced={reduced} />
    <div className="mission-shade" />
    <div ref={scrollRef} className="robotics-page__scroll" tabIndex={0} aria-label="Explore the robotics mission. Scroll or use Page Down and Page Up.">
      {CHAPTERS.map(c=><section key={c.label} className="robotics-page__step" aria-hidden="true" />)}
    </div>
    <div className="mission-ui">
      <header className="mission-header">
        {onClose ? <button onClick={onClose} className="mission-back">← Portfolio</button> : <a href={import.meta.env.BASE_URL} className="mission-back">← Portfolio</a>}
        <div className="mission-brand">PAVLOU <span>FIRE FIGHTING</span></div>
      </header>
      <div className="mission-copy">
        <div key={chapter.label} className="mission-copy__content">
          <p className="mission-eyebrow">{chapter.eyebrow}</p>
          <h1>{chapter.title}</h1>
          <p className="mission-body">{chapter.body}</p>
          <div className="mission-tags">{chapter.tags.map(t=><span key={t}>{t}</span>)}</div>
          <p className="mission-detail">{chapter.detail}</p>
        </div>
      </div>
      {index===1 && <aside className="mission-sensors" aria-label="Illustration of RGB detection and thermal validation">
        <div className="mission-sensors__heading">DUAL-LIGHT CAMERA <span>SCHEMATIC</span></div>
        <div className="mission-sensors__views"><SensorView /><SensorView thermal /></div>
        <div className="mission-sensors__result">Visual detection + thermal evidence <span>→ VERIFIED EVENT</span></div>
      </aside>}
    
      <footer className="mission-footer">
        <div className="mission-scroll-label">{index===0?(progress < .15?'SCROLL TO REVEAL THE SPACE':'SCROLL TO FOLLOW THE MISSION'):index===5?'SCROLL UP TO REVISIT':'SCROLL TO CONTINUE'} <span>{index===5?'↑':'↓'}</span></div>
        <nav className="mission-chapters" aria-label="Mission chapters">
          {CHAPTERS.map((c,i)=><button key={c.label} onClick={()=>navigate(i)} aria-current={i===index?'step':undefined} aria-label={`${i+1}. ${c.label}`}><span className="mission-chapter-label">{c.label}</span></button>)}
        </nav>
        <div className="mission-count">{String(index+1).padStart(2,'0')} <span>/ 06</span></div>
      </footer>
      <div className="mission-progress"><i style={{transform:`scaleX(${progress})`}} /></div>
    </div>
  </main>;
}
