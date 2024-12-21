const InputTypeSelector = ({ inputType, onTypeChange }) => {
  return (
    <div className="flex space-x-4 mb-2">
      <button
        type="button"
        onClick={() => onTypeChange('url')}
        className={`px-3 py-1 rounded ${
          inputType === 'url'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        URL
      </button>
      <button
        type="button"
        onClick={() => onTypeChange('file')}
        className={`px-3 py-1 rounded ${
          inputType === 'file'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        Upload
      </button>
    </div>
  );
};

export default InputTypeSelector;