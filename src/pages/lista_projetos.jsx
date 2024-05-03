const ListaProjetos = () => {
  const projetos = [
    {
      titulo: "Projeto Airbnb - Checkpoint 2: Media Query",
      descrição: "Este projeto consiste na criação de uma página HTML e CSS responsiva de um imóvel apresentado no site Airbnb. A página deve ser construída utilizando media query, flexbox e grid layout, seguindo as diretrizes do Checkpoint 2."
    },
    {
      titulo: "Projeto Airbnb - JavaScript 1º Checkpoint",
      descrição: "Este projeto é uma tentativa de replicar alguns dos elementos dinâmicos do Airbnb usando JavaScript."
    },
    {
      titulo: "Projeto de IoT com Arduino e Node-RED",
      descrição: "O projeto visa criar uma solução de IoT utilizando o Arduino para a leitura de dados de sensores (ultrassônico, DHT11 e LDR) e o NODE-RED para a visualização desses dados em dashboards interativos. Os sensores são responsáveis por coletar informações ambientais, como distância, temperatura, umidade e luminosidade, e transmiti-las para o NODE-RED por meio da comunicação serial."
    }
  ];

  return (
    <>
      <div className="landing_projetos">
        <div className="intro-text">
          <h1>Lista de projetos</h1>
        </div>
      </div>

      <div className="services bg-gray-100 py-20" id="services" style={{ padding: '0 9%' }}>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-main-color mb-8">Lista de Projetos</h1>
          <ul className="grid gap-8">
            {projetos.map((projeto, index) => (
              <li key={index}>
                <a href="#" className="block">
                  <div className="project bg-white rounded-lg shadow-md p-6 transition duration-300 hover:bg-main-color hover:text-white hover:bg-blue-500">
                    <h2 className="text-lg font-semibold text-secondary-color mb-4">{projeto.titulo}</h2>
                    <p className="text-sm text-secondary-color">{projeto.descrição}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </>
  );
}

export default ListaProjetos;
