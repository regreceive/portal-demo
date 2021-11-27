import { FC } from 'react';
import { Link } from 'umi';
import { RollbackOutlined } from '@ant-design/icons';

const Page1: FC = (props) => {
  return (
    <div>
      <Link to="/home" style={{ fontSize: 20 }}>
        <RollbackOutlined />
        返回
      </Link>
    </div>
  );
};

export default Page1;
