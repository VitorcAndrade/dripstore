import { Link } from "react-router";
import Logo from "../components/Logo.jsx";

import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

function Footer() {
  const footerlink = [
    {
      titulo: "Informações",
      links: [
        { nome: "Sobre Drip Store", link: "/Sobre" },
        { nome: "Segurança", link: "/Segurança" },
        { nome: "Wishlist", link: "/Wishlist" },
        { nome: "Blog", link: "/Blog" },
        { nome: "Trabalhe Conosco", link: "/Trabalhe-Conosco" },
        { nome: "Meus Pedidos", link: "/Meus-Pedidos" },
      ],
    },
    {
      titulo: "Categorias",
      links: [
        { nome: "Camiseta", link: "/Categoria/Camiseta" },
        { nome: "Calças", link: "/Categoria/Calças" },
        { nome: "Bonés", link: "/Categoria/Bonés" },
        { nome: "HeadPhone", link: "/Categoria/HeadPhone" },
        { nome: "Tênis", link: "/Categoria/Tênis" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1f1f1f] text-white w-full px-25 pt-18 pb-5.5">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div>
            <Logo />
            <p className="text-sm mb-4 w-75 leading-6.5 py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="flex gap-5.5 text-2xl ">
              <FaFacebook />
              <FaInstagram />
              <FaTwitch />
            </div>
          </div>
          <div className="flex justify-between gap-35">
            {footerlink.map((coluna, index) => (
              <div key={index}>
                <h3 className="font-bold mb-5">{coluna.titulo}</h3>

                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                  {coluna.links.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        {item.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-[250px] ">
              <h3 className="font-bold mb-5">Contato</h3>
              <p className="text-sm text-gray-300 mb-5">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161</p>
              <p className=" text-sm text-gray-300"> (85) 3051-3411</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-8" />
      <p className="text-center text-xs text-gray-300">@ 2022 Digital College</p>
    </footer>
  );
}

export default Footer;