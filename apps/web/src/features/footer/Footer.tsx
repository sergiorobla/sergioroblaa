import { FacebookIcon, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-center text-gray-700 gap-5">
      <p>sergiorobla©{new Date().getFullYear()}</p>
      <p className="w-72">Página oficial Galeria DanielaQuintero©</p>
      <p>All Rights Reserved</p>
      <p className="flex flex-row gap-3 cursor-pointer">
        <Instagram /> <Twitter /> <FacebookIcon />
      </p>
    </div>
  );
}
