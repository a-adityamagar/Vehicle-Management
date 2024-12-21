import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const useVehicles = (initialVehicles) => {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [editingVehicle, setEditingVehicle] = useState(null);

  const handleAddVehicle = (newVehicle) => {
    const vehicle = {
      ...newVehicle,
      id: vehicles.length + 1,
    };
    setVehicles([...vehicles, vehicle]);
    toast.success('Vehicle added successfully!');
  };

  const handleEditVehicle = (vehicle) => {
    setEditingVehicle(vehicle);
  };

  const handleUpdateVehicle = (updatedVehicle) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
      )
    );
    setEditingVehicle(null);
    toast.success('Vehicle updated successfully!');
  };

  const handleDeleteVehicle = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
      toast.success('Vehicle deleted successfully!');
    }
  };

  return {
    vehicles,
    editingVehicle,
    handleAddVehicle,
    handleEditVehicle,
    handleUpdateVehicle,
    handleDeleteVehicle
  };
};