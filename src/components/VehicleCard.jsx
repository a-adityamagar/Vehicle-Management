import { FaEdit, FaTrash, FaGasPump, FaCar, FaTachometerAlt, FaTag } from 'react-icons/fa';

const VehicleCard = ({ vehicle, onEdit, onDelete }) => {
  const statusStyles = {
    Available: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    Sold: 'bg-rose-100 text-rose-800 border border-rose-200'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-64 group">
        <img
          src={vehicle.image || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={`${vehicle.vehicleName}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[vehicle.status]}`}>
            {vehicle.status}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{vehicle.vehicleName}</h3>
            <p className="text-sm opacity-90">{vehicle.model}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {vehicle.vehicleName}
            </h3>
            <p className="text-gray-600">{vehicle.model}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-indigo-600">
              ${vehicle.price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <FaCar className="text-indigo-500" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: vehicle.color }} />
            <span className="capitalize">{vehicle.color}</span>
          </div>
          {vehicle.mileage && (
            <div className="flex items-center gap-2">
              <FaTachometerAlt className="text-indigo-500" />
              <span>{vehicle.mileage.toLocaleString()} mi</span>
            </div>
          )}
          {vehicle.fuelType && (
            <div className="flex items-center gap-2">
              <FaGasPump className="text-indigo-500" />
              <span>{vehicle.fuelType}</span>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2 pt-4 border-t">
          <button
            onClick={() => onEdit(vehicle)}
            className="p-2.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
            title="Edit Vehicle"
          >
            <FaEdit size={18} />
            <span className="text-sm">Edit</span>
          </button>
          <button
            onClick={() => onDelete(vehicle.id)}
            className="p-2.5 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
            title="Delete Vehicle"
          >
            <FaTrash size={18} />
            <span className="text-sm">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
