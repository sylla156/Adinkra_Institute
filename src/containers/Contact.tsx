import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import contentEnglish from "../content/contentEnglish";
import { z } from "zod";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";
import AlertCustomize from "../components/AlertCustomize";
import * as emailjs from "@emailjs/browser";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().optional(),
});

emailjs.send("service_df4fdh2", "template_cwdua0k");

const Contact = () => {
  const { title, content, form, list } = contentEnglish.contact;
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const id = contentEnglish.topBar.navItems.find((item) =>
    item.tag.includes("contact")
  )?.tag;
  const initialValues: z.infer<typeof contactFormSchema> = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (
    body: z.infer<typeof contactFormSchema>,
    { resetForm }: { resetForm: () => void }
  ) => {
  console.log("hello world")
  };
  return (
    <div className="md:pt-46" id={id}>
      <AlertCustomize open={alert} handleClose={setAlert} />
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
          <Formik
            initialValues={initialValues}
            validationSchema={toFormikValidationSchema(contactFormSchema)}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <Input
                      type="text"
                      label="Full name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={errors.name && touched.name ? true : false}
                      crossOrigin={undefined}
                    />
                    {errors.name && touched.name && (
                      <Typography color="red" variant="small">
                        {errors.name}
                      </Typography>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={errors.email && touched.email ? true : false}
                      crossOrigin={undefined}
                    />
                    {errors.email && touched.email && (
                      <Typography color="red" variant="small">
                        {errors.email}
                      </Typography>
                    )}
                  </div>
                  <div>
                    <Textarea
                      rows={6}
                      label="Message"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      error={errors.message && touched.message ? true : false}
                    />

                    {errors.message && touched.message && (
                      <Typography color="red" variant="small">
                        {errors.message}
                      </Typography>
                    )}
                  </div>
                  <Button
                    disabled={isSubmitting}
                    loading={loading}
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              );
            }}
          </Formik>
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
