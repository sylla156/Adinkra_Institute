import { Button } from "@material-tailwind/react";
import contentEnglish from "../content/contentEnglish";

const Header = () => {
  const { title, subTitle, content, button } = contentEnglish.header;
  return (
    <div className="mx-3 sm:mx-16 md:mx-auto max-w-2xl pt-24 md:pt-48 lg:pt-42">
      <div className="mb-8 flex justify-center">
        <div className="relative rounded-full border-1 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 border-third">
          {subTitle}{" "}
          <a href={button.link} className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title.split(" ").map((item, index) => {
            if ([2, 3].includes(index)) {
              return (
                <span key={item} className="text-primary">
                  {item}{" "}
                </span>
              );
            } else {
              return <span key={item}>{item} </span>;
            }
          })}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">{content}</p>
        <div className=" flex items-center justify-center gap-x-6">
          <a
            href={button.link}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button variant="text">{button.name}</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
