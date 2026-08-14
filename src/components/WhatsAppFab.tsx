import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFab() {
  const phone = '27792758821';
  const message = encodeURIComponent(
    "Hi Ekasi Noble Properties, I'd like to find out more about your properties and investment opportunities.",
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.6)] hover:bg-[#1ebe57] transition-colors"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-60" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slower opacity-40" />
      <FaWhatsapp className="relative h-7 w-7" />
    </a>
  );
}
