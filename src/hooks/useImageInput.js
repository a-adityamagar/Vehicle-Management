import { useState, useCallback, useEffect } from 'react';

export const useImageInput = (initialValue = '', onChange) => {
  const [inputType, setInputType] = useState('url');
  const [imageUrl, setImageUrl] = useState(initialValue);

  useEffect(() => {
    setImageUrl(initialValue);
  }, [initialValue]);

  const handleUrlChange = useCallback((url) => {
    setImageUrl(url);
    onChange?.(url);
  }, [onChange]);

  const handleFileChange = useCallback((file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImageUrl(result);
        onChange?.(result);
      };
      reader.readAsDataURL(file);
    }
  }, [onChange]);

  return {
    inputType,
    imageUrl,
    setInputType,
    handleUrlChange,
    handleFileChange
  };
};