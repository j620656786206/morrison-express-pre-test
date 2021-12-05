import React from 'react';
import { Checkbox } from 'antd';
import './Item.css';

const Item = ({ item, index, onCheckBoxChange = ({ item, value }) => {}, odd }) => {
  const { enableCheckbox = false, checked = false } = item;

  const onCheckBoxChangeHandler = (value) => {
    onCheckBoxChange({ item, index, value });
  };

  return (
    <div className={[odd ? 'item-odd' : 'item']}>
      <div className='checkbox'>
        {enableCheckbox && (
          <Checkbox
            checked={checked}
            onChange={(e) => onCheckBoxChangeHandler(e.target.checked)}
          />
        )}
      </div>

      <div>00-未派車</div>
    </div>
  );
};

export default Item;
