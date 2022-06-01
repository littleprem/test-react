import React, { useState } from 'react';
import { Card, Typography, Divider, Button } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import './third.css';
import axios from 'axios';

const { Text } = Typography;

function Third() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploadSuccessResponse, setUploadSuccessResponse] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('selectedFile', selectedFile);
    try {
      const response = await axios({
        method: 'post',
        url: 'https://test.api.goochat',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadSuccessResponse(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Divider orientation="left">
        <Text strong>Number 3</Text>
      </Divider>

      <div className="content">
        <Card className="card-input">
          <input type="file" accept=".jpg" onChange={handleFileSelect} />
          <Button
            type="primary"
            shape="round"
            icon={<CloudUploadOutlined />}
            onClick={(e) => handleSubmit(e)}
            className="button-upload"
          >
            Upload
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Third;
