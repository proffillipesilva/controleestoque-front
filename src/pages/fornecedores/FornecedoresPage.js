import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../shared/components/Modal';
import NewFornecedorForm from './components/NewFornecedorForm';
import apiServices from '../../api/api-services';
import { FaPlus } from 'react-icons/fa';
// Use a basic div-based tooltip implementation for broader compatibility
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


const FornecedoresPage = () => {
  const [form, setForm] = useState({nome: '', descricao: '', icon: ''})
  const [open, setOpen] = useState(false)
  const [fornecedores, setFornecedores] = useState([
    {
      nome: 'John Doe',
      cnpj: '12.345.678/0001-90',
      endereco: {
        rua: 'Main St',
        numero: '123',
        bairro: 'Downtown',
        cidade: 'Anytown',
        estado: 'CA',
        cep: '90210',
      },
      telefone: '(555) 123-4567',
      email: 'john.doe@example.com',
    },
    {
      nome: 'Jane Smith',
      cnpj: '98.765.432/0001-09',
      endereco: {
        rua: 'Oak Ave',
        numero: '456',
        bairro: 'Uptown',
        cidade: 'Someville',
        estado: 'NY',
        cep: '10001',
      },
      telefone: '(555) 987-6543',
      email: 'jane.smith@example.com',
    },
      {
      nome: 'Acme Corp',
      cnpj: '11.222.333/0001-44',
      endereco: {
        rua: 'Pine Lane',
        numero: '789',
        bairro: 'Suburbia',
        cidade: 'Smallville',
        estado: 'TX',
        cep: '75000',
      },
      telefone: '(555) 555-1212',
      email: 'info@acmecorp.com',
    },
    {
      nome: 'Beta Co',
      cnpj: '44.555.666/0001-77',
      endereco: {
        rua: 'Elm Street',
        numero: '101',
        bairro: 'Midtown',
        cidade: 'BigCity',
        estado: 'IL',
        cep: '60601',
      },
      telefone: '(555) 777-8899',
      email: 'sales@betaco.com',
    },
    {
      nome: 'Gamma Inc',
      cnpj: '77.888.999/0001-01',
      endereco: {
        rua: 'Broadway',
        numero: '222',
        bairro: 'Downtown',
        cidade: 'NewYork',
        estado: 'NY',
        cep: '10007',
      },
      telefone: '(555) 222-3344',
      email: 'contact@gamma.com',
    }
  ]);

  const carregaFornecedores = async() => {
    const fornecedoresResponse = await apiServices.fornecedor.getFornecedores()
    setFornecedores(fornecedoresResponse);
  }

  const handleSubmit = async () => {
      
    console.log(form)
    await apiServices.fornecedor.createFornecedor(form);
    await carregaFornecedores();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith('endereco.')) {
      const enderecoField = name.split('.')[1];
      setForm((prevFornecedor) => ({
        ...prevFornecedor,
        endereco: {
          ...prevFornecedor.endereco,
          [enderecoField]: value,
        },
      }));
    } else {
        setForm((prevFornecedor) => ({
        ...prevFornecedor,
        [name]: value,
      }));
    }
  };


  
  
  useEffect(() => {
    carregaFornecedores();
  }, [])

    const [tooltipContent, setTooltipContent] = useState("");
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const tooltipTimeoutRef = useRef(null);
    const tooltipRef = useRef(null); // Ref for the tooltip


    const showTooltip = (event, fornecedor) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            x: rect.right + window.scrollX + 5,  // Position to the right of the cell
            y: rect.top + window.scrollY + rect.height / 2 - 12, // Vertically centered
        });
        setTooltipContent(
        `CNPJ: ${fornecedor?.cnpj}
        Endereço: ${fornecedor?.endereco?.rua}, ${fornecedor?.endereco?.numero}, ${fornecedor?.endereco?.bairro}, ${fornecedor?.endereco?.cidade} - ${fornecedor?.endereco?.estado}, ${fornecedor?.endereco?.cep}
        Telefone: ${fornecedor?.telefone}
        Email: ${fornecedor?.email}`
        );
        setTooltipOpen(true);
        if (tooltipTimeoutRef.current) {
          clearTimeout(tooltipTimeoutRef.current);
        }
    };

    const hideTooltip = () => {
        tooltipTimeoutRef.current = setTimeout(() => {
            setTooltipOpen(false);
        }, 100); // Short delay to prevent flicker
    };

    useEffect(() => {
      return () => {
        if (tooltipTimeoutRef.current) {
          clearTimeout(tooltipTimeoutRef.current);
        }
      }
    }, []);

    // Function to handle clicking outside the tooltip
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
          setTooltipOpen(false);
        }
      };

      if (tooltipOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [tooltipOpen]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Fornecedores</h1>
      <button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <FaPlus className="inline-block mr-2" /> Adiciona Fornecedor
                          </button>
      <div className="rounded-md border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CNPJ
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cidade
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fornecedores.map((fornecedor) => (
              <tr key={fornecedor.cnpj}>
                <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
                    onMouseEnter={(e) => showTooltip(e, fornecedor)}
                    onMouseLeave={hideTooltip}
                  >
                    {fornecedor.nome}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fornecedor?.cnpj}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fornecedor?.endereco?.cidade}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fornecedor?.endereco?.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <AnimatePresence>
        {tooltipOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-800 text-white rounded-md shadow-lg px-4 py-2 text-sm max-w-[300px] whitespace-pre-line fixed z-50" // Added fixed and z-50
            style={{
              top: tooltipPosition.y,
              left: tooltipPosition.x,
            }}
          >
            {tooltipContent}
          </motion.div>
        )}
      </AnimatePresence>
      <Modal isOpen={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} >
        <NewFornecedorForm currentData={form} setDataForm={handleChange} />
        </Modal>
    </div>
  );
};

export default FornecedoresPage;
