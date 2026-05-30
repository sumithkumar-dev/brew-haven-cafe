import { MessageCircle } from "lucide-react";
export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white grid place-items-center shadow-xl transition-transform hover:scale-110">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
