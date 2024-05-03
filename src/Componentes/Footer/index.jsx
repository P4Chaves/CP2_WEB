import { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    duvida: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário submetido:');
    console.log('Nome:', formData.nome);
    console.log('Email:', formData.email);
    console.log('Assunto:', formData.assunto);
    console.log('Dúvida:', formData.duvida);

    // Limpar os campos do formulário após o envio
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      duvida: ''
    });
  };

  return (
    <>
      <div className="contact bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center" id="contato">Contato</h2>
          <p className="text-lg text-gray-600 mx-auto text-center">Entre em contato conosco</p>
          <div className="formulario bg-white rounded-lg shadow-md p-8 max-w-md mx-auto mt-8">
            <form name="formularioDuvidas" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">FORMULÁRIO</h3>

              <label htmlFor="nome" className="block text-gray-700">Nome:</label>
              <input type="text" placeholder="Insira seu nome" id="nome" value={formData.nome} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />

              <label htmlFor="email" className="block text-gray-700 mt-4">Email:</label>
              <input type="email" placeholder="Insira seu email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />

              <label htmlFor="assunto" className="block text-gray-700 mt-4">Assunto:</label>
              <input type="text" placeholder="Insira o assunto" id="assunto" value={formData.assunto} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />

              <label htmlFor="duvida" className="block text-gray-700 mt-4">Deixe sua dúvida:</label>
              <input type="text" placeholder="Escreva sua dúvida!" id="duvida" value={formData.duvida} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />

              <button type="submit" className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer_2 bg-gray-800 py-6">
        <div className="container mx-auto flex justify-center items-center">
          <a href="#" className="mr-4"><FaInstagram className="text-white text-2xl" /></a>
          <a href="#" className="mr-4"><FaGithub className="text-white text-2xl" /></a>
          <a href="#" className="mr-4"><FaLinkedin className="text-white text-2xl" /></a>
          <a href="#"><FaYoutube className="text-white text-2xl" /></a>
        </div>
      </div>
      <div className="footer bg-gray-900 text-white py-6 text-center">&copy; 2024 <span className="font-bold">Sob Solution</span> Todos os direitos reservados.</div>
    </>
  );
}

export default Footer;
