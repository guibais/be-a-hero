import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const resp = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", resp.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Login Failed.");
    }
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />I don´t have a register
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
