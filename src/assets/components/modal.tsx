import React from 'react';
import ReactDOM from 'react-dom';

interface Palestrante {
  img: string;
  name: string;
  sobrenome: string;
  resume: string;
  about: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  palestrante: Palestrante;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, palestrante }) => {
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

        <div className='flex flex-col lg:flex-row max-lg:h-[80vh] max-lg:overflow-auto bg-[#2e2f32] rounded-xl'>
          <div className='flex-1 mb-4 lg:mb-0 lg:mr-4 bg-[#0fff94] max-lg:rounded-xl lg:rounded-l-xl'>
            <img 
              src={palestrante.img}
              alt={`imagem da apresentadora ${palestrante.name} ${palestrante.sobrenome}`}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          <div className='flex-1 p-5'>
            <h3 className='text-2xl font-franieSemiBold text-[#0fff94] '>
              {palestrante.name} {palestrante.sobrenome}
            </h3>

            <p 
              className='mt-2 text-base font-franieLight' 
              dangerouslySetInnerHTML={{ __html: palestrante.about }} 
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
