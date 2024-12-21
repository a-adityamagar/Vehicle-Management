const Header = ({ showForm, setShowForm, setEditingVehicle }) => {
  const handleAddClick = () => {
    setEditingVehicle(null);
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Vehicle Management System
      </h1>
      <button
        onClick={handleAddClick}
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
      >
        {showForm ? 'Cancel' : 'Add New Vehicle'}
      </button>
    </div>
  );
};

export default Header;