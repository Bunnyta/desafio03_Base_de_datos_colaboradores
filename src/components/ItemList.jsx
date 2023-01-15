const ItemList = ({colab, search}) => { 
    return (
      <div>
          <h2>Listado de Colaboradores</h2>
        <ul>
          {colab.filter((colab) => {
            return search.toLowerCase() === '' 
            ? colab
            : colab.nombre.toLowerCase().includes(search);
          })
          .map((colab) => {
            return <li key={colab.id} className="">{colab.nombre}{colab.correo}</li>;
          })}
        </ul>
      </div>
    );
 };

 export default ItemList