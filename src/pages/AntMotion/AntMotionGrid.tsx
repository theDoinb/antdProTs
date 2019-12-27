import React from 'react';
import TweenOne from 'rc-tween-one';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Icon } from "antd";
import styles from '../Welcome.less';
import classNames from "classnames/bind";


const cs = classNames.bind(styles);
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
export default class AntMotionGrid extends React.Component {

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render(): React.ReactNode {

    const delay = this.getDelay(1);
    const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
    const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 };
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const textItem = {width: '85%', display: 'inline-block',paddingLeft: '8%', marginTop: '-1.8%'};
    const blockItem = {width: window.document.body.offsetHeight>=900?'33.33%':'100%', display: 'inline-block',padding: '4.5% 3.6% 0',verticalAlign:'top'};
    const wrapper = cs({
      'content-template-wrapper': true,
      'content1-wrapper': true
    });
    const content = cs({
      'content-template': true,
      'content1': true
    });
    return  (
      <div className={wrapper}>
        <OverPack style={{ overflow: 'hidden' }} className={content} >

          <TweenOne
            key="d"
            animation={oneAnim}
            component="h1"
            reverseDelay={100}
          >
            {/*<div style={{fontSize:'2.4rem',fontWeight:400,color:'#404040',lineHeight:'3.42857rem',textAlign:'center'}}>{content1.text.title}</div>*/}
            {content1.text.title}
          </TweenOne>
          <TweenOne
            key="e"
            component="p"
            animation={{ ...oneAnim, delay: 100 }}
          >
            {/*<div style={{fontSize:'1.2rem',fontWeight:400,color:'#aaa',textAlign:'center'}}>{content1.text.subtitle}</div>*/}
            {content1.text.subtitle}
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
                >
                  <TweenOne
                    key="a"
                    animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
                    className={styles.img}
                  >
                    <Icon type={item.icon} />
                  </TweenOne>
                  <div className={styles.text}>
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
    );
  }
}
