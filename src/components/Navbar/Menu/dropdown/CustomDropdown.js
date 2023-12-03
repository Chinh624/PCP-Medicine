import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'product-PCP', label: 'Product PCP' },
  { value: 'skin-care', label: 'Skin Care' },
  { value: 'vitamins', label: 'Vitamins' },
  { value: 'health-condition', label: 'Health Condition' },
];

const CustomDropdown = () => {
  return (
    <Select
      options={options}
      className="type-medicine"
      menuPlacement="bottom"
    />
  );
};

export default CustomDropdown;
