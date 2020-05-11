import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error } from './styles';

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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepos = localStorage.getItem('@GitHubExplorer: repositories');

    if (storedRepos) {
      return JSON.parse(storedRepos);
    }
    return [];
  });
  const [inputError, setInputError] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer: repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!searchInput) {
      setInputError('Insira o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${searchInput}`);

      setRepositories([...repositories, response.data]);
      setSearchInput('');
      setInputError('');
    } catch (err) {
      setInputError('Repositório não encontrado');
    }
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositótrio"
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
