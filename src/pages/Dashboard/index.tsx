import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import api from '../../services/api';

const logo = require('../../assets/logo.svg');

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchInput, setSearchInput] = useState('');

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    const response = await api.get<Repository>(`repos/${searchInput}`);

    setRepositories([...repositories, response.data]);
    setSearchInput('');
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositótrio"
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
