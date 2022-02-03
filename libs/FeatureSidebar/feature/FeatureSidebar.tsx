import FeatureSidebarMobile from "./FeatureSidebarMobile";
import FeatureSidebarDesktop from "./FeatureSidebarDesktop";

export const FeatureSidebar = () => {
  return (
    <>
      <FeatureSidebarDesktop />
      <FeatureSidebarMobile />
    </>
  );
};

export default FeatureSidebar;
