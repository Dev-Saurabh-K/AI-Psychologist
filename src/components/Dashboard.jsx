import { Link } from "react-router-dom";

function Dashboard() {
  const items = [
    {
      id: "1",
      name: "saurabh",
    },
    {
        id: "2",
        name: "Kaushik"
    }
  ];

  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/dashboard/${item.id}`}>
            <h1>{item.name}</h1>
          </Link>
        </li>
      ))}
    </>
  );
}
export default Dashboard;
