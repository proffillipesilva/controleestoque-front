import React, { useState } from 'react';

const NewFornecedorForm = ({currentData, setDataForm}) => {
    
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    cnpj: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    },
    telefone: '',
    email: '',
  });

;

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to your backend API
    console.log('Dados do Fornecedor a serem enviados:', fornecedor);
    // Reset the form after submission (optional)
    setFornecedor({
      nome: '',
      cnpj: '',
      endereco: {
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
      },
      telefone: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.nome">
          Nome
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.nome"
          type="text"
          placeholder="Nome do Fornecedor"
          name="nome"
          value={currentData?.nome}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.cnpj">
          CNPJ
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.cnpj"
          type="text"
          placeholder="CNPJ do Fornecedor"
          name="cnpj"
          value={currentData?.cnpj}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.endereco.rua">
          Rua
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.endereco.rua"
          type="text"
          placeholder="Rua"
          name="endereco.rua"
          value={currentData?.endereco?.rua}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.endereco.numero">
          Número
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.endereco.numero"
          type="text"
          placeholder="Número"
          name="endereco.numero"
          value={currentData?.endereco?.numero}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.endereco.bairro">
          Bairro
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.endereco.bairro"
          type="text"
          placeholder="Bairro"
          name="endereco.bairro"
          value={currentData?.endereco?.bairro}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.endereco.cidade">
          Cidade
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.endereco.cidade"
          type="text"
          placeholder="Cidade"
          name="endereco.cidade"
          value={currentData?.endereco?.cidade}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.endereco.estado">
          Estado
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.endereco.estado"
          type="text"
          placeholder="Estado"
          name="endereco.estado"
          value={currentData?.endereco?.estado}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.endereco.cep">
          CEP
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.endereco.cep"
          type="text"
          placeholder="CEP"
          name="endereco.cep"
          value={currentData?.endereco?.cep}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.telefone">
          Telefone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.telefone"
          type="text"
          placeholder="Telefone"
          name="telefone"
          value={currentData?.telefone}
          onChange={setDataForm}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor.email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fornecedor.email"
          type="email"
          placeholder="Email"
          name="email"
          value={currentData?.email}
          onChange={setDataForm}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Criar Fornecedor
        </button>
      </div>
    </form>
  );
};

export default NewFornecedorForm;