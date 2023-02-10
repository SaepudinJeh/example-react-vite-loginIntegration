import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    return navigate("/login");
  };

  return (
    <div>
      <h1>HomePage</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
