const Watchlist = () => {
  return (
    <div className="watchlist mb-6 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Your Watchlist</h3>
      <div className="overflow-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Stock</th>
              <th className="py-2 px-4 bg-gray-200">Price</th>
              <th className="py-2 px-4 bg-gray-200">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Apple</td>
              <td className="py-2 px-4">$148.96</td>
              <td className="py-2 px-4 text-red-500">-3.41%</td>
            </tr>
            {/* Add more watchlist items here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
