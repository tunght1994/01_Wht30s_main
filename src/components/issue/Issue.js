import React from 'react';
import Button from '../button/Button';
import './issue.scss'
import new1 from './../../assets/img/news-img-01.png'
import new3 from './../../assets/img/news-img-03.png'
import new4 from './../../assets/img/news-img-04.png'
import new5 from './../../assets/img/news-img-05.png'
import newObject2 from './../../assets/img/news-object-02.png'
import newObject3 from './../../assets/img/news-object-03.png'
import newObject6 from './../../assets/img/news-object-06.png'
import newObject4 from './../../assets/img/news-object-04.png'
import newObject5 from './../../assets/img/news-object-05.png'

const Issue = () => {
  return (
    <div className='issue'>
      <div className="issue-header">
        <h1>Happened’s issue</h1>
        <p className='issue-header-desc'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
        <Button />
      </div>
      <div className="issue-brand">
        <div className="row-full">
          <div className="col col-5 col-sm-1">
            <div className="issue-brand-a">
              <div className="brand-whpn">
                <h2>whpn issue</h2>
              </div>
              <img src={new1} alt="new1" className='whpn-img'/>
              <img src={newObject6} alt="" className='newObject6'/>
            </div>
          </div>
          <div className="col col-5 col-sm-1">
            <div className="issue-brand-b">
              <h3 className="issue-brand-title">
                B Brand
              </h3>
              <img src={new3} alt="new3" />
              <img src={newObject4} alt="" className='newObject4'/>
            </div>
          </div>

          <div className="col col-5 col-sm-1">
            <div className="issue-brand-c">
              <h3 className="issue-brand-title">
                C Brand
              </h3>
              <img src={new3} alt="new3" />
            </div>
          </div>
          <div className="col col-5 col-sm-1">
            <div className="issue-brand-d">
              <h3 className="issue-brand-title-orange">
                D Brand
              </h3>
              <img src={new4} alt="new4" />
              <img src={newObject5} alt="" className='newObject5'/>
            </div>
          </div>
          <div className="col col-5 col-sm-1">
            <div className="issue-brand-e">
              <h3 className="issue-brand-title">
                E Brand
              </h3>
              <img src={new5} alt="new5" />
            </div>
          </div>
        </div>
      </div>
      <img src={newObject2} alt="newObject2" className='newObject2'/>
      <img src={newObject3} alt="newObject3" className='newObject3'/>
    </div>
  );
};

export default Issue;
