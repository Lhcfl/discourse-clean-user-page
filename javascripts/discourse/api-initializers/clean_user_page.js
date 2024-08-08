import { apiInitializer } from "discourse/lib/api";
import CleanUserInfo from "../components/clean-user-info";

export default apiInitializer("1.6.0", (api) => {
  api.renderInOutlet("user-profile-above-collapsed-info", CleanUserInfo);
});
