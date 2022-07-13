
const ListFoods = ({ foods }) => {
  return (
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
            foods? (
                foods.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                    <td></td>
                    </tr>
                )
            )): (<p>Carregando...</p>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListFoods;