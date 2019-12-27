import React from 'react';
import { Card, Icon } from 'antd';
import { Element } from 'rc-banner-anim';
import { OverPack, Parallax } from 'rc-scroll-anim';
import 'rc-banner-anim/assets/index.css';
import styles from '../Welcome.less';
import Banner from './AntMotionBanner'
import Grid from './AntMotionGrid'
import Footer from './AntMotionFooter'

const BgElement = Element.BgElement;
export default class Welcome extends React.Component {

  componentDidMount() {

  }



  render(): React.ReactNode {
    const height = window.document.body.offsetHeight - 64 - 48 - 2;




    return  (
      <Card className={styles.antMotion}>
        <Banner />
        <Grid />
        <div style={{height: height/2, textAlign:'center'}}>
          <Parallax
            key='p1'
            animation={{ scale: 1, opacity: 1 }}
            style={{ transform: 'scale(0)', margin: '10px auto',opacity: 0  }}
            className="code-box-shape"
          >
            <img src={require('../../assets/Planet_Website.gif')} style={{maxWidth:'100%'}} />
          </Parallax>
        </div>
        <div style={{height: height/2, textAlign:'center'}}>
          <Parallax
            key='p2'
            animation={[
              { x: 0, opacity: 1, playScale: [0, 0.2] },
              { y: -100, playScale: [0, 0.3] },
            ]}
            style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
            className="code-box-shape"
          >
            <img src={require('../../assets/source.gif')} style={{height: height/2,maxWidth:'100%'}} />
          </Parallax>
        </div>
        <Footer />
      </Card>
    );
  }
}
