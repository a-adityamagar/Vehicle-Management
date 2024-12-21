import { useEffect } from 'react';
import { useImageInput } from '../hooks/useImageInput';

const ImageInput = ({ value = '', onChange }) => {
  const {
    inputType,
    imageUrl,
    setInputType,
    handleUrlChange,
    handleFileChange
  } = useImageInput(value);

  useEffect(() => {
    if (imageUrl) {
      onChange(imageUrl);
    }
  }, [imageUrl]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setInputType('url')}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            inputType === 'url'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Image URL
        </button>
        <button
          type="button"
          onClick={() => setInputType('file')}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            inputType === 'file'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Upload Image
        </button>
      </div>

      <div className="relative">
        {inputType === 'url' ? (
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="Enter image URL here..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          />
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files?.[0])}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200
                     file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                     file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700
                     hover:file:bg-indigo-100"
          />
        )}
      </div>

      {imageUrl && (
        <div className="relative group">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
