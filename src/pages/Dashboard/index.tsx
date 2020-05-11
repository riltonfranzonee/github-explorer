import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

const logo = require('../../assets/logo.svg');

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositótrio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/58868651?s=460&u=cfc57caf3987e37b236285f9dc032cb7a6fd4b0c&v=4"
            alt="Rilton"
          />
          <div>
            <strong>riltonfranzonee/fastfeet-api</strong>
            <p>
              Shipping company full control system - REST API made with Node.js
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/58868651?s=460&u=cfc57caf3987e37b236285f9dc032cb7a6fd4b0c&v=4"
            alt="Rilton"
          />
          <div>
            <strong>riltonfranzonee/fastfeet-api</strong>
            <p>
              Shipping company full control system - REST API made with Node.js
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/58868651?s=460&u=cfc57caf3987e37b236285f9dc032cb7a6fd4b0c&v=4"
            alt="Rilton"
          />
          <div>
            <strong>riltonfranzonee/fastfeet-api</strong>
            <p>
              Shipping company full control system - REST API made with Node.js
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
