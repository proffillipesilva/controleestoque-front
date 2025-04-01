import React, { useState } from 'react';

function NewProductForm({currentData, setDataForm}) {

  const categories = ['Eletrônicos', 'Vestuário', 'Alimentos', 'Livros', 'Outros'];
  const suppliers = ['Fornecedor A', 'Fornecedor B', 'Fornecedor C', 'Fornecedor D'];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDataForm({...currentData, image: URL.createObjectURL(file)})
    }
  };

 

  return (
    <div className="bg-gray-100 h-3/4 p-6">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">NOVO PRODUTO</h2>
        <form  className="space-y-4">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name='nome'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={currentData?.name}
              onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
            />
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name='descricao'
              value={currentData?.description}
              onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
              rows="3"
            ></textarea>
          </div>

          {/* Categoria */}
          <div>
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Categoria
            </label>
            <div className="relative">
              <select
                id="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                value={currentData?.category}
                name='categoria'
                onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
              >
                <option value="" disabled>
                  Selecione a Categoria
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Fornecedor */}
          <div>
            <label htmlFor="supplier" className="block text-gray-700 text-sm font-bold mb-2">
              Fornecedor
            </label>
            <div className="relative">
              <select
                id="supplier"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                value={currentData?.supplier}
                name='fornecedor'
                onChange={(e) => setDataForm({...currentData, [e.target.name]: e.target.value })}
              >
                <option value="" disabled>
                  Selecione o Fornecedor
                </option>
                {suppliers.map((sup) => (
                  <option key={sup} value={sup}>
                    {sup}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div>
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Imagem
            </label>
            <div className="relative border rounded-md p-4 bg-gray-50">
              <input
                type="file"
                id="image"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
                accept="image/*"
              />
              <div className="text-center">
                {currentData?.image ? (
                  <img src={currentData?.image} alt="Prévia da Imagem" className="max-h-40 mx-auto rounded-md" />
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 005.656 0L28 24m0 0l4 4m-24-4l4 4m-4-4l-3.172-3.172a4 4 0 00-5.656 0L12 28m16-8l-4-4m0 0l-4-4"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm text-gray-500">
                      Arraste e solte uma imagem aqui ou clique para selecionar
                    </p>
                  </>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Formatos aceitos: JPG, PNG, GIF.</p>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default NewProductForm;