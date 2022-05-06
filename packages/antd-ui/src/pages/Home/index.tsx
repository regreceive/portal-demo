import { FC, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import {
  Alert,
  Button,
  Dropdown,
  Input,
  Menu,
  Modal,
  Switch,
  Slider,
  Select,
  Space,
  Tag,
  Table,
  Timeline,
} from 'antd';
import { history } from 'umi';
import { utils, portal } from 'k2-portal';
import BoxArea from '@/components/BoxArea';
import styles from './style.less';

const columns: ColumnsType<any[]> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: any[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Home: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <BoxArea
      title="Antd UI"
      rightArea={
        utils.isInWidget() && (
          <a
            href={`${portal.config.nacos.appRootPathName}/antd-ui/`}
            target="_blank"
          >
            打开独立应用
          </a>
        )
      }
    >
      <div className={styles.grid}>
        <div>
          <Dropdown
            arrow
            placement="bottomCenter"
            overlay={
              <Menu>
                <Menu.Item>1st menu item</Menu.Item>
                <Menu.Item>2st menu item</Menu.Item>
              </Menu>
            }
          >
            <a style={{ width: 120 }}>
              Dropdown <DownOutlined />
            </a>
          </Dropdown>
          <Button>Button</Button>
          <Button type="primary">Primary</Button>
          <Switch defaultChecked />
          <Select defaultValue="lucy" style={{ width: 160 }}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
          <Input placeholder="fill please" />
        </div>
        <div>
          <Slider style={{ width: 500 }} defaultValue={20} />
        </div>
        <div>
          <Table style={{ flex: 'auto' }} columns={columns} dataSource={data} />
        </div>
        <div>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </div>
        <div>
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
          <Alert
            message="Info Text"
            description="Info Description Info Description Info Description Info Description"
            type="info"
          />
          <Alert
            message="Warning Text"
            description="Warning Description Warning Description Warning Description Warning Description"
            type="warning"
          />
          <Alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description"
            type="error"
          />
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            Open Modal
          </Button>
          <a
            onClick={() => {
              history.push({ pathname: '/page', query: { a: 1, b: 2 } } as any);
            }}
          >
            路由跳转
          </a>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={() => {
              setIsModalVisible(false);
            }}
            onCancel={() => {
              setIsModalVisible(false);
            }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div>
    </BoxArea>
  );
};

export default Home;
