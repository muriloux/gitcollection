import React from "react";
import { Title, Form, Repos } from "./styles";
import logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de Repositórios do Github</Title>
      <Form>
        <input type="text" placeholder="username/repository" />
        <button type="submit">Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/90528537?v=4"
            alt="Repositório"
          />
          <div>
            <strong>muriloux/api-vendas</strong>
            <p>Repositório da API de vendas.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
