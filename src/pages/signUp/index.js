import React, { useState, FormEvent } from 'react';
import styles from './styles.css'
import VetorOndulador from '../imagens/wave.svg';
import Api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';

function SignUp() {
  const [ name, setName ] = useState(''); 
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const history = useHistory();

  async function DadosSignUp(FormEvent) {
    FormEvent.preventDefault();

    const datas = {name, email, password}

    if (name != '' && email != '' && password != '') {
      try{
        let response = await Api.post("/user", datas);
        history.push('/signIn');
      }catch(error){
        return setError("Usuário já existe");
      }
    }else{
      alert("Preencha todos os campos");
    }
  }

  return (
    <div className="container">
      <aside className="SignIn-aside" > 
      	<h1> Vamos continuar? </h1>
      	<span> Se já possui uma conta, faça login e comece. </span>
      	<Link to="/signIn">
          <button> Sign in </button>
        </Link>
      </aside>

      <div className="div-formAndImg">
        <div className="create-account">
        	<form onSubmit = {DadosSignUp}>
            <legend> Criar conta: </legend>
            <input placeholder = "Name:" value = {name} onChange = {event => setName(event.target.value)} />  
        		<input placeholder = "Email:" value = {email} onChange = {event => setEmail(event.target.value)} />	
        		<input type="password" placeholder = "Password:" value = {password} onChange = {event=> setPassword(event.target.value)} />

        		<button> Sign up </button>
        	</form>
           <span> {error} </span>
        </div>

          <img src = {VetorOndulador} /> 
       
      </div>
    </div>
  );
}

export default SignUp;
