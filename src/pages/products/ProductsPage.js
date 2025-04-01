import React, {useState} from 'react';
import {
  FaBars,
  FaCog,
  FaPercentage,
  FaBell,
  FaUserCircle,
  FaPlus,
  FaSyncAlt,
  FaBan,
  FaTrashAlt,
} from 'react-icons/fa';
import { SiAsana, SiGithub, SiFresh, SiLinkedin } from 'react-icons/si';
import Modal from '../../shared/components/Modal';
import NewProductForm from './components/NewProductForm';

function ProductsPage() {
  const [form, setForm] = useState({})
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      

      <div className="container mx-auto p-6">
        {/* Organization Info */}
        <div className="mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="inline-flex items-center bg-green-200 text-green-700 rounded-full px-2 py-1">
              status: <span className="font-semibold ml-1">active</span>
            </span>
            <span>currency: <span className="font-semibold">USD</span></span>
            <span>timezone: <span className="font-semibold">America - New York</span></span>
            <span>plan: <span className="font-semibold">Team of 10 (Premium) monthly</span></span>
          </div>
        </div>

        {/* Integrations Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            4 active integrations for this organization
          </h2>
          <button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <FaPlus className="inline-block mr-2" /> Adiciona Produto
          </button>
        </div>

        {/* Integrations Table */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last sync
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Asana Integration */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <SiAsana className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-900">Asana</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">Asana</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">08.12.2015</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                    <FaSyncAlt />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700 focus:outline-none mr-2">
                    <FaBan />
                  </button>
                  <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>

              {/* Github Integration */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <SiGithub className="h-5 w-5 text-gray-800 mr-2" />
                    <span className="text-sm text-gray-900">Github</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">Github</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">12.04.1863</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                    <FaSyncAlt />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700 focus:outline-none mr-2">
                    <FaBan />
                  </button>
                  <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>

              {/* Freshdesk Integration */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <SiFresh className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-900">Freshdesk</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">Freshdesk</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">04.02.2013</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                    <FaSyncAlt />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700 focus:outline-none mr-2">
                    <FaBan />
                  </button>
                  <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>

              {/* Insightly Integration */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <SiLinkedin className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm text-gray-900">Insightly</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">Insightly</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">24.08.2014</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                    <FaSyncAlt />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700 focus:outline-none mr-2">
                    <FaBan />
                  </button>
                  <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal isOpen={open} onClose={() => setOpen(false)} onSubmit={() => console.log(form)} >
        <NewProductForm currentData={form} setDataForm={setForm} />
        </Modal>
      </div>
    </div>
  );
}

export default ProductsPage;