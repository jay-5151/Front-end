import UserForm from "./component/UserForm";
import UserTable from "./component/UserTable";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>User Management</h1>
      </header>

      <UserForm />
      <UserTable />
    </div>
  );
};

export default App;