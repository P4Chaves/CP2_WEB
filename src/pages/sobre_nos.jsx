import { Link } from 'react-router-dom';
import miguelImage from './images/miguel.jpg';
import matheusFariasImage from './images/matheus_farias.jpg';
import vitorPinheiroImage from './images/vitor_pinheiro.jpg';
import pedroChavesImage from './images/p4.jpg';

const SobreNos = () => {
  const members = [
    { name: "Miguel Parrado", image: miguelImage },
    { name: "Matheus Farias", image: matheusFariasImage },
    { name: "Vitor Pinheiro", image: vitorPinheiroImage },
    { name: "Pedro Chaves", image: pedroChavesImage }
  ];

  return (
    <>
      <div className="custom-landing">
        <div className="custom-landing-img"></div>
        <div className="intro-text">
          <h1>Sobre nós</h1>
        </div>
      </div>
      <div className="custom-portfolio mb-12 " id="custom-portfolio" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '9%', paddingRight: '9%' }}>
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary-color mb-4">QUEM NÓS SOMOS?</h2>
            <p className="text-lg text-gray-700 mb-8">Nosso grupo é composto por 4 pessoas, todas elas cursando Engenharia de Software na FIAP.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div key={index}>
                <div className="custom-card shadow-lg rounded-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-main-color mb-10">{member.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}

export default SobreNos;

