import { useContext } from "react";
import { ThemeContext, UserContext } from "../../04_useContext的使用/context";
function useFetchContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return [user, theme];
}
export default useFetchContext;
