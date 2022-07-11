import React from 'react';
import { useState } from 'react';

export default function FormRegister(){
        function cadastrarUsuario(e) {
            e.preventDefault()
            console.log(`Usuario ${name} cadastrado com a senha ${password}`)
          }
        
          const [name, setName] = useState()
          const [password, setPassword] = useState()
        
          return (
            <div>
              <h1>Meu cadastro:</h1>
              <form onSubmit={cadastrarUsuario}>
                <div>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <input type="submit" value="Cadastrar" />
                </div>
              </form>
            </div>
          )   
};
    