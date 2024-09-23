import { Typography } from "@material-tailwind/react";
import contentEnglish from "../content/contentEnglish";

const Teams = () => {
  const { title, subTitle, members } = contentEnglish.team;
  const id = contentEnglish.topBar.navItems.find((item) =>
    item.tag.includes("team")
  )?.tag;
  return (
    <div
      className="flex-col justify-center items-center pt-12 md:pt-46"
      id={id}
    >
      <div className="bg-white pt-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <Typography variant="h6" className=" text-primary">
              {title}
            </Typography>
            <Typography variant="h4" className=" mb-3">
              {subTitle}
            </Typography>
          </div>

          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {members.map((item) => {
              return (
                <li key={item.name}>
                  <div className="flex items-center gap-x-6">
                    <item.Image />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {item.Subtitle}
                        <a href={item.linkedin} target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="40"
                            viewBox="0 0 300 150"
                          >
                            <g
                              fill="#c6a650"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z" />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
