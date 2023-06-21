function App() {
  const url =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';
  return (
    <div>
      <img width={100} src={url} />
      <h1>React</h1>
      <p> A biblioteca para interfaces de usuário web e nativas.</p>
      <button id="learnReact">Aprenda React</button>{' '}
      <button id="refAPI">Referência da API</button>
      <hr></hr>
      <h2>Crie interfaces de usuário de componentes</h2>
      <p>
        {' '}
        React permite que você construa interfaces de usuário a partir de
        pedaços individuais chamados componentes.{' '}
      </p>
      <hr></hr>
      <h2>Escreva componentes com código e marcação</h2>
      <p>
        {' '}
        Componentes React são funções JavaScript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo
        React.
      </p>
      <hr></hr>
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  );
}
export default App;
