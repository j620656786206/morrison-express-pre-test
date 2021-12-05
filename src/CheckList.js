import React, { useState } from 'react';
import { Checkbox } from 'antd';

import Item from './Item';
import './Item.css';

const CheckList = ({ data = [] }) => {
  const [list, setList] = useState(data);
  const [selectAll, setSelectAll] = useState(false);

  useState(() => {
    setList(data);
  }, [data]);

  const onSelectAll = (value) => {
    setList((oldList) =>
      oldList.map((oldItem) => ({ ...oldItem, checked: value }))
    );
    setSelectAll(value);
  };

  const onCheckBoxChange = ({ item, index, value }) => {
    setList((oldList) => {
      const newList = oldList.slice();

      newList.splice(index, 1, { ...item, checked: value });

      return newList;
    });

    if (!value && selectAll) {
      setSelectAll(false);
    }
  };

  return (
    <div>
      <div className='item-odd'>
        <div className='checkbox'>
          <Checkbox
            checked={selectAll}
            onChange={(e) => onSelectAll(e.target.checked)}
          />
        </div>
        狀態
      </div>

      {list.map((item, index) => (
        <Item
          key={item.id}
          item={item}
          index={index}
          odd={(index + 1) % 2}
          onCheckBoxChange={onCheckBoxChange}
        />
      ))}
    </div>
  );
};

export default CheckList;
