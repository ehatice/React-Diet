import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  MailOutlined 
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import HomeSide from '../SiderBar/HomeSide';
import Aksam from '../SiderBar/Aksam';
import Sabah from '../SiderBar/Sabah';
import Ogle from '../SiderBar/Ogle';
import Mail from '../SiderBar/Mail';

const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Ana Sayfa',
  },
  {
    key: '2',
    label: 'Listelerim',
    icon: <UnorderedListOutlined />,
    children: [
      {
        key: 'Option 1',
        label: 'Sabah',
      },
      {
        key: 'Option 2',
        label: 'Ogle',
      },
      {
        key: 'Option 3',
        label: 'Aksam',
      },
    ],
  },
  {
    key: '3',
    icon: <MailOutlined />,
    label: 'Mail Gonder',
  },
  {
    key: '4',
    label: 'Cikis',
    icon: <LogoutOutlined />,
  },

];

function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('HomeSide');
  const [caloriesValue, setCaloriesValue] = useState(null);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const HandleMenuClick = (e) => {
    if (e.key === '1') {
      setSelectedComponent('HomeSide');
    } else if (e.key === 'Option 1') {
      setSelectedComponent('Sabah');
    } else if (e.key === 'Option 2') {
      setSelectedComponent('Ogle');
    } else if (e.key === 'Option 3') {
      setSelectedComponent('Aksam');
    }else if (e.key === '3') {
      setSelectedComponent('Mail');
    }else if (e.key === '4') {
      navigate('/');
    }
  };

  const renderComponent = () => {
    if (selectedComponent === 'HomeSide') {
      return <HomeSide setCaloriesValue={setCaloriesValue} caloriesValue={caloriesValue} />;
    } else if (selectedComponent === 'Sabah') {
      return <Sabah caloriesValue={caloriesValue} />;
    } else if (selectedComponent === 'Ogle') {
      return <Ogle caloriesValue={caloriesValue} />;
    } else if (selectedComponent === 'Aksam') {
      return <Aksam caloriesValue={caloriesValue} />;
    }else if (selectedComponent === 'Mail') {
      return <Mail />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: 256,
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
          onClick={HandleMenuClick}
        />
      </div>
      <div style={{ marginLeft: 16, padding: 24, background: '#fff', flex: 1 }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default HomePage;
