import React from 'react';

interface ContactInfoProps {
  onClick?: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center font-medium bg-white text-[#ED2228] border border-gray-200 rounded-lg px-6 py-4 text-sm space-y-2 shadow-sm hover:shadow-md transition-all duration-300">
      <a 
        href="tel:02132313030" 
        onClick={onClick} 
        className="flex items-center gap-2 hover:text-[#c01f2e] transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        (021) 32313030
      </a>
      <a 
        href="mailto:info@transtrade.pk" 
        onClick={onClick} 
        className="flex items-center gap-2 hover:text-[#c01f2e] transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        info@transtrade.pk
      </a>
    </div>
  );
};

export default ContactInfo;
