import React from 'react';
import PropTypes from 'prop-types';

const CharCount = ({ onChange, value = '', schemaType }) => {
  const maxChars = schemaType.options?.maxChars || 250;  // Default to 250 if not set

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{ width: '100%', minHeight: '80px' }}
      />
      <p style={{ textAlign: 'right', fontSize: '12px', color: value.length > maxChars ? 'red' : 'gray' }}>
        {value.length} / {maxChars} characters
      </p>
    </div>
  );
};

// ✅ Add PropTypes to fix warnings
CharCount.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  schemaType: PropTypes.object.isRequired,
};

export default CharCount;
