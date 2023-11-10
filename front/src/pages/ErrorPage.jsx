import { useRouteError } from "react-router-dom";

import BasePage from "./BasePage";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <BasePage>
      <h1> Sorry there was an error and John wouldn't dance 🏃🏼</h1>

      <div>
        <i>{error.statusText || error.message}</i>{" "}
      </div>
    </BasePage>
  );
}
