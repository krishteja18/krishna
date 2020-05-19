import React from 'react';
import styles from '../components/SideMenu/index.less';
import MenuIcon from '../images/extraMenu.png';

import Chart from '../pages/Masters/Chart';









const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export function isUrl(path) {
  return reg.test(path);
}

const menuData = [

 
  {
    name: 'CHART',
    path: 'chart',
    // hideInMenu: true,
    component: Chart,
  }
  
  
 
 
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority,
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
