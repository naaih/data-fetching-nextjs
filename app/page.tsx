async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center">
        <h1 className="mb-5 font-bold">Users</h1>
        {data.map((users:  {name: string, email: string, id: string}) => (
          <div className="mb-5" key={users.id}>
            <h1>{users.name}</h1>
            <p>{users.email}</p>
          </div>
        ))}
    </main>
  )
}
