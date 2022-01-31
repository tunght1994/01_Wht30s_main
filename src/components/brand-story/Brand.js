import React from 'react';
import Button from './../button/Button'
import './brand.scss'
import bgStory from './../../assets/img/window@2x.png'
import object1 from "./../../assets/img/object-01.png";
import object2 from "./../../assets/img/object-02.png";
import object3 from "./../../assets/img/object-03.png";
import object4 from "./../../assets/img/object-04.png";
import object5 from "./../../assets/img/object-05.png";
import object6 from "./../../assets/img/object-06.png";
import object7 from "./../../assets/img/object-07.png";

const Brand = ({ windowWidth }) => {

  const text = `청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
  봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
  긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
  인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
  아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. `
  return (
    <div className='brand'>
      <div className="brand-header">
        <h1>Brand Story</h1>
        <p className='brand-header-desc'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
      </div>
      <div className="brand-story">
        <img src={bgStory} alt="" />
        <div className="brand-story-text">
          <div className="brand-story-text-content">
            <h2>What Happened’s Brand story</h2>
            <p className='brand-story-text-content-desc'>
              {
                windowWidth < 768
                  ? text.slice(0, 28) + "..."
                  : windowWidth < 900
                    ? text.slice(0, 60) + "..."
                    : windowWidth < 992
                      ? text.slice(0, 120) + "..."
                      : windowWidth < 1030
                        ? text.slice(0, 160) + "..."
                        : text
              }
            </p>
            <Button />
          </div>
        </div>
        <img src={object1} alt="object1" className='object1' />
        <img src={object2} alt="object2" className='object2' />
        <img src={object3} alt="object3" className='object3' />
        <img src={object4} alt="object4" className='object4' />
        <img src={object5} alt="object5" className='object5' />
        <img src={object6} alt="object6" className='object6' />
        <img src={object7} alt="object6" className='object7' />
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Brand;
