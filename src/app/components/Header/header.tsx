import { useIsMobile } from "@/app/hooks/useMobile";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";

const Header = () => {
 const isMobile = useIsMobile();

 return <>{isMobile ? <MobileMenu /> : <Menu />}</>;
};

export default Header;
