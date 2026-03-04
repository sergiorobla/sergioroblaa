import fotoPerfil from "../assets/foto_perfil.jpg";

export default function ImgCv() {
  return (
    <>
      <img
        className="w-50 h-50 rounded-full object-cover"
        src={fotoPerfil}
        alt="Foto de perfil"
      />
    </>
  );
}
