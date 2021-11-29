import { FC } from 'react';
import { history } from 'umi';
import { Typography, Button } from 'antd';

const Page1: FC = (props) => {
  return (
    <Typography.Paragraph>
      <Typography.Title> Page1</Typography.Title>
      <Button
        onClick={() => {
          history.replace('/home');
        }}
      >
        返回
      </Button>
    </Typography.Paragraph>
  );
};

export default Page1;
