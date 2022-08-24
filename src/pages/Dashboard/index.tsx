import React from "react";
import { Title, Form } from "./styles";
import logo from "../../assets/logo.svg";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de Repositórios do Github</Title>
      <Form>
        <input type="text" placeholder="username/repository" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
};
