import React from "react";
import { Card } from 'antd';
import styles from './home.less';
import classNames from "classnames/bind";

const cs = classNames.bind(styles);
export default class Drag1 extends React.Component {

  render() {
    const spaces = (index: number, size: string ) =>cs({
      'space__star': true,
      [`space__star--${index}`]: true,
      [`space__star--${size}`]: true
    });
    const spaceShooting = cs({
      'space__star': true,
      'space__star--shooting': true
    });
    const sizes = ['small','small','small','medium','small','small','big','medium','small','small','small','medium','small','big','small','medium','small','small','small',
    'medium','big','small','small',',medium','small','small','small','medium','small'];
    const loves = (index: number) =>cs({
      'love__heart': true,
      [`love__heart--${index}`]: true
    });
    const moons = (index: number, size: string ) =>cs({
      'moon__crater': true,
      [`moon__crater--${index}`]: true,
      [`moon__crater--${size}`]: true
    });
    const moonCustom = (a: string, b: string)  =>cs({
      [`${a}`]: true,
      [`${b}`]: true,
    });
    return (
      <div className={styles.spinSty}>
        <div className={styles.space}>
          <div className={spaceShooting} />
          {
            sizes.map((size,index)=>
              <div key={`space${index+1}`} className={spaces(index+1,size)} />
            )
          }
        </div>
        <div className={styles.moon}>
          <div className={styles.love}>
            <div className={loves(1)} />
            <div className={loves(2)} />
            <div className={loves(3)} />
          </div>
          <div className={styles.moon__container}>
            <div className={moons(1,'small')} />
            <div className={moons(2,'small')} />
            <div className={moons(3,'small')} />
            <div className={moons(4,'medium')} />
            <div className={moons(5,'medium')} />
            <div className={moons(6,'big')} />
            <div className={styles.moon__face}>
              <div className={moonCustom('moon__eye','moon__eye--left')} />
              <div className={moonCustom('moon__eye','moon__eye--right')} />
              <div className={moonCustom('moon__cheek','moon__cheek--left')} />
              <div className={moonCustom('oon__cheek','moon__cheek--right')} />
              <div className={styles['moon__smile']} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
