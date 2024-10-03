import { useEffect, useState } from "react";

function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const States: React.FC<{
  state: string;
}> = ({ state }) => {
  const [TestImg, setTestImg] = useState<string | undefined>(undefined);
  useEffect(() => {
    const loadImage = async () => {
      console.log(
        `../assets/Achievers/${state}/${removeAccents(state.toLowerCase())}.png`
      );
      const img = await import(
        `../assets/Achievers/${state}/${removeAccents(state)}.png`
      );
      setTestImg(img.default); // Use img.default if using React's Webpack setup
    };

    loadImage();
  }, [state]);

  return (
    <div className={"flex justify-start items-start w-full"}>
        <img
          src={TestImg}
          alt="test"
          className="w-32 rounded-sm"
        />
    </div>
  );
};

export default States;
