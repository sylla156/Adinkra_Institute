import { Button, Typography } from "@material-tailwind/react";
import TestImg from "../assets/photo.jpeg";
import { useState } from "react";

const Laureat: React.FC<{
  index: number;
  title: string;
  subtitle: string;
  content: string;
}> = ({ index, title, subtitle, content }) => {
  const [visible, setVisible] = useState(false);
  const className = !visible
    ? "text-sm leading-6 text-gray-900 h-36 overflow-hidden"
    : "text-sm leading-6 text-gray-900 overflow-hidden";
  const mainClassName =
    index % 2 == 0
      ? "flex justify-between items-start bg-bg p-4 rounded-md"
      : "flex justify-between items-start";
  return (
    <div className={mainClassName}>
      <div className="w-[30%] h-full">
        <img src={TestImg} alt="test" className="w-full rounded-md" />
      </div>

      <div className="w-[65%] h-full">
        <Typography variant="h6" className=" text-primary text-md">
          {title}
        </Typography>
        <Typography variant="h4" className=" mb-3 font-bold">
          {subtitle}
        </Typography>
        <p className={className}>
          {content}
          {visible && (
            <Button
              size="sm"
              variant="text"
              onClick={() => setVisible((state) => !state)}
              className="inline-block"
            >
              <span className="underline">Show less</span>
            </Button>
          )}
        </p>
        {!visible && (
          <Button
            size="sm"
            variant="text"
            onClick={() => setVisible((state) => !state)}
            className="p-0 m-0"
          >
            <span className="underline"> Show more</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Laureat;
