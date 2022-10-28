import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">
          Lines
        </h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">
                    depart
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    arrive
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    duration
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    places left
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    price
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 font-semibold">
                      Oujda
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center font-semibold">
                    Casablanca
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    2h 30m
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">
                    5
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">
                    100 MAD
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
