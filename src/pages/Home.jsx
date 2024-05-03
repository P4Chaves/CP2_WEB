import Footer from "../Componentes/Footer";
import NavBar from "../Componentes/NavBar";
import { Link } from 'react-router-dom';
import logoSobSolution from './images/logo_sob_solution.png';

function Home() {
  return (
    <>
      <div className="landing">
        <div className="intro-text">
          <h1>Sob Solution</h1>
          <p>Tudo sob controle</p>
          <p>Tudo sob solution</p>
        </div>
      </div>

      <div className="features py-16 bg-section-background flex justify-center items-center mb-12" style={{ padding: '0 9%' }}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="feat flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <i className="fas fa-magic fa-3x text-main-color mb-4"></i>
            <h3 className="font-semibold text-xl mb-2">Bem-vindo(a) a Sob Solution!</h3>
            <p className="text-gray-700 text-center">Olá, nós somos a Sob Solution, uma equipe de 4 integrantes motivados a melhorar o mundo com a tecnologia ao nosso redor. Trabalhando para ser a solução para a sua empresa!</p>
          </div>
          <div className="feat flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <i className="far fa-gem fa-3x text-main-color mb-4"></i>
            <h3 className="font-semibold text-xl mb-2">Para saber quem somos!</h3>
            <Link to="/sobre_nos" className="text-main-color underline hover:no-underline">Clique Aqui!</Link>
          </div>
          <div className="feat flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <i className="fas fa-globe-asia fa-3x text-main-color mb-4"></i>
            <h3 className="font-semibold text-xl mb-2">Para entrar em contato!</h3>
            <a href="#contato" className="text-main-color underline hover:no-underline">Clique aqui!</a>
          </div>
        </div>
      </div>


      <div className="about py-16 bg-section-background flex justify-center items-center bg-gray-100" style={{ padding: '0 9%' }}>
        <div className="container px-4 mb-12">
          <h2 className="special-heading text-4xl text-center mb-8">Bem-vindo(a)!</h2>
          <p className="text-2xl text-center text-gray-700 mb-8">Somos a Sob Solution</p>
          <div className="about-content flex flex-wrap justify-center items-start">
            <div className="image relative w-full md:w-1/3">
              <img src={logoSobSolution} alt="" className="w-full rounded-lg shadow-md" style={{ maxWidth: '300px' }} />
            </div>
            <div className="text w-full md:w-2/3 md:pl-8">
              <p className="font-semibold leading-8 mb-6 text-gray-700">Olá! Somos Matheus Farias, Miguel Parrado, Pedro Henrique e Vitor Pinheiro, alunos entusiastas do primeiro ano de Engenharia de Software. Movidos pela paixão pela tecnologia e pela busca incessante por conhecimento, estamos embarcando nesta jornada acadêmica com entusiasmo e determinação.</p>
              <hr className="border-t-2 border-main-color w-1/2 mb-6 mx-auto" />
              <p className="leading-8 text-gray-700">Com perfis diversos e uma sede comum por desafios, estamos ansiosos para explorar os intricados caminhos da Engenharia de Software. Juntos, aspiramos não apenas absorver os fundamentos teóricos, mas também aplicar habilidades práticas na resolução de problemas do mundo real. Como futuros engenheiros de software, estamos comprometidos em contribuir para um mundo digital mais inovador, eficiente e inclusivo. Estamos prontos para enfrentar os desafios, aprender e crescer juntos nesta jornada emocionante!</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
