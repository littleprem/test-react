import React, { useState } from 'react';
import { Input, Card, Typography, Divider } from 'antd';
import './first.css';

const { Search } = Input;
const { Text } = Typography;

function First() {
  const array = [
    { key: 1, value: 'item1' },
    { key: 2, value: 'item2' },
    { key: 3, value: 'item3' },
  ];
  const [result, setResult] = useState('-');
  const onSearch = (value) => {
    let searchResult = array.filter((arr) => arr.key === parseInt(value))[0];
    setResult(searchResult.value);
  };
  return (
    <>
      <Divider orientation="left">
        <Text strong>Number 1</Text>
      </Divider>
      <div className="content">
        <Card className="card-input">
          <Search
            placeholder="input key value"
            onSearch={onSearch}
            enterButton
            className="search-input"
          />
          <Text strong>Result : </Text>
          <Text>{result}</Text>
        </Card>
      </div>
    </>
  );
}

export default First;
