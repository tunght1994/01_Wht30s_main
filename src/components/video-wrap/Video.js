import React from 'react';
import Button from '../button/Button';
import './video.scss'
import videoImg from './../../assets/img/video.png'
import videoObject1 from './../../assets/img/video-object-01.png'
import videoObject3 from './../../assets/img/video-object-03.png'
import videoObject4 from './../../assets/img/video-object-04.png'
import videoObject5 from './../../assets/img/video-object-05.png'
import videoObject6 from './../../assets/img/video-object-06.png'
import videoObject7 from './../../assets/img/video-object-07.png'
import videoObject8 from './../../assets/img/video-object-08.png'
import videoObject9 from './../../assets/img/video-object-09.png'


const Video = () => {
    return (
        <div className='video'>
            <div className="video-header">
                <h1>Happened’s issue</h1>
                <p className='video-header-desc'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                <Button />
            </div>
            <div className="container">
                <img src={videoImg} alt="" className='video-img' />
                <img src={videoObject1} alt="videoObject1" className='videoObject1'/>
                <img src={videoObject3} alt="videoObject3" className='videoObject3'/>
                <img src={videoObject4} alt="videoObject4" className='videoObject4'/>
                <img src={videoObject5} alt="videoObject5" className='videoObject5'/>
                <img src={videoObject6} alt="videoObject6" className='videoObject6'/>
                <img src={videoObject7} alt="videoObject7" className='videoObject7'/>
                <img src={videoObject8} alt="videoObject8" className='videoObject8'/>
                <img src={videoObject9} alt="videoObject9" className='videoObject9'/>
            </div>
        </div>
    );
};

export default Video;
