import { Button, Layout, Menu } from "antd";
import React from "react";
import {
  ApiOutlined,
  AppstoreOutlined,
  CloudOutlined,
  DashboardOutlined,
  FundProjectionScreenOutlined,
  PlaySquareOutlined,
  RobotOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutProps } from "../../types/types";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = (props: LayoutProps) => {
  const { children, selectedKey } = props;
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login");
  };

  const layoutSections = [
    {
      path: "/dashboard",
      title: "Dashboard",
      icon: <AppstoreOutlined />,
    },
    {
      path: "/cpu",
      title: "CPU",
      icon: <SettingOutlined />,
    },
    {
      path: "/heatsink",
      title: "Disipador",
      icon: <DashboardOutlined />,
    },
    {
      path: "/motherboard",
      title: "Tarjeta Madre",
      icon: <RobotOutlined />,
    },
    {
      path: "/disk",
      title: "Disco",
      icon: <CloudOutlined />,
    },
    {
      path: "/graphics",
      title: "Gráficos",
      icon: <PlaySquareOutlined />,
    },
    {
      path: "/display",
      title: "Monitor",
      icon: <FundProjectionScreenOutlined />,
    },
    {
      path: "/build_pc",
      title: "Construir PC",
      icon: <ApiOutlined />,
    },
  ];

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey}>
          {layoutSections.map((e, i) => {
            return (
              <Menu.Item icon={e.icon} key={(i + 1).toString()}>
                <Link href={e.path}>{e.title}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button type="primary" className="logoutBtn" onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content style={{ overflow: "auto" }}>
          <div
            style={{
              padding: "54px",
              minHeight: "100vh",
            }}
            className="animate__animated animate__fadeIn animate__faster"
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(MainLayout);
