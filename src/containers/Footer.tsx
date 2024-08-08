import { Typography } from "@material-tailwind/react";
import contentEnglish from "../content/contentEnglish";
const currentYear = new Date().getFullYear();

export function Footer() {
  const { logo, navItems } = contentEnglish.topBar;

  return (
    <footer className="pt-16 mt-40 pb-10 bg-third">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {navItems.map((navItem) => (
            <div className="" key={navItem.name}>
              <a
                href={navItem.link}
                className="text-sm font-semibold leading-6 text-white flex justify-start items-center"
              >
                {navItem.name}
              </a>
            </div>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 text-[0.7rem] !font-normal text-white"
        >
          Copyright &copy; {currentYear} {logo}
        </Typography>
      </div>
    </footer>
  );
}
export default Footer;
