import contentEnglish from "../content/contentEnglish";

const Press = () => {
  const id = contentEnglish.topBar.navItems.find((item) =>
    item.tag.includes("press")
  )?.tag;
  return (
    <div
      className="flex-col justify-center items-center"
      id={id}
    >
      <div
        className="elfsight-app-2178e7d8-d760-48f4-8780-317025b5bf99"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default Press;
