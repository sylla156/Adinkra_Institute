import { Card, CardBody, Typography } from "@material-tailwind/react";
import contentEnglish from "../content/contentEnglish";
import BackgroundColor from "../components/BackgroundColor";

const About = () => {
  const { title, subTitle, content, organization } = contentEnglish.about;
  const id = contentEnglish.topBar.navItems.find(item => item.tag.includes('about'))?.tag;
  return (
    <div
      className="flex-col justify-center items-center pt-36 md:pt-46"
      id={id}
    >
      <Typography variant="h6" className="text-center text-primary">
        {title}
      </Typography>
      <Typography variant="h4" className="text-center mb-3">
        {subTitle}
      </Typography>
      <p className="text-md leading-7 text-gray-600 text-center">{content}</p>
      <div className="md:flex md:justify-start md:gap-x-10 md:items-start mt-10 md:mt-12">
        <Card className="md:max-w-[60%] self-stretch">
          <BackgroundColor>
            <CardBody>
              <Typography variant="h6" className="text-center text-primary">
                {organization.title}
              </Typography>
              <Typography variant="h4" className="text-center text-third mb-3">
                {organization.subTitle}
              </Typography>
              <p className="text-sm leading-6 text-gray-900 text-center">
                {organization.content}
              </p>
            </CardBody>
          </BackgroundColor>
        </Card>
        <div className="mt-5 md:mt-0">
          {organization.sections.map(
            (section: {
              title: string;
              content: string;
              Logo: React.ComponentType;
            }) => (
              <div className="mb-8" key={section.title}>
                <Typography
                  variant="h6"
                  className=" text-third flex gap-x-1 items-center justify-center md:justify-start"
                >
                  <section.Logo /> {section.title}
                </Typography>
                <p className="text-sm leading-5 text-center md:text-left">
                  {section.content}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
