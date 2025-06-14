import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <UserForm />
      <UserList />
    </div>
  );
}
