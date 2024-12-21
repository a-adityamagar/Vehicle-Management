import { useCallback } from 'react';
import { useImageInput } from '../../hooks/useImageInput';
import InputTypeSelector from './InputTypeSelector';
import ImagePreview from './ImagePreview';

const ImageInput = ({ value, onChange }) => {
  const {
    inputType,
    imageUrl,
    setInputType,
    handleUrlChange,
    handleFileChange
  } = useImageInput(value, onChange);

  const handleFileInputChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  }, [handleFileChange]);

  return (
    <div className="space-y-2">
      <InputTypeSelector 
        inputType={inputType}
        onTypeChange={setInputType}
      />

      {inputType === 'url' ? (
        <input
          type="url"
          value={imageUrl || ''}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="Enter image URL"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
        />
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
        />
      )}

      <ImagePreview src={imageUrl} />
    </div>
  );
};

export default ImageInput;