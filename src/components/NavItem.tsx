import { Typography } from "@material-tailwind/react";

interface NavItemPropsType {
  children: React.ReactNode;
}

const NavItem = ({ children }: NavItemPropsType) => {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
};

export default NavItem;
