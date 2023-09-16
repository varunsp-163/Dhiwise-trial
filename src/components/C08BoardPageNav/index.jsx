import React from "react";

import { Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C08BoardPageNav = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="searchbox"
          placeholder="Search here"
          className="!placeholder:text-gray-500 !text-gray-500 font-cairo font-semibold leading-[normal] p-0 text-base text-left w-full"
          wrapClassName="flex w-[27%] md:w-full"
          prefix={
            <Img
              className="h-7 mr-5 my-px"
              src="images/img_search_2.svg"
              alt="search 2"
            />
          }
          shape="round"
          color="indigo_900"
          size="xs"
          variant="fill"
        ></Input>
        <Text
          className="md:ml-[0] ml-[79px] text-base text-deep_purple-600 underline"
          size="txtCairoBold16Deeppurple600"
        >
          {props?.othermenus}
        </Text>
        <div className="flex flex-row items-center justify-center md:ml-[0] ml-[54px] w-[13%] md:w-full">
          <div className="md:h-7 h-[43px] relative w-[17%]">
            <Img
              className="absolute bottom-[0] h-7 left-[0] w-7"
              src="images/img_bell1.svg"
              alt="bellOne"
            />
            <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
              <div className="absolute bg-light_blue-300 h-[26px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs1 w-[26px]"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-gray-900_01 text-sm w-max"
                size="txtCairoBold14Gray90001"
              >
                {props?.twelve}
              </Text>
            </div>
          </div>
          <div className="md:h-7 h-[43px] ml-[29px] relative w-[15%]">
            <Img
              className="absolute bottom-[0] h-7 left-[0] w-7"
              src="images/img_user.svg"
              alt="user"
            />
            <div className="absolute bg-light_blue-300 flex flex-col h-6 items-center justify-start px-2 right-[0] rounded-[50%] shadow-bs1 top-[0] w-6">
              <Text
                className="text-gray-900_01 text-sm w-[88%] sm:w-full"
                size="txtCairoBold14Gray90001"
              >
                {props?.five}
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[27px] grid grid-cols-2 ml-[27px] w-[45%]"
            orientation="horizontal"
          >
            <div className="md:h-7 h-[43px] relative w-full">
              <Img
                className="absolute bottom-[0] h-7 left-[0] w-7"
                src="images/img_checkbox11.svg"
                alt="checkboxEleven"
              />
              <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
                <div className="absolute bg-light_blue-300 h-[26px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs1 w-[26px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-gray-900_01 text-sm w-max"
                  size="txtCairoBold14Gray90001"
                >
                  {props?.two}
                </Text>
              </div>
            </div>
            <div className="h-11 md:h-7 relative w-full">
              <Img
                className="absolute bottom-[0] h-7 left-[0] w-7"
                src="images/img_office1.svg"
                alt="officeOne"
              />
              <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
                <div className="absolute bg-pink-400 h-[26px] inset-[0] justify-center m-auto outline outline-[3px] outline-gray-900 rounded-[50%] shadow-bs1 w-[26px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-gray-900_01 text-sm w-max"
                  size="txtCairoBold14Gray90001"
                >
                  {props?.one}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <SelectBox
          className="!text-white-A700 font-bold font-cairo leading-[normal] md:ml-[0] ml-[54px] text-base text-left w-[10%] md:w-full"
          placeholderClassName="!text-white-A700"
          indicator={
            <Img
              className="h-2 mr-[0] w-[15px]"
              src="images/img_arrow.svg"
              alt="arrow"
            />
          }
          isSearchable={false}
          placeholder="ENGLISH"
          getOptionLabel={(e) => (
            <div className="flex items-center">
              <Img
                className="h-7 mr-3.5 w-7"
                src="images/img_unitedstates_1.svg"
                alt="united-states 1"
              />
              <span>{e.label}</span>
            </div>
          )}
          name="language"
          isMulti={false}
          options={languageOptionsList}
          shape="round"
        />
        <Line className="bg-blue_gray-900 h-14 md:h-px md:ml-[0] ml-[30px] md:mt-0 my-1.5 rounded-[1px] md:w-full w-px" />
        <div className="flex flex-row gap-6 items-start justify-center md:ml-[0] ml-[30px] mr-6 w-[12%] md:w-full">
          <Img
            className="h-[57px] w-[57px]"
            src="images/img_user_gray_400.svg"
            alt="user_One"
          />
          <div className="flex flex-row gap-7 items-center justify-between mt-[3px] w-[64%]">
            <div className="md:h-7 h-[54px] relative w-[70%]">
              <Text
                className="absolute inset-x-[0] mx-auto text-base text-white-A700 top-[0] w-max"
                size="txtCairoBold16"
              >
                {props?.username}
              </Text>
              <Text
                className="absolute bottom-[0] left-[0] text-indigo-300 text-right text-sm"
                size="txtCairoRegular14"
              >
                {props?.superadmin}
              </Text>
            </div>
            <Img className="h-2" src="images/img_arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

C08BoardPageNav.defaultProps = {
  othermenus: "OTHER MENUS",
  twelve: "12",
  five: "5",
  two: "2",
  one: "!",
  username: "Instructor Day",
  superadmin: "Super Admin",
};

export default C08BoardPageNav;
