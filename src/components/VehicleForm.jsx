import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import ImageInput from './ImageInput';
import { FaCar, FaTag, FaPalette, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

const FUEL_TYPES = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];

const initialFormState = {
  vehicleName: '',
  model: '',
  year: new Date().getFullYear(),
  color: '',
  price: '',
  status: 'Available',
  image: '',
  mileage: '',
  fuelType: 'Gasoline'
};

const VehicleForm = ({ vehicle, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(vehicle || initialFormState);
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    setFormData(vehicle || initialFormState);
    setErrors({});
    setPreviewImage(vehicle?.image || null);
  }, [vehicle]);

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['vehicleName', 'model', 'year', 'color', 'price'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submissionData = {
        ...formData,
        price: Number(formData.price),
        year: Number(formData.year),
        mileage: formData.mileage ? Number(formData.mileage) : 0
      };
      onSubmit(submissionData);
      toast.success(vehicle ? 'Vehicle updated successfully!' : 'Vehicle added successfully!');
      setFormData(initialFormState);
      setPreviewImage(null);
    } else {
      toast.error('Please check all required fields');
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const inputClassName = (field) => `
    w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500
    transition-all duration-200
    ${errors[field] ? 'border-red-500 bg-red-50' : 'border-gray-300'}
  `;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
      <div className="md:col-span-2 mb-6">
        <label className="block text-gray-700 font-medium mb-2">Vehicle Image</label>
        <ImageInput
          value={formData.image}
          onChange={(value) => {
            handleChange('image', value);
            setPreviewImage(value);
          }}
          previewImage={previewImage}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Vehicle Name *
          </label>
          <input
            type="text"
            value={formData.vehicleName}
            onChange={(e) => handleChange('vehicleName', e.target.value)}
            className={inputClassName('vehicleName')}
            placeholder="e.g., Toyota Camry XSE"
          />
          {errors.vehicleName && <p className="text-red-500 text-sm mt-1">{errors.vehicleName}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Model *
          </label>
          <input
            type="text"
            value={formData.model}
            onChange={(e) => handleChange('model', e.target.value)}
            className={inputClassName('model')}
            placeholder="e.g., Camry"
          />
          {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Year *
          </label>
          <input
            type="number"
            value={formData.year}
            onChange={(e) => handleChange('year', e.target.value)}
            className={inputClassName('year')}
            min="1900"
            max={new Date().getFullYear() + 1}
          />
          {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Color *
          </label>
          <input
            type="text"
            value={formData.color}
            onChange={(e) => handleChange('color', e.target.value)}
            className={inputClassName('color')}
            placeholder="e.g., Silver"
          />
          {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Price *
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => handleChange('price', e.target.value)}
            className={inputClassName('price')}
            min="0"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => handleChange('status', e.target.value)}
            className={inputClassName('status')}
          >
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Mileage
          </label>
          <input
            type="number"
            value={formData.mileage}
            onChange={(e) => handleChange('mileage', e.target.value)}
            className={inputClassName('mileage')}
            min="0"
            placeholder="e.g., 50000"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Fuel Type
          </label>
          <select
            value={formData.fuelType}
            onChange={(e) => handleChange('fuelType', e.target.value)}
            className={inputClassName('fuelType')}
          >
            {FUEL_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transform transition-all duration-200 hover:scale-105"
        >
          {vehicle ? 'Update Vehicle' : 'Add Vehicle'}
        </button>
      </div>
    </form>
  );
};

export default VehicleForm;
