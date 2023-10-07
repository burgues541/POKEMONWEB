export default async function Region() {
  const response = await fetch('https://pokeapi.co/api/v2/region/');
  const data = await response.json();

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Todos os pokémons</h1>
      <div className="row">
        {data.results.map((region, index) => (
          <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center">
            {region.name}
          </div>
        ))}
      </div>
    </div>
  );
}
