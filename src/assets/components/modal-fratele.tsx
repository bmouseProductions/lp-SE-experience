import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TABLE_HEAD = ["Quarto Standard ", "Tarifa com desconto "];
 
const TABLE_ROWS = [
  {
    quarto: "Hospedagem quarto Single",
    desconto: "R$ 240,00 +5% de taxas",
  },
  {
    quarto: "Hospedagem quarto Duplo",
    desconto: "R$ 330,00 +5% de taxas",
  },
  {
    quarto: "Hospedagem quarto triplo",
    desconto: "R$ 420,00 +5% de taxas",
  },
];

const ModalFratele: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed z-[100000] inset-0 bg-black/60 px-5 flex items-center justify-center transition-all">
      <div className=" w-full md:w-[80%]  rounded-lg">
        
        <div className="mb-5 flex justify-end">
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path className="text-red-600" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className='flex flex-col items-start md:items-center gap-5 h-[80vh] p-5 overflow-y-auto overflow-x-hidden bg-[#2e2f32] rounded-xl'>
          <div className='w-full !min-h-[300px] md:min-h-[none] overflow-x-auto'>
            <table className="w-full min-w-max max-w-[700px] mx-auto table-auto text-left border-2 border-white rounded">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <p className="font-normal leading-none opacity-70">
                        {head}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TABLE_ROWS.map(({ quarto, desconto }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                  
                  return (
                    <tr key={quarto}>
                      <td className={classes}>
                        <p className="font-normal">{quarto}</p>
                      </td>
                      <td className={classes}>
                        <p className="font-normal">{desconto}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className='flex flex-col gap-5'>
            <span>Descrição dos quartos:</span>

            <div className='flex flex-col md:flex-row md:gap-10'>
              <ul className='list-disc space-y-1 pl-4'>
                <li>Ar-condicionado</li>
                <li>Acesso à Internet wireless de alta velocidade</li>
                <li>TV LED de 32”</li>
                <li>TV a cabo</li>
                <li>Frigobar</li>
                <li>Telefone</li>
              </ul>

              <ul className='list-disc space-y-1'>
                <li>Cofre</li>
                <li>Secador de cabelo</li>
                <li>Roupeiro</li>
                <li>Maleiro</li>
                <li>Travesseiros e edredons antialérgicos</li>
                <li>Opção para cama king ou twinsize</li>
              </ul>
            </div>

            <span>Observações</span>

            <ul className='list-disc space-y-1 pl-4'>
              <li>Horário de check-in: 14h</li>
              <li>Horário de check-out: 12h</li>
              <li>Café da manhã incluído na tarifa.</li>
              <li>Estacionamento incluído na tarifa.</li>
              <li>Política de cancelamento: O cancelamento deverá ser feito até 24 horas antes do check-in.</li>
            </ul>

            <span>
              Em caso de não comparecimento (No Show), o hotel cobrará a quantia relativa a uma noite.
              Todo cancelamento deverá ser efetuado por Email.
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalFratele;
