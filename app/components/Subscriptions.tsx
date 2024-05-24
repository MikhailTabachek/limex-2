const Subscriptions = () => {
  return (
    <div className="subscriptions mb-6 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Subscriptions</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
          <h4 className="font-medium">TradingView</h4>
          <p className="text-sm text-gray-500">Name product</p>
          <p className="text-lg font-bold">$100</p>
        </div>
        {/* Add more subscription items here */}
      </div>
    </div>
  );
};

export default Subscriptions;
