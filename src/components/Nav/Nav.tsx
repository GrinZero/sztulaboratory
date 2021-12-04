import React, { useEffect, useState } from 'react';
import { Link } from '@modern-js/runtime/router';
import styles from './Nav.module.scss';

const 实验室icon = 'https://z3.ax1x.com/2021/11/22/IzMhIs.png';
const 成员icon = 'https://z3.ax1x.com/2021/11/22/IzQSRx.png';
const leftNav = [
  {
    icon: 实验室icon,
    route: '/index',
    items: [
      {
        text: '资源管理',
        message: 0,
        to: '/resource_control',
      },
      {
        text: '实验室管理',
        message: 0,
        to: '/laboratory_control',
      },
    ],
  },
  {
    icon: 成员icon,
    route: '/sir',
    items: [
      {
        text: '成员情况',
        message: 0,
        to: '/members_situation',
      },
      {
        text: '成员管理',
        message: 0,
        to: '/members_control',
      },
    ],
  },
];
const TabBarHeightEmpty = (props: { left: number }) => {
  const { left } = props;
  return <div className={`w-full ${left ? 'h-24' : 'h-14'}`}></div>;
};
const Nav = () => {
  const [leftActive, setLeftActive] = useState(0);
  const [rightActive, setRightActive] = useState(0);
  useEffect(() => {
    // console.log(leftActive, rightActive);
  }, [leftActive, rightActive]);
  return (
    <div className={`${styles.main} flex flex-row shadow-lg`}>
      <div className={`${styles['main-left']}`}>
        <TabBarHeightEmpty left={1} />
        {leftNav.map((item, index) => (
          <Link
            key={item.icon}
            className={`w-full h-10 flexCenter cursor-pointer ${
              leftActive === index
                ? styles['main-left-item-active']
                : styles['main-left-item']
            }`}
            to={item.route}
            onClick={() => {
              setLeftActive(index);
            }}>
            <img src={item.icon} width="20" height="20"></img>
          </Link>
        ))}
      </div>
      <div className={`${styles['main-right']} text-xs`}>
        <TabBarHeightEmpty left={0} />
        {leftNav[leftActive].items.map((item, index) => (
          <Link
            key={index}
            className={`${
              styles['main-right-item']
            } py-3 w-full cursor-pointer flex ${
              rightActive === index ? styles['main-right-item-active'] : ''
            }`}
            to={leftNav[leftActive].route + item.to}
            onClick={() => {
              setRightActive(index);
            }}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
export { Nav };
