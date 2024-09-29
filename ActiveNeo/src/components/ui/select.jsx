import React from 'react';

const Select = ({ value, onChange, options, ...props }) => {
  return (
    <div className='relative'>
      <select
        value={value}
        onChange={onChange}
        className='flex items-center justify-between w-full px-3 py-2 text-sm bg-purple-700 border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white'
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option} className='text-black'>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
