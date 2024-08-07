import { Button } from "@headlessui/react";
import contentEnglish from "../content/contentEnglish";

const Header = () => {
  const { title, subTitle, content, button } = contentEnglish.header;
  return (
    <div className="mx-3 sm:mx-auto max-w-2xl pt-32 lg:pt-48">
      <div className="mb-8 flex justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          {subTitle}{" "}
          <a href={button.link} className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
            {button.name} <span aria-hidden="true">&darr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">{content}</p>
        <div className=" flex items-center justify-center gap-x-6">
          <a
            href={button.link}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button>{button.name} </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
