const formatCLP = (value) => Number(value).toLocaleString('es-CL')

const CardPizza = ({ name, price, ingredients = [], img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <p className="text-muted mb-1">Ingredientes:</p>
        <ul className="small mb-3">
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <div className="mt-auto">
          <h4 className="fw-bold mb-3">${formatCLP(price)}</h4>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Ver más</button>
            <button className="btn btn-success">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza