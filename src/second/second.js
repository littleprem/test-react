import React, { useState } from 'react';
import { Select, Card, Typography, Tag, Divider, TimePicker } from 'antd';
import './second.css';

const { Text } = Typography;
const { CheckableTag } = Tag;
const tagsData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const { Option } = Select;

function Second() {
  const [selectedTags, setSelectedTags] = useState(['']);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
    let element = document.getElementById(`select-group-${tag}`);
    element.classList.toggle('hide');
  };

  const dateObj = (tag) => {
    return (
      <div className="select-group hide" key={tag} id={`select-group-${tag}`}>
        <Text className="select-label">{tag}</Text>
        <div className="select-col">
          <Select
            defaultValue="open24"
            className="select-time"
            onChange={(value) => {
              let element = document.getElementById(
                `select-time-picker-${tag}`
              );
              if (value === 'selectTime') {
                element.classList.toggle('hide');
              } else {
                element.classList.add('hide');
              }
            }}
          >
            <Option value="open24">Open 24</Option>
            <Option value="selectTime">Select time</Option>
          </Select>
          <div id={`select-time-picker-${tag}`} className="hide">
            <TimePicker.RangePicker />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Divider orientation="left">
        <Text strong>Number 2</Text>
      </Divider>

      <div className="content">
        <Card className="card-input">
          <div className="tag-group">
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => handleChange(tag, checked)}
                className="day-tag"
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
          {tagsData.map((tag) => dateObj(tag))}
        </Card>
      </div>
    </>
  );
}

export default Second;
