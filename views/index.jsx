const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
  const getBakedBy = (baker) => {
    console.log(baker);
    return `Baked by ${baker}`;
  };
    return (
      <Default title={title}>
      <h2>Index Page</h2>
      <ul>
        {breads.map((bread, id) => (
          <li key={id}>
            <a href={`/breads/${bread.id}`}>{bread.name}</a>
            <ul>
              <li>{getBakedBy(bread.baker)}</li>
            </ul>
          </li>
        ))}
      </ul>
      <div className="newButton">
        <a href="/breads/new">
          <button>Add a new bread</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Index
