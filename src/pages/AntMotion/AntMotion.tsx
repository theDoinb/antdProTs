import React from 'react';
import { Card, Icon } from 'antd';
import BannerAnim, { Element } from 'rc-banner-anim';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import 'rc-banner-anim/assets/index.css';
import styles from '../Welcome.less';
import Footer from './AntMotionFooter'
import Banner from './AntMotionBanner'

const content1 =  {
  text: {
    title: 'Netlify提供基础的环境服务',
    subtitle: '基于ant design pro',
  },
  block: [
    {
      id: 1,
      icon: 'github',
      title: 'github',
      content: 'GitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名GitHub。',
    },
    {
      id: 2,
      icon: 'wechat',
      title: '前后端',
      content: '微信（WeChat）是腾讯公司于2011年1月21日推出的一个为智能终端提供即时通讯服务的免费应用程序。',
    },
    {
      id: 3,
      icon: 'chrome',
      title: '谷歌',
      content: '谷歌公司（Google Inc.）成立于1998年9月4日，由拉里·佩奇和谢尔盖·布林共同创建，被公认为全球最大的搜索引擎公司。',
    },
    {
      id: 4,
      icon: 'html5',
      title: 'html5',
      content: 'HTML5是互联网的下一代标准，是构建以及呈现互联网内容的一种语言方式．被认为是互联网的核心技术之一。',
    },
    {
      id: 5,
      icon: 'apple',
      title: '苹果',
      content: '由史蒂夫·乔布斯、斯蒂夫·沃兹尼亚克和罗·韦恩(Ron Wayne)等人于1976年4月1日创立，并命名为美国苹果电脑公司。',
    },
    {
      id: 6,
      icon: 'android',
      title: '安卓',
      content: '安卓（Android）是一种基于Linux的自由及开放源代码的操作系统。主要使用于移动设备，如智能手机和平板电脑，由Google公司和开放手机联盟领导及开发。',
    },
    ],
};
const BgElement = Element.BgElement;
export default class Welcome extends React.Component {

  componentDidMount() {

  }

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render(): React.ReactNode {
    const height = window.document.body.offsetHeight - 64 - 48 - 2;
    const imgArray = [
      'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
      'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
    ];
    const delay = this.getDelay(1);
    const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
    const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 };
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const textItem = {width: '85%', display: 'inline-block',paddingLeft: '8%', marginTop: '-1.8%'};
    const blockItem = {width: '33.33%', display: 'inline-block',padding: '4.5% 3.6% 0',verticalAlign:'top'};
    return  (
      <Card className={styles.antMotion}>
        <Banner />
        <div style={{padding: 16}}>
          <OverPack style={{ overflow: 'hidden' }} >

            <TweenOne
              key="d"
              animation={oneAnim}
              component="h1"
              reverseDelay={100}
            >
              <div style={{fontSize:'2.4rem',fontWeight:400,color:'#404040',lineHeight:'3.42857rem',textAlign:'center'}}>{content1.text.title}</div>
            </TweenOne>
            <TweenOne
              key="e"
              component="p"
              animation={{ ...oneAnim, delay: 100 }}
            >
              <h2 style={{fontSize:'1.2rem',fontWeight:400,color:'#aaa',textAlign:'center'}}>{content1.text.subtitle}</h2>
            </TweenOne>
            <QueueAnim
              key="f"
              type="bottom"
              component="ul"
            >
            {
              content1.block.map(item =>
                <TweenOne
                  component="li"
                  animation={liAnim}
                  key={item.id}
                  style={blockItem}
                >
                  <TweenOne
                    key="a"
                    animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
                    className="img"
                    style={{width:'15%', display:'inline-block',verticalAlign:'top'}}
                  >
                    <Icon type={item.icon} style={{fontSize:40, color:'#1890ff'}} />
                  </TweenOne>
                  <div style={textItem}>
                    <TweenOne
                      key="b"
                      animation={childrenAnim}
                      component="h1"
                    >
                      {item.title}
                    </TweenOne>
                    <TweenOne
                      key="c"
                      animation={{ ...childrenAnim, delay: delay + 200 }}
                      component="p"
                    >
                      {item.content}
                    </TweenOne>
                  </div>
                </TweenOne>
              )
            }
            </QueueAnim>

          </OverPack>
        </div>
        <div style={{height: height/2, textAlign:'center'}}>
          <Parallax
            playScale="0.1"
            key='p1'
            animation={{ scale: 1, opacity: 1 }}
            style={{ transform: 'scale(0)', margin: '10px auto',opacity: 0  }}
            className="code-box-shape"
          >
            <img src={require('../../assets/Planet_Website.gif')} />
          </Parallax>
        </div>
        <div style={{height: height/2, textAlign:'center'}}>
          <Parallax
            playScale="0.1"
            key='p2'
            animation={[
              { x: 0, opacity: 1, playScale: [0, 0.2] },
              { y: -100, playScale: [0, 0.3] },
            ]}
            style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
            className="code-box-shape"
          >
            <img src={require('../../assets/source.gif')} style={{height: height/2}} />
          </Parallax>
        </div>
        <Footer />
      </Card>
    );
  }
}
