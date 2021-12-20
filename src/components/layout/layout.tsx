import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MENUS } from '../../menus';

import './layout.css';

const { Header, Content, Sider } = Layout;

export function MenuLayout() {
  const [activeMenu, setActiveMenu] = useState(MENUS[0]);
  const changeMenu = (menu: any) => setActiveMenu(menu);

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            defaultSelectedKeys={[activeMenu.name]}
            mode="inline"
          >
            {
              MENUS.map((menu, key) => {
                return (<Menu.Item onClick={() => changeMenu(menu)} key={menu.name}>{menu.name}</Menu.Item>);
              })
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{activeMenu.name}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {activeMenu.component}
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
}

