import { useEffect, useState, useContext } from "react";
import { ErrorContext } from "../main";
import { redirect } from "react-router-dom";

export function useGetUser() {
  const [user, setUser] = useState(null);
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/getUser");
      if (!response.ok) {
        setError("Error getting current user");
        setUser(null);
        return;
      }
      const data = await response.json();
      console.log("Get user got", data);

      setUser(data.username);
    };

    fetchUser();
  }, [setError]);

  async function onLogout(redirectTo = "/login") {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
    if (!response.ok) {
      setError("Error logging out");
      return;
    }
    
    setUser(null);
    console.log("Logging out redirecting", user);
    redirect(redirectTo);
  }

  return { user, onLogout };
}
