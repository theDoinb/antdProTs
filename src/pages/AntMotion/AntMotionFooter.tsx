import React from 'react';
import { Card, Icon, BackTop } from 'antd';
import BannerAnim, { Element } from 'rc-banner-anim';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import 'rc-banner-anim/assets/index.css';
import styles from '../Welcome.less';

export default class Welcome extends React.Component {

  componentDidMount() {

  }


  render(): React.ReactNode {
    const aSty = { color:'#666', textDecoration:'none', lineHeight: 2.06, fontSize:'103%' };
    return  (
      <div style={{paddingBottom:32,backgroundColor:'#333'}}>
        <OverPack style={{ overflow: 'hidden', minHeight:150 }} playScale="0.1" >
          <QueueAnim key="queue"
                     type="bottom"
                     component="div"
                     leaveReverse
          >
            <div key="a" className={styles["code-box-shape-bottom"]}>
              <div style={{fontWeight:400,fontSize:'1.4rem'}}>关于作者</div>
              <div><a style={aSty}>xxxxx</a></div>
              <div><a style={aSty}>xxxxx</a></div>
              <div><a style={aSty}>xxxxx</a></div>
              <div><a style={aSty}>xxxxx</a></div>
              <div><a style={aSty}>xxxxx</a></div>
              <div><a style={aSty}>xxxxx</a></div>
            </div>
            <div key="b" className={styles["code-box-shape-bottom"]}>
              <div style={{fontWeight:400,fontSize:'1.4rem'}}>关于作者</div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
            </div>
            <div key="c" className={styles["code-box-shape-bottom"]}>
              <div style={{fontWeight:400,fontSize:'1.4rem'}}>关于作者</div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
            </div>
            <div key="d" className={styles["code-box-shape-bottom"]}>
              <div style={{fontWeight:400,fontSize:'1.4rem'}}>关于作者</div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
            </div>
            <div key="f" className={styles["code-box-shape-bottom"]}>
              <div style={{fontWeight:400,fontSize:'1.4rem'}}>关于作者</div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
                <div><a style={aSty}>xxxxx</a></div>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}
