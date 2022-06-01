import React, { useState, useEffect } from 'react';
import { Card, Typography, Divider, Button, Input } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import './other.css';

const { Text } = Typography;
const { Search } = Input;

function Other() {
  const [inputColor, setInputColor] = useState('#f689b2');
  const [color, setColor] = useState(inputColor);

  useEffect(() => {
    setColor(() => inputColor);
  }, [inputColor]);

  return (
    <>
      <Divider orientation="left">
        <Text strong>Number 4</Text>
      </Divider>

      <div className="content">
        <Card className="card-input">
          <Text strong>
            What is Redux ? <Text code>จากความเข้าใจของหนู</Text>
          </Text>
          <Text className="indent">
            ปกติการส่งค่าข้าม component สามารถใช้ props ได้ แต่เมื่อ application
            มีขนาดใหญ่ขึ้นการส่งไปมาระหว่าง components หรือทั้ง app จะยุ่งขึ้น
            ส่งต่อ props ไปทีล่ะ component จะยุ่งเกินไป เราเลยใช้ Redux แทน โดย
          </Text>
          <ul>
            <li>เก็บค่าที่ต้องการไว้ใน store</li>
            <li>เข้าถึงข้อมูลผ่าน getState()</li>
            <li>update ผ่าน store.dispatch()</li>
            <li>ติดตามการเปลี่ยนแปลงค่าด้วย subscribe()</li>
          </ul>
        </Card>
      </div>
      <Divider orientation="left">
        <Text strong>Number 5</Text>
      </Divider>

      <div className="content">
        <Card className="card-input">
          <Text strong>
            How UseEffect work ? <Text code>จากความเข้าใจของหนู</Text>
          </Text>
          <Text className="indent">
            UseEffect ใช้เพื่อตรวจสอบข้อมูลที่เปลี่ยนแปลงไปจากค่าเดิม จะส่งผลให้
            re-render component นั้นใหม่อีกครั้ง
          </Text>
          <br />
          <Text strong>Let's try</Text>
          <div className="effect-box">
            <div className="show-color" style={{ background: color }}></div>
            <Search
              placeholder="input color"
              onSearch={(value) => {
                setColor(value);
              }}
              enterButton
              className="color-input"
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Other;
