import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'product-PCP', label: 'Product PCP' },
  { value: 'skin-care', label: 'Skin Care' },
  { value: 'vitamins', label: 'Vitamins' },
  { value: 'health-condition', label: 'Health Condition' },
];

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        options={options}
        className="type-medicine"
        menuPlacement="bottom"
        onChange={handleSelectChange}
      />

      {/* {selectedOption && (
        <div>
          <ul>
            {Data.product.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default CustomDropdown;
