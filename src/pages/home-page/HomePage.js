import React from 'react'

function HomePage() {
  return (
    <div>
        <div className="p-4 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-2">FLUXO</h3>
          <p className="mb-1">ENTRADA</p>
          <p className="mb-1">SAÍDA</p>
        </div>

        <div className="p-4 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-2">NOTIFICAÇÕES</h3>
          {/* Adicione aqui a lógica para exibir notificações */}
          <p className="text-sm text-gray-400">Nenhuma notificação no momento.</p>
        </div>
    </div>
  )
}

export default HomePage