import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {
  FaPlus,
  FaSyncAlt,
  FaBan,
  FaTrashAlt,
} from 'react-icons/fa';
import * as reactIcons from 'react-icons/fa'
import { SiAsana, SiGithub, SiFresh, SiLinkedin } from 'react-icons/si';
import PageTransition from '../../shared/components/PageTransition';
import NewCategoriaForm from './components/NewCategoryForm';
import Modal from '../../shared/components/Modal';
import apiServices from '../../api/api-services';
import { FaPencil } from 'react-icons/fa6';

function CategoriasPage() {

  const [form, setForm] = useState({nome: '', descricao: '', icon: ''})
    const [open, setOpen] = useState(false)

    const [categorias, setCategorias] = useState([])


    const carregaCategorias = async() => {
      const categoriasResponse = await apiServices.categoria.getCategorias();
      setCategorias(categoriasResponse);
    }

    
    
    useEffect(() => {
      carregaCategorias();
    }, [])
    
    const handleSubmit = async () => {
      
      console.log(form)
      await apiServices.categoria.createCategoria(form);
      await carregaCategorias();
    }


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
                      <FaPlus className="inline-block mr-2" /> Adiciona Categoria
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
                  Nome
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Descricao
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Icone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ativo
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categorias?.map(c => { 
                const Icon = c?.icon != null ? reactIcons[c.icon] : "FaPlus"
                return(
              <tr key={c.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-900">{c.nome}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{c.descricao}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{c.icon}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                    <reactIcons.FaPencilAlt />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700 focus:outline-none mr-2">
                    <FaBan />
                  </button>
                  <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
              )})}

              
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} >
        <NewCategoriaForm currentData={form} setDataForm={(form) => {setForm(form);}} />
        </Modal>
    </div>
  );
}

export default CategoriasPage;