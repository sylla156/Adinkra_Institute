import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import contentEnglish from "../content/contentEnglish";

const Contact = () => {
  const { title, content, form, list } = contentEnglish.contact;
  const id = contentEnglish.topBar.navItems.find((item) =>
    item.tag.includes("contact")
  )?.tag;
  return (
    <div className="mt-36 md:mt-46" id={id}>
      <div className="md:flex md:justify-start md:gap-x-10 md:items-start mt-10 md:mt-12">
        <div className="flex-col h-full md:my-auto order-2 mt-5">
          <Typography variant="h3" className=" text-primary h-[10%] md:mb-5">
            {title}
          </Typography>
          <p className="text-sm leading-6 text-gray-900 h-[10%] md:mb-10">
            {content}
          </p>
          <div className="hidden md:block">
            {list.map(
              (section: { name: string; Logo: React.ComponentType }) => (
                <div className="mb-4" key={section.name}>
                  <p className=" text-third flex gap-x-2 text-sm font-black items-center justify-center md:justify-start">
                    <section.Logo /> {section.name}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="md:w-full md:min-w-[60%] mt-5 md:mt-0 md:max-w-[60%] order-1">
          <Typography variant="h6" className=" mb:b-5">
            {form.title}
          </Typography>
          <form className="flex flex-col gap-6">
            <Input type="text" label="Full name" crossOrigin={undefined} />
            <Input type="text" label="Email" crossOrigin={undefined} />
            <Textarea rows={6} label="Message" name="desc" />

            <Button type="submit">Send Message</Button>
          </form>
          <div className=" md:hidden mt-4 flex justify-center items-center gap-x-5">
            {list.map(
              (section: { name: string; Logo: React.ComponentType }) => (
                <Button
                  variant="outlined"
                  size="sm"
                  key={section.name}
                  className=" text-third flex gap-x-1 text-[0.7rem] font-black items-center justify-center md:justify-start"
                >
                  <section.Logo />
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
