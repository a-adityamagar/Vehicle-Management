const ImagePreview = ({ src }) => {
  if (!src) return null;
  
  return (
    <div className="mt-2">
      <img
        src={src}
        alt="Preview"
        className="w-full h-32 object-cover rounded"
      />
    </div>
  );
};

export default ImagePreview;