
export default async function Home() {
  
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let users = await res.json();
  console.log(users);
  
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-2 m-5">
        {users.map((prod) => (
          <div className="col" key={prod.id}>
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.email}</p>
                <p className="card-text">{prod.phone}</p>
                <button className="btn btn-danger">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </>
  );
}