import { useEffect, useState } from 'react';

// Constantes para evitar strings mágicas
const STICKY_CLASS = 'fixed';
const HIDDING_CLASS = 'hidden';

export default function BackToTop() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpeza do event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      id='backTop' 
      className={`left-[27px] bottom-20 z-40 ${isSticky ? STICKY_CLASS : HIDDING_CLASS}`}
    >
      <button
        className='flex justify-center items-center rounded-full py-2 px-2 bg-[#4038dc] shadow-[0px_0px_5px_#0fff94]'
        onClick={handleBackToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" className='text-white' strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </div>
  );
}
