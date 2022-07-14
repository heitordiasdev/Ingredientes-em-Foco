import React from "react";

const ListFoods = ({ foods }) => {
  console.log('Component', foods)
  return (
    <div >
      <div>Menu lateral</div>
      <div>
        <h1> Lista de alimentos </h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              foods.data? 
                  foods.data.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                      </tr>
                  )
                  ):
                  <tr>
                    <td>{foods.message}</td>
                  </tr>
            }
          </tbody>
        </table>
      </div>
  </div>
  );
};

export default ListFoods;