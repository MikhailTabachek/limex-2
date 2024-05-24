const Stocks = () => {
  return (
    <div className="stocks mb-6 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Stocks</h3>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
          <div className="flex items-center">
            <div className="bg-red-500 w-8 h-8 rounded-full"></div>
            <div className="ml-4">
              <p className="font-medium">Peachstock</p>
              <p className="text-sm text-gray-500">NYSE - PS</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold">$542.30</p>
            <p className="text-green-500">+3.15%</p>
          </div>
        </div>
        {/* Add more stock items here */}
      </div>
    </div>
  );
};

export default Stocks;
