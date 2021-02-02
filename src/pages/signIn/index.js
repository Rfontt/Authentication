import React, { useState, FormEvent } from 'react';
import styles from './styles.css'
import VetorOndulador from '../imagens/wave_two.svg';
import Api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';

function SignIn() {
  const [ error, setError ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  async function DadosSignIn(FormEvent) {
    FormEvent.preventDefault();

    const datas = { email, password}

    if (email != '' && password != '') {
      try{
        let response = await Api.post("/login", datas);
        history.push('/home');
      }catch(error){
        return setError('Dados incorretos.');
      }
    }else{
      alert("Preencha todos os campos");
    }
  }

  return (
    <div className="container">
      <div className="asideAndImage">
        <h1> {error} </h1>

        <aside className="SignIn_aside" > 
          <form onSubmit = {DadosSignIn}>
              <legend> Olá, amigo! </legend>
              <input placeholder = "Email:" value = {email} onChange = {event => setEmail(event.target.value)} /> 
              <input type="password" placeholder = "Password:" value = {password} onChange = {event=> setPassword(event.target.value)} />

              <span> Esqueceu a senha? </span>
              <button> Sign in </button>
            </form>
          
        </aside>
          <img src = {VetorOndulador} /> 
      </div>

        <div className="signUp">
          <h1> Não tem uma conta? </h1>
          <span> Faça seu cadastro agora! </span>
            
          <Link to="/">
            <button> Sign up </button>
          </Link>
        </div>
    </div>
  );
}

export default SignIn;
