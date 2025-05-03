import React from 'react';

interface ContactInfoProps {
  onClick?: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center font-semibold bg-white text-[#1850A0] border px-4 py-2 text-sm space-y-1">
      <a href="tel:02132313030" onClick={onClick} className="hover:underline">
        Phone: (021) 32313030
      </a>
      <a href="mailto:info@transtrade.pk" onClick={onClick} className="hover:underline">
        Email: info@transtrade.pk
      </a>
    </div>
  );
};

export default ContactInfo;
