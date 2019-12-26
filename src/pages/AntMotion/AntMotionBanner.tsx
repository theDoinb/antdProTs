import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const imgArray = [
  'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
  'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
];
const BgElement = Element.BgElement;
export default class AntMotionBanner extends React.Component {

  render(): React.ReactNode {
    const height = window.document.body.offsetHeight - 64 - 48 - 2;
    return  (
      <div style={{ margin: '0 auto',width:'100%',textAlign:'center',overflow:'hidden',height:'100%',backgroundColor:'#0098ce' }}>
        <BannerAnim prefixCls="banner-user" autoPlay style={{height}}>
          {
            imgArray.map((item,index)=>(
              <Element
                prefixCls="banner-user-elem"
                key={index}
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: `url(${item})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                  Ant Motion Banner
                </TweenOne>
                <TweenOne className="banner-user-text"
                          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                  The Fast Way Use Animation In React
                </TweenOne>
              </Element>
            ))
          }
        </BannerAnim>
      </div>
    );
  }
}
