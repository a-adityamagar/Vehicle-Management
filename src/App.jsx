import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { vehicles as initialVehicles } from './data/vehicles';
import VehicleList from './components/VehicleList';
import VehicleForm from './components/VehicleForm';
import Header from './components/Header';
import { useVehicles } from './hooks/useVehicles';

function App() {
  const [showForm, setShowForm] = useState(false);
  const {
    vehicles,
    editingVehicle,
    handleAddVehicle,
    handleEditVehicle,
    handleUpdateVehicle,
    handleDeleteVehicle
  } = useVehicles(initialVehicles);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <div className="max-w-7xl mx-auto space-y-8">
        <Header 
          showForm={showForm}
          setShowForm={setShowForm}
          setEditingVehicle={() => handleEditVehicle(null)}
        />

        {showForm && (
          <div className="transition-all duration-300 ease-in-out">
            <VehicleForm
              vehicle={editingVehicle}
              onSubmit={editingVehicle ? handleUpdateVehicle : handleAddVehicle}
              onCancel={() => {
                setShowForm(false);
                handleEditVehicle(null);
              }}
            />
          </div>
        )}

        <VehicleList
          vehicles={vehicles}
          onEdit={(vehicle) => {
            handleEditVehicle(vehicle);
            setShowForm(true);
          }}
          onDelete={handleDeleteVehicle}
        />
      </div>
    </div>
  );
}

export default App;