import {Link, Outlet} from "react-router-dom";
import React from "react";
import {routes} from "../routes/routes";
import {Layout, Menu, MenuProps, theme} from "antd";

const {Header, Content, Footer} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

export const Frame: React.FC = () => {

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const items: MenuItem[] = [
        {
            key: 'es-demo',
            label: <Link to={routes.home.link}>ES Demo</Link>,
        },
        {
            key: 'test-users',
            label: <Link to={routes.localUser.link}>Test Users</Link>,
        },
        {
            key: 'db-snippets',
            label: <Link to={routes.dbSnippets.link}>DB Snippets</Link>,
        },
    ];

    return (
        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['es-demo']}
                    items={items}
                    style={{flex: 1, minWidth: 0}}
                />
            </Header>
            <Content style={{padding: '0 48px'}}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}