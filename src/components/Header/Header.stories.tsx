import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, Props } from "./Header";

const meta: Meta = {
  title: "Header/Header",
  component: Header,
};

export default meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
// export const Light = Template.bind({});
// export const Dark = Template.bind({});

Default.args = {
  background: "transparent",
  navItemArray: [
    {
      url: "/study",
      _uid: "da720909-b536-4a52-874f-c615a5d73102",
      title: "Study",
      target: false,
      navBlok: [
        {
          url: "/course-finder",
          _uid: "40247380-5559-4c86-9871-efa646461ffa",
          title: "Course Finder",
          target: false,
          navBlok: [
            {
              _uid: "4a40e79f-95fa-411e-bb4d-134a5302d1c6",
              navItem: "082402b4-e6d2-42a3-b709-a0d2a070d97a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4a40e79f-95fa-411e-bb4d-134a5302d1c6", "id": "131335571"}-->',
            },
            {
              _uid: "7733d941-d25b-4ac6-96ba-04eb66a676c7",
              navItem: "b2b688de-a876-4010-aa7f-aba659bda2dc",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7733d941-d25b-4ac6-96ba-04eb66a676c7", "id": "131335571"}-->',
            },
            {
              _uid: "d2f5d9ba-5f11-462a-99f2-4d4a075c8865",
              navItem: "bda21e3c-bff2-464c-8cd4-50ec0a631175",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d2f5d9ba-5f11-462a-99f2-4d4a075c8865", "id": "131335571"}-->',
            },
            {
              _uid: "0f4dc873-9378-47e8-97c5-d5140e52ebbd",
              navItem: "02da4b08-5a7c-484e-9933-c10d2468042a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0f4dc873-9378-47e8-97c5-d5140e52ebbd", "id": "131335571"}-->',
            },
            {
              _uid: "89d3b91f-8bf9-4dee-9dc1-2907264610b4",
              navItem: "b9045368-1ae1-4370-89de-daa002c55a6b",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "89d3b91f-8bf9-4dee-9dc1-2907264610b4", "id": "131335571"}-->',
            },
            {
              _uid: "bfbaf0ce-a359-4a17-9a6a-5d91b1e1b849",
              navItem: "1ad43f5a-9ef3-4f2e-bffc-b4ab6b411077",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bfbaf0ce-a359-4a17-9a6a-5d91b1e1b849", "id": "131335571"}-->',
            },
            {
              _uid: "97b0c9dc-2ce6-40cf-a233-2005e660f0aa",
              navItem: "9dbff00f-4224-4b3c-949e-38d9cbd93267",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "97b0c9dc-2ce6-40cf-a233-2005e660f0aa", "id": "131335571"}-->',
            },
            {
              _uid: "9d0eb615-83a2-4fa0-978c-58268613306f",
              navItem: "7d6a5f3c-aa63-4481-a044-eadc803dd08f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9d0eb615-83a2-4fa0-978c-58268613306f", "id": "131335571"}-->',
            },
            {
              _uid: "e48feaa4-6b05-4e92-9fda-735e6bf2ead0",
              navItem: "0926acf0-1a95-4a7f-9b38-a5813b9e4d49",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e48feaa4-6b05-4e92-9fda-735e6bf2ead0", "id": "131335571"}-->',
            },
            {
              _uid: "18cda972-fdfe-4ec8-b591-674e636538e4",
              navItem: "ab9992b5-d7f9-43f6-b757-36576c6aa966",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "18cda972-fdfe-4ec8-b591-674e636538e4", "id": "131335571"}-->',
            },
          ],
          children: [],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "40247380-5559-4c86-9871-efa646461ffa", "id": "131335571"}-->',
        },
        {
          url: "/study/information-for",
          _uid: "61f4ae78-76f3-441a-9635-c0734b9119e0",
          title: "Information For",
          target: false,
          navBlok: [
            {
              _uid: "4e257c37-4443-4b66-97ff-dfed9d9374dd",
              navItem: "4043d15c-8fda-4d1a-b03c-ed6e73b68a51",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4e257c37-4443-4b66-97ff-dfed9d9374dd", "id": "131335571"}-->',
            },
            {
              _uid: "e49088a5-6532-44ef-9195-d049c1c1fdb0",
              navItem: "b4632870-1a4f-4175-bfff-2efd93c3874c",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e49088a5-6532-44ef-9195-d049c1c1fdb0", "id": "131335571"}-->',
            },
            {
              _uid: "c793a9e2-ffe4-4681-935c-650199b861f5",
              navItem: "f6f4e1c4-211d-40c3-bfb5-d0b1779aac22",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c793a9e2-ffe4-4681-935c-650199b861f5", "id": "131335571"}-->',
            },
            {
              _uid: "b459139f-e766-4704-8c19-8f8458574028",
              navItem: "4adea32b-ae99-4603-9195-415a34aa6b82",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b459139f-e766-4704-8c19-8f8458574028", "id": "131335571"}-->',
            },
            {
              _uid: "4a2d5e42-c6d6-4dc5-81e8-3e03d11c1337",
              navItem: "36276c32-e4f2-4332-a26f-179ccd5d032a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4a2d5e42-c6d6-4dc5-81e8-3e03d11c1337", "id": "131335571"}-->',
            },
            {
              _uid: "4b9994b9-9afc-4279-904e-a6b7d661f2d9",
              navItem: "b36a628a-b17d-4511-8e1e-6294961a3fbc",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4b9994b9-9afc-4279-904e-a6b7d661f2d9", "id": "131335571"}-->',
            },
            {
              _uid: "a524a26d-1505-4276-9d92-3bd804a3a1c7",
              navItem: "733b2f69-0a95-4f85-925a-a73d1d20c127",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a524a26d-1505-4276-9d92-3bd804a3a1c7", "id": "131335571"}-->',
            },
            {
              _uid: "91138691-3d3c-4626-b10b-445544c161b0",
              navItem: "3dc07490-2a65-4c6d-bba9-5491d784b463",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "91138691-3d3c-4626-b10b-445544c161b0", "id": "131335571"}-->',
            },
            {
              _uid: "4efdfb03-af87-4669-92bc-be377fab2723",
              navItem: "c3fa4f4a-29cb-431d-9e1e-e94ef82926dd",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4efdfb03-af87-4669-92bc-be377fab2723", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "61f4ae78-76f3-441a-9635-c0734b9119e0", "id": "131335571"}-->',
        },
        {
          url: "/study/international-students",
          _uid: "1e301632-110e-46df-8c76-ccb949ad041b",
          title: "International Students",
          target: false,
          navBlok: [
            {
              _uid: "3de1e81a-d80b-49b3-a7b6-2d8f4d8f8a24",
              navItem: "df088c1e-da38-46a0-9eec-e196dd653fa1",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "3de1e81a-d80b-49b3-a7b6-2d8f4d8f8a24", "id": "131335571"}-->',
            },
            {
              _uid: "bce40591-5c61-4495-84ab-d176890c4adb",
              navItem: "7e27ba49-9964-4817-967a-f6fbb15a6ccc",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bce40591-5c61-4495-84ab-d176890c4adb", "id": "131335571"}-->',
            },
            {
              _uid: "8ab414eb-0387-45f4-a0a7-2206335f8ca6",
              navItem: "2de5b204-b4ca-4925-a2ea-22965d556251",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8ab414eb-0387-45f4-a0a7-2206335f8ca6", "id": "131335571"}-->',
            },
            {
              _uid: "8cdab14b-a794-4263-9200-26cef467b029",
              navItem: "b9074755-9268-467e-aabc-59ae0bbe3785",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8cdab14b-a794-4263-9200-26cef467b029", "id": "131335571"}-->',
            },
            {
              _uid: "b705bf7e-ece3-480d-a8f8-225f8aa763ee",
              navItem: "a8c48c4f-8175-4b14-8747-3d1318d27cd2",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b705bf7e-ece3-480d-a8f8-225f8aa763ee", "id": "131335571"}-->',
            },
            {
              _uid: "4367303f-bc9b-4c89-91ff-f018508c406c",
              navItem: "6d356bcc-6ca0-4d3a-95a5-7f7a009104cc",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4367303f-bc9b-4c89-91ff-f018508c406c", "id": "131335571"}-->',
            },
            {
              _uid: "6c64c538-8aca-44e2-9998-97bddfb78d09",
              navItem: "c83bc6b1-5f77-4d46-be54-877a59c9f728",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6c64c538-8aca-44e2-9998-97bddfb78d09", "id": "131335571"}-->',
            },
            {
              _uid: "1a79868c-1373-436a-af4b-8cff913fed31",
              navItem: "f22ea6cc-b963-4d8e-a3dd-33fec50d966c",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1a79868c-1373-436a-af4b-8cff913fed31", "id": "131335571"}-->',
            },
            {
              _uid: "e674c58f-673d-4da0-bee4-e513c66eff5a",
              navItem: "23cb8f2c-543b-4408-85db-45ff3d8a37e2",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e674c58f-673d-4da0-bee4-e513c66eff5a", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1e301632-110e-46df-8c76-ccb949ad041b", "id": "131335571"}-->',
        },
        {
          url: "/study/study-abroad-and-exchange",
          _uid: "ed2f9105-3aaa-4264-8a79-eb3f335075f5",
          title: "Study Abroad and Exchange",
          target: false,
          navBlok: [
            {
              _uid: "75603f16-a527-4d8f-a430-9d0bc43bb78b",
              navItem: "3b6c1789-faaa-404a-ac3a-feb978ad5973",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "75603f16-a527-4d8f-a430-9d0bc43bb78b", "id": "131335571"}-->',
            },
            {
              _uid: "b1be66d7-98b3-4326-910b-96c7b1d266d2",
              navItem: "c5d7d8e6-be0f-47cd-b6ab-1b5d81fd2eef",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b1be66d7-98b3-4326-910b-96c7b1d266d2", "id": "131335571"}-->',
            },
            {
              _uid: "b4500ccf-bfdd-45c4-a378-f6241927f339",
              navItem: "54330666-26e9-4980-a82b-3feecd24ed11",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b4500ccf-bfdd-45c4-a378-f6241927f339", "id": "131335571"}-->',
            },
            {
              _uid: "0cafeab4-08a1-4c93-aab2-adb300e8713c",
              navItem: "ccae13be-e87c-4ad2-8f0c-dc1bbbe0bc34",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0cafeab4-08a1-4c93-aab2-adb300e8713c", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ed2f9105-3aaa-4264-8a79-eb3f335075f5", "id": "131335571"}-->',
        },
        {
          url: "/visit",
          _uid: "449b9961-583b-4b01-bc71-75f5cf066ffe",
          title: "Visit",
          target: false,
          navBlok: [
            {
              _uid: "a9af18ad-82db-4f35-9179-1ed3e97616fa",
              navItem: "f46975f6-6a3a-45c0-92db-22d866594b81",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a9af18ad-82db-4f35-9179-1ed3e97616fa", "id": "131335571"}-->',
            },
            {
              _uid: "159b1b0e-d907-429d-b730-05f8b805e4db",
              navItem: "7d7165e3-e6f3-4a24-9073-2bb463e5b66f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "159b1b0e-d907-429d-b730-05f8b805e4db", "id": "131335571"}-->',
            },
            {
              _uid: "8ba0a7aa-2049-49f7-acfe-0110b33857bc",
              navItem: "07410222-c457-4a17-89ad-a1a640960ee7",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8ba0a7aa-2049-49f7-acfe-0110b33857bc", "id": "131335571"}-->',
            },
            {
              _uid: "2098de44-16c9-4364-8894-3737667d828c",
              navItem: "fcaf0dbc-32dc-4e54-95f5-d6696c386d7d",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2098de44-16c9-4364-8894-3737667d828c", "id": "131335571"}-->',
            },
            {
              _uid: "f8209856-d64d-4035-91d2-97588d96a3ad",
              navItem: "2d0b806f-6650-43a2-b5c4-d1068a07ff2f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f8209856-d64d-4035-91d2-97588d96a3ad", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "449b9961-583b-4b01-bc71-75f5cf066ffe", "id": "131335571"}-->',
        },
        {
          url: "/apply",
          _uid: "ec5ef15b-c7fc-41ff-a508-59e4fa0f86d3",
          title: "Apply",
          target: false,
          navBlok: [
            {
              _uid: "9ee1f580-1d28-4c54-b6de-7196f77e1bd7",
              navItem: "aa88de01-35ab-4f51-946c-f90aa2bef0fd",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9ee1f580-1d28-4c54-b6de-7196f77e1bd7", "id": "131335571"}-->',
            },
            {
              _uid: "2f4a54c3-68fb-4b97-83d6-d9178cac765e",
              navItem: "2546351e-6a31-490a-b229-5d83c0209409",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2f4a54c3-68fb-4b97-83d6-d9178cac765e", "id": "131335571"}-->',
            },
            {
              _uid: "b9767440-1a44-4594-adc0-e27a41f7ce1b",
              navItem: "c3559433-a45c-437f-b6b7-b74f32f614c3",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b9767440-1a44-4594-adc0-e27a41f7ce1b", "id": "131335571"}-->',
            },
            {
              _uid: "b244ae15-8cfb-476f-8b17-db5dc2ae6867",
              navItem: "a5a20d69-65ee-43c2-b056-c1e80aeb608a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b244ae15-8cfb-476f-8b17-db5dc2ae6867", "id": "131335571"}-->',
            },
            {
              _uid: "d97c849a-d5e9-4ee0-aa67-0fe77ee2d63b",
              navItem: "28a446f4-d44c-4aaa-880f-5b1bb72dc8b9",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d97c849a-d5e9-4ee0-aa67-0fe77ee2d63b", "id": "131335571"}-->',
            },
            {
              _uid: "c5cecd78-6574-4e15-a39b-c99109327184",
              navItem: "0da8928c-829a-47fb-a6fe-7d51ea99845f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c5cecd78-6574-4e15-a39b-c99109327184", "id": "131335571"}-->',
            },
            {
              _uid: "4961a56f-73dd-430d-90fa-461dff515ce5",
              navItem: "f09f4cb3-89df-400a-b41b-654b9be44f31",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4961a56f-73dd-430d-90fa-461dff515ce5", "id": "131335571"}-->',
            },
          ],
          children: [],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ec5ef15b-c7fc-41ff-a508-59e4fa0f86d3", "id": "131335571"}-->',
        },
        {
          url: "/study/fees-and-funding",
          _uid: "314505ed-183c-4a1f-996b-2f41f3c059a7",
          title: "Fees and Funding",
          target: false,
          navBlok: [
            {
              _uid: "59c1a4aa-2dd6-4ed6-aa00-43f2ce63e25a",
              navItem: "9b7deafe-dea8-4940-b7d1-c1c7380a51a8",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "59c1a4aa-2dd6-4ed6-aa00-43f2ce63e25a", "id": "131335571"}-->',
            },
            {
              _uid: "173caf0f-0fc9-4dad-8b04-eb4ba3d30cbe",
              navItem: "f768d918-f78e-4119-a6a3-04b5a6499b19",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "173caf0f-0fc9-4dad-8b04-eb4ba3d30cbe", "id": "131335571"}-->',
            },
            {
              _uid: "2e60df1a-93b5-437d-bcb2-70f747b10253",
              navItem: "34dff977-464f-402a-849a-029b99d6cb3b",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2e60df1a-93b5-437d-bcb2-70f747b10253", "id": "131335571"}-->',
            },
            {
              _uid: "a3fe1281-ff53-4085-9c69-28ece609caf1",
              navItem: "10cb63bf-4f93-4059-89fb-10c6ad6eb885",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a3fe1281-ff53-4085-9c69-28ece609caf1", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "314505ed-183c-4a1f-996b-2f41f3c059a7", "id": "131335571"}-->',
        },
      ],
      children: [],
      component: "navFolder",
      _editable:
        '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "da720909-b536-4a52-874f-c615a5d73102", "id": "131335571"}-->',
    },
    {
      url: "/uea-life",
      _uid: "1d4b820b-68e9-4c86-a249-e022eb316299",
      title: "UEA Life",
      target: false,
      navBlok: [
        {
          _uid: "8aa678e2-f7e0-4f4f-98ff-3c02bf10131d",
          navItem: "13e6c8e3-4a68-4425-8899-50f943c19297",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8aa678e2-f7e0-4f4f-98ff-3c02bf10131d", "id": "131335571"}-->',
        },
        {
          _uid: "64c99c43-65d1-4aae-9d8b-48a752ec19a3",
          navItem: "a40606f8-93b6-49a2-be2f-a5072a82042b",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "64c99c43-65d1-4aae-9d8b-48a752ec19a3", "id": "131335571"}-->',
        },
        {
          url: "/uea-life/accommodation",
          _uid: "e13e0e63-2ee0-4cc2-a5c8-4f64d826c262",
          title: "Accommodation",
          target: false,
          navBlok: [
            {
              _uid: "f66ac81d-1db7-4c38-aeb5-5ed045288553",
              navItem: "8c0853d4-ab99-4143-a11e-3fb317948ac0",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f66ac81d-1db7-4c38-aeb5-5ed045288553", "id": "131335571"}-->',
            },
            {
              _uid: "1b3d25a1-b4db-4b55-bee0-9418bec42db7",
              navItem: "c8c74014-678a-46c4-836b-f15fc56b61e5",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1b3d25a1-b4db-4b55-bee0-9418bec42db7", "id": "131335571"}-->',
            },
            {
              _uid: "20717b4c-9c85-4d4e-ad72-8e75141ecea5",
              navItem: "40115fad-2c11-43fd-9a27-d3802465b176",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "20717b4c-9c85-4d4e-ad72-8e75141ecea5", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e13e0e63-2ee0-4cc2-a5c8-4f64d826c262", "id": "131335571"}-->',
        },
        {
          url: "/uea/student-support",
          _uid: "2fad35c2-f73d-4359-b1c9-c5e10803dd5c",
          title: "Student Support",
          target: false,
          navBlok: [
            {
              _uid: "29210c50-3cf9-429b-8f64-fd63049f9b07",
              navItem: "bbd13d93-d66a-4743-a3dd-12f262a8e95a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "29210c50-3cf9-429b-8f64-fd63049f9b07", "id": "131335571"}-->',
            },
            {
              _uid: "8bd6d0fb-6ce3-48e8-b675-283c5b30959b",
              navItem: "0dd7c816-45bb-44b7-91ae-53aa28f30eb1",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8bd6d0fb-6ce3-48e8-b675-283c5b30959b", "id": "131335571"}-->',
            },
            {
              _uid: "d1ca801a-0233-451d-83ae-2bf4977c6c1c",
              navItem: "ba7e6c19-858d-4313-892d-0a5642701c8c",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d1ca801a-0233-451d-83ae-2bf4977c6c1c", "id": "131335571"}-->',
            },
            {
              _uid: "5830f413-e18e-4168-b3a8-05ff5de888ee",
              navItem: "216bae1f-764d-4ebb-a180-2151418a7a95",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "5830f413-e18e-4168-b3a8-05ff5de888ee", "id": "131335571"}-->',
            },
            {
              _uid: "9037444a-ddaf-40f3-9a20-38ec16ea5aff",
              navItem: "35d66fb1-94f0-46ca-925b-7a6ab1b4c202",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9037444a-ddaf-40f3-9a20-38ec16ea5aff", "id": "131335571"}-->',
            },
            {
              _uid: "6d5af400-63be-4b10-b954-e44e17017491",
              navItem: "9779f9b6-5a7e-4681-b4aa-f15a47e4af7f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6d5af400-63be-4b10-b954-e44e17017491", "id": "131335571"}-->',
            },
            {
              _uid: "1d1d6c93-5da6-468f-81f4-a38ad0de4ef8",
              navItem: "74d991fe-dc08-4004-9496-26ffd5dd4e8b",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1d1d6c93-5da6-468f-81f4-a38ad0de4ef8", "id": "131335571"}-->',
            },
            {
              _uid: "fa5b7ad0-feb5-4d40-b922-94f52af32743",
              navItem: "d3448b3e-37e1-4415-a1a4-92b405fac044",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fa5b7ad0-feb5-4d40-b922-94f52af32743", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "2fad35c2-f73d-4359-b1c9-c5e10803dd5c", "id": "131335571"}-->',
        },
        {
          _uid: "a4309e12-3fd4-44a9-80f8-a5d6a4b387af",
          navItem: "4fa621b5-4087-47b7-841d-5b5efddd552f",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a4309e12-3fd4-44a9-80f8-a5d6a4b387af", "id": "131335571"}-->',
        },
      ],
      children: [],
      component: "navFolder",
      _editable:
        '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1d4b820b-68e9-4c86-a249-e022eb316299", "id": "131335571"}-->',
    },
    {
      url: "/research",
      _uid: "949d3728-8603-4f91-a99f-166827e3fbec",
      title: "Research",
      target: false,
      navBlok: [
        {
          _uid: "7f854c25-8037-4626-afad-f9bceb297fdc",
          navItem: "5cc5f71f-6dfa-4261-85cd-818ceafa565d",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7f854c25-8037-4626-afad-f9bceb297fdc", "id": "131335571"}-->',
        },
        {
          url: "/research/research-with-us",
          _uid: "d55bfbe1-df03-4bf4-9121-fd88ec22e1e5",
          title: "Research With Us",
          target: false,
          navBlok: [
            {
              _uid: "7ea22ddf-7d94-4604-aa96-85ebf3acc2b8",
              navItem: "3d943cea-f8f4-48b8-a0f5-bde786f0b4ec",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7ea22ddf-7d94-4604-aa96-85ebf3acc2b8", "id": "131335571"}-->',
            },
            {
              _uid: "e6ac212a-886d-4261-9968-1aabdf138882",
              navItem: "1da3864f-9fa2-4737-a7c4-da7d9065fcd4",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e6ac212a-886d-4261-9968-1aabdf138882", "id": "131335571"}-->',
            },
            {
              _uid: "28e1a65a-c05a-41db-9b29-0615dc4212e8",
              navItem: "54c8e57a-3d21-43cc-bfd9-a534e5c63f7f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "28e1a65a-c05a-41db-9b29-0615dc4212e8", "id": "131335571"}-->',
            },
            {
              _uid: "6732b67b-344a-4318-a6cb-827121ca69d4",
              navItem: "422fb32b-b057-4b75-9e33-4066f7069cfc",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6732b67b-344a-4318-a6cb-827121ca69d4", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "d55bfbe1-df03-4bf4-9121-fd88ec22e1e5", "id": "131335571"}-->',
        },
        {
          _uid: "244ba7b4-ea19-4293-aa40-b253174f10d8",
          navItem: "7d13e53b-36b1-43fb-8702-5023e80dc81e",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "244ba7b4-ea19-4293-aa40-b253174f10d8", "id": "131335571"}-->',
        },
        {
          _uid: "84ff0294-efa6-4360-9733-ac70c484e2c7",
          navItem: "6ee4bbe6-06ee-4601-8197-3890eb15db09",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "84ff0294-efa6-4360-9733-ac70c484e2c7", "id": "131335571"}-->',
        },
        {
          _uid: "a6d4ccf9-a08e-4300-b6f9-dc068d42b958",
          navItem: "7bce6a8c-d040-4a8c-bff5-85005f270c38",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a6d4ccf9-a08e-4300-b6f9-dc068d42b958", "id": "131335571"}-->',
        },
        {
          _uid: "96c5fd40-d045-463a-a42e-d19edb7805f5",
          navItem: "6779adb2-83a5-4b40-89e2-5a7912fe260e",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "96c5fd40-d045-463a-a42e-d19edb7805f5", "id": "131335571"}-->',
        },
      ],
      children: [],
      component: "navFolder",
      _editable:
        '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "949d3728-8603-4f91-a99f-166827e3fbec", "id": "131335571"}-->',
    },
    {
      url: "/business",
      _uid: "73391001-2c2a-4182-b527-f72bbec03acb",
      title: "Business",
      target: false,
      navBlok: [
        {
          _uid: "08d7364c-6e0e-4c77-b45c-d6cdb0b90d5c",
          navItem: "c8858397-127f-4ce3-9c1f-c460ee96271f",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "08d7364c-6e0e-4c77-b45c-d6cdb0b90d5c", "id": "131335571"}-->',
        },
        {
          _uid: "e56c1cfb-3e67-41e8-9ad1-763edef044ce",
          navItem: "6ac66223-3435-4174-b062-df09602e4504",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e56c1cfb-3e67-41e8-9ad1-763edef044ce", "id": "131335571"}-->',
        },
        {
          _uid: "a85d47e5-0f17-4864-9f2b-70bdd88f580b",
          navItem: "fc7b23b2-7d94-4288-a545-70d49899eb7f",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a85d47e5-0f17-4864-9f2b-70bdd88f580b", "id": "131335571"}-->',
        },
        {
          _uid: "b5d6bcc1-c41f-45e0-97c8-1503a5b65008",
          navItem: "15e20977-8cb4-492a-ab73-b41b2bcb7a71",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b5d6bcc1-c41f-45e0-97c8-1503a5b65008", "id": "131335571"}-->',
        },
        {
          _uid: "355cbe67-d3d7-44d5-9c6c-f289d43dd4cb",
          navItem: "0baf09c3-0d3c-495d-a0bf-75e45573a11d",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "355cbe67-d3d7-44d5-9c6c-f289d43dd4cb", "id": "131335571"}-->',
        },
        {
          _uid: "bc98954a-a54c-4fec-a4dc-eaaeddd91659",
          navItem: "e6f2e934-c3d5-4cd1-a29c-737ef2967a37",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc98954a-a54c-4fec-a4dc-eaaeddd91659", "id": "131335571"}-->',
        },
        {
          _uid: "1b9e0e75-ca14-4a90-a0e0-21701b6c7ec7",
          navItem: "b919247c-f0a6-4a1a-8861-ec7719daedab",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1b9e0e75-ca14-4a90-a0e0-21701b6c7ec7", "id": "131335571"}-->',
        },
        {
          _uid: "e21ff00d-3fc1-41c0-ac74-0838cbbf8ef4",
          navItem: "f9ed0dbe-04cc-47d8-8d5f-a434667548ac",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e21ff00d-3fc1-41c0-ac74-0838cbbf8ef4", "id": "131335571"}-->',
        },
      ],
      children: [],
      component: "navFolder",
      _editable:
        '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "73391001-2c2a-4182-b527-f72bbec03acb", "id": "131335571"}-->',
    },
    {
      url: "/global",
      _uid: "54dfc4c1-2b9b-4fd2-a75c-064bc1537cad",
      title: "Global",
      target: false,
      navBlok: [
        {
          _uid: "f3f922e1-36f2-4b20-914a-7d5e2c5cd329",
          navItem: "78f93250-0808-4db3-bf7f-73499a26237a",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f3f922e1-36f2-4b20-914a-7d5e2c5cd329", "id": "131335571"}-->',
        },
        {
          _uid: "cd4597a6-c1ef-47da-8b3b-493726dba4cb",
          navItem: "a7b30fab-fea0-4cd0-888a-ae7eebdb7eb9",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "cd4597a6-c1ef-47da-8b3b-493726dba4cb", "id": "131335571"}-->',
        },
        {
          _uid: "ed0e4817-21e6-4dbd-a369-ee6b5c93a785",
          navItem: "6a96d296-4f94-4991-b95d-caef010960c3",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ed0e4817-21e6-4dbd-a369-ee6b5c93a785", "id": "131335571"}-->',
        },
        {
          _uid: "ef8e89f3-8236-412d-9e1d-533a4dc9a366",
          navItem: "a9751b51-7f57-44c6-b819-1ce235862c83",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ef8e89f3-8236-412d-9e1d-533a4dc9a366", "id": "131335571"}-->',
        },
        {
          _uid: "1864ca34-5d2d-4900-bf19-88d925fc0a80",
          navItem: "bb535e35-4f5a-46c0-ad6d-3e52e5eff950",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1864ca34-5d2d-4900-bf19-88d925fc0a80", "id": "131335571"}-->',
        },
        {
          _uid: "da2df4a0-3417-4a71-a81e-eafe6d631d9b",
          navItem: "9a1f0b42-d887-40a3-be52-b4d4cfd1ffec",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "da2df4a0-3417-4a71-a81e-eafe6d631d9b", "id": "131335571"}-->',
        },
        {
          _uid: "bf6e176e-c73e-443f-b069-db2ddf58a537",
          navItem: "13d92467-9f26-438b-a2aa-17a74006e593",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bf6e176e-c73e-443f-b069-db2ddf58a537", "id": "131335571"}-->',
        },
        {
          _uid: "c8f11152-7ed6-4c02-940e-44c27514a91f",
          navItem: "ad5f9e93-cbc6-49a1-90ab-e48e64a97241",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c8f11152-7ed6-4c02-940e-44c27514a91f", "id": "131335571"}-->',
        },
      ],
      children: [],
      component: "navFolder",
      _editable:
        '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "54dfc4c1-2b9b-4fd2-a75c-064bc1537cad", "id": "131335571"}-->',
    },
    {
      url: "/about",
      _uid: "1495a7b3-a353-4427-b236-b5b5fc3575e4",
      title: "About",
      target: false,
      navBlok: [
        {
          _uid: "f3cae847-af5f-4d9a-aa6a-95d93baf981d",
          navItem: "9d3a6616-87be-40a1-9ca7-129c99cf46f1",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f3cae847-af5f-4d9a-aa6a-95d93baf981d", "id": "131335571"}-->',
        },
        {
          _uid: "8b568800-7ed7-4265-a6f3-7964adb9c330",
          navItem: "313ff16a-21e5-48b5-9e88-8528f45da2b6",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8b568800-7ed7-4265-a6f3-7964adb9c330", "id": "131335571"}-->',
        },
        {
          url: "/library",
          _uid: "ddcba14c-6a29-4e94-9fcd-335ac76b8dfd",
          title: "Library and Archives",
          target: false,
          navBlok: [
            {
              _uid: "15c987be-afda-4064-9fc2-36b8712aa0b4",
              navItem: "87c83877-fb81-4c3c-979d-a7b229b290af",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "15c987be-afda-4064-9fc2-36b8712aa0b4", "id": "131335571"}-->',
            },
            {
              _uid: "b081d6a6-e916-4de4-8e8b-43aaf23afab1",
              navItem: "eec2b027-1f1c-4da6-809d-39af36c0acae",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b081d6a6-e916-4de4-8e8b-43aaf23afab1", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ddcba14c-6a29-4e94-9fcd-335ac76b8dfd", "id": "131335571"}-->',
        },
        {
          url: "/about/working-at-uea",
          _uid: "5517ab26-1dda-4f93-a922-34a509bbf2e8",
          title: "Working at UEA",
          target: false,
          navBlok: [
            {
              _uid: "027bee49-ee0f-44c7-8121-65b7a4b30741",
              navItem: "91d55c80-9347-443d-9e34-9d9f23d0bf12",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "027bee49-ee0f-44c7-8121-65b7a4b30741", "id": "131335571"}-->',
            },
            {
              _uid: "44eab4ef-66c6-4f0a-8546-f6023eeff3ea",
              navItem: "99faf738-11a9-42cd-aa08-d86218a4eda4",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "44eab4ef-66c6-4f0a-8546-f6023eeff3ea", "id": "131335571"}-->',
            },
            {
              _uid: "921cfd5e-9b9c-4209-a379-35772a348691",
              navItem: "0fa015c6-f1be-4849-baa9-45fa913dd50a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "921cfd5e-9b9c-4209-a379-35772a348691", "id": "131335571"}-->',
            },
            {
              _uid: "bc2c9a9e-70ee-49f3-836e-1ee2b39a6d69",
              navItem: "ad6b083b-e169-4991-8a54-db7e4bae7340",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc2c9a9e-70ee-49f3-836e-1ee2b39a6d69", "id": "131335571"}-->',
            },
            {
              _uid: "8b5ca8c2-ba29-4961-aed6-c93e144c1885",
              navItem: "9dacc093-1958-4f2e-ad97-559627811c4f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8b5ca8c2-ba29-4961-aed6-c93e144c1885", "id": "131335571"}-->',
            },
            {
              _uid: "eaf271c1-a4e9-44b2-8b8c-a5e302e1fc82",
              navItem: "ff7e5cd6-9f22-4d2c-a73d-3555ff1d9086",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "eaf271c1-a4e9-44b2-8b8c-a5e302e1fc82", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "5517ab26-1dda-4f93-a922-34a509bbf2e8", "id": "131335571"}-->',
        },
        {
          _uid: "095d080b-2339-4109-8b07-05a4ca891bc5",
          navItem: "a218248b-dcef-4596-8af9-00a27ec322c2",
          component: "navItem",
          _editable:
            '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "095d080b-2339-4109-8b07-05a4ca891bc5", "id": "131335571"}-->',
        },
        {
          url: "/about/faculties-and-schools",
          _uid: "0770a34c-d138-4f6b-9664-f4e6fc2448e2",
          title: "Faculties and Schools",
          target: false,
          navBlok: [
            {
              url: "/about/faculties-and-schools/faculty-of-arts-and-humanities",
              _uid: "e41aa522-7c32-46f9-a4ca-81d3767bd844",
              title: "Faculty of Arts and Humanities",
              target: false,
              navBlok: [
                {
                  _uid: "0cde4f93-76e3-4a54-986e-eea78cb5e6ca",
                  navItem: "4adc3087-1651-490a-bb3e-4b7f623bd8e4",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0cde4f93-76e3-4a54-986e-eea78cb5e6ca", "id": "131335571"}-->',
                },
                {
                  _uid: "2461c21e-772b-403a-858d-f8fc803b6cf8",
                  navItem: "8bdbfb61-4b28-4c2c-bf25-4e816c7d5da6",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2461c21e-772b-403a-858d-f8fc803b6cf8", "id": "131335571"}-->',
                },
                {
                  _uid: "d3824f64-9510-4823-8859-9fd7851183db",
                  navItem: "18ff8ead-3aea-4008-be2d-5054d1ae6979",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d3824f64-9510-4823-8859-9fd7851183db", "id": "131335571"}-->',
                },
                {
                  _uid: "08089dad-0e24-4395-84ba-643b4354e90a",
                  navItem: "b23d4d43-f71a-4b30-ba9a-4dfd7b82c1ef",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "08089dad-0e24-4395-84ba-643b4354e90a", "id": "131335571"}-->',
                },
                {
                  _uid: "ccc3fbb2-f182-4841-9718-c7c3bed0adc6",
                  navItem: "881545e2-2a1a-4a10-8659-ed096d333082",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ccc3fbb2-f182-4841-9718-c7c3bed0adc6", "id": "131335571"}-->',
                },
                {
                  _uid: "bb9b45a6-606d-4f59-b23a-85a53485ca55",
                  navItem: "4e74db4d-de35-4229-9f77-c0a9a043efcb",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bb9b45a6-606d-4f59-b23a-85a53485ca55", "id": "131335571"}-->',
                },
                {
                  _uid: "6621b667-29b1-4d76-b75b-9eb214596813",
                  navItem: "5c792102-c249-4746-bd37-3cf5f345fa09",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6621b667-29b1-4d76-b75b-9eb214596813", "id": "131335571"}-->',
                },
              ],
              component: "navFolder",
              _editable:
                '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e41aa522-7c32-46f9-a4ca-81d3767bd844", "id": "131335571"}-->',
            },
            {
              url: "/about/faculties-and-schools/faculty-of-medicine-and-health",
              _uid: "00f7d236-6770-43f6-a2f0-68edae0ab22d",
              title: "Faculty of Medicine and Health",
              target: false,
              navBlok: [
                {
                  _uid: "99856116-f9e0-462c-928d-c156258b943b",
                  navItem: "a95e6541-0e99-4516-b53b-6091e34b7870",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "99856116-f9e0-462c-928d-c156258b943b", "id": "131335571"}-->',
                },
                {
                  _uid: "7dbf092f-18c6-462f-bebe-cc70dd8a2e98",
                  navItem: "6178240b-539c-409a-a5c0-6227b5706d51",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7dbf092f-18c6-462f-bebe-cc70dd8a2e98", "id": "131335571"}-->',
                },
                {
                  _uid: "3ee08bc2-4053-48a3-bba8-62b47f113a36",
                  navItem: "5d03d9df-4309-4c6f-a80b-178511e9c6bd",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "3ee08bc2-4053-48a3-bba8-62b47f113a36", "id": "131335571"}-->',
                },
              ],
              component: "navFolder",
              _editable:
                '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "00f7d236-6770-43f6-a2f0-68edae0ab22d", "id": "131335571"}-->',
            },
            {
              url: "/about/faculties-and-schools/faculty-of-science",
              _uid: "29d45e7a-c1db-4b46-942d-5d97f8d42311",
              title: "Faculty of Science",
              target: false,
              navBlok: [
                {
                  _uid: "2034f1e9-7508-459b-8116-b26ac3e487c5",
                  navItem: "b300f616-8281-4f57-8eff-52576b99d244",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2034f1e9-7508-459b-8116-b26ac3e487c5", "id": "131335571"}-->',
                },
                {
                  _uid: "d82dd144-2bb3-46c8-a1c8-b3029a7a329f",
                  navItem: "cdfed783-7776-40f1-8bde-3f0ec4f95c5f",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d82dd144-2bb3-46c8-a1c8-b3029a7a329f", "id": "131335571"}-->',
                },
                {
                  _uid: "ac0a9ef2-888a-4bc5-89d0-989f78fde464",
                  navItem: "4efd9dae-7fd0-4c1c-8dc1-c6fbe4293585",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ac0a9ef2-888a-4bc5-89d0-989f78fde464", "id": "131335571"}-->',
                },
                {
                  _uid: "fc352d33-b4e2-404e-bc92-052e02cece4c",
                  navItem: "c13fb4d5-06ec-4e72-997e-622ee6ca71d6",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fc352d33-b4e2-404e-bc92-052e02cece4c", "id": "131335571"}-->',
                },
                {
                  _uid: "ad92c7d7-0aa4-46a3-bd86-269dfda987f3",
                  navItem: "79ff0656-83e2-4b86-a91f-08aa19b92f1f",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ad92c7d7-0aa4-46a3-bd86-269dfda987f3", "id": "131335571"}-->',
                },
                {
                  _uid: "9f238ed6-49e2-4545-94e4-639f852c713b",
                  navItem: "67ed8f64-3dbf-43a2-bde4-af874dca070a",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9f238ed6-49e2-4545-94e4-639f852c713b", "id": "131335571"}-->',
                },
                {
                  _uid: "643e536d-7c4a-4d8b-a1ae-36e44966a5f6",
                  navItem: "15e521bf-807c-4ce8-9168-9a144e4854e9",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "643e536d-7c4a-4d8b-a1ae-36e44966a5f6", "id": "131335571"}-->',
                },
                {
                  _uid: "4d1b65dd-4268-47b5-9208-6bb017e0e02f",
                  navItem: "de8e6982-080a-4321-b9d6-695c826612eb",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4d1b65dd-4268-47b5-9208-6bb017e0e02f", "id": "131335571"}-->',
                },
                {
                  _uid: "34e9050e-f0aa-41d8-ae75-0b5bcc5ebcf9",
                  navItem: "da7c68c7-56a1-49ea-a147-cf9d4e123d57",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "34e9050e-f0aa-41d8-ae75-0b5bcc5ebcf9", "id": "131335571"}-->',
                },
                {
                  _uid: "069b163a-6149-4110-a4bb-249583a8972f",
                  navItem: "cdc3112a-099e-4f5b-85ce-2e631cbb3736",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "069b163a-6149-4110-a4bb-249583a8972f", "id": "131335571"}-->',
                },
                {
                  _uid: "e09f1f34-fd9c-4326-b611-60163d505598",
                  navItem: "f65aa946-1033-43c6-b564-2172cc849366",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e09f1f34-fd9c-4326-b611-60163d505598", "id": "131335571"}-->',
                },
                {
                  _uid: "76849b72-ac5f-4c13-8027-aba40d2988c0",
                  navItem: "b172c458-d17f-4966-863f-7af0856f3a92",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "76849b72-ac5f-4c13-8027-aba40d2988c0", "id": "131335571"}-->',
                },
                {
                  _uid: "146cf578-3526-4d66-8b48-ee772a897c7f",
                  navItem: "43003844-9012-4755-b4ba-a4075dec6adc",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "146cf578-3526-4d66-8b48-ee772a897c7f", "id": "131335571"}-->',
                },
              ],
              component: "navFolder",
              _editable:
                '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "29d45e7a-c1db-4b46-942d-5d97f8d42311", "id": "131335571"}-->',
            },
            {
              url: "/about/faculties-and-schools/faculty-of-social-sciences",
              _uid: "c08c4558-7232-438a-b34f-12a816aa86ea",
              title: "Faculty of Social Sciences",
              target: false,
              navBlok: [
                {
                  _uid: "cf209fc0-35ab-48cf-b0ba-7fd733ed980b",
                  navItem: "cfc76107-5bbd-4a41-9316-635767929a3f",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "cf209fc0-35ab-48cf-b0ba-7fd733ed980b", "id": "131335571"}-->',
                },
                {
                  _uid: "12e3522b-2374-4aeb-aaf9-95f13aa2c4f3",
                  navItem: "2f4ac7fd-f74c-4cd9-b923-d5640afdfa27",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "12e3522b-2374-4aeb-aaf9-95f13aa2c4f3", "id": "131335571"}-->',
                },
                {
                  _uid: "d5572866-8aec-4dc3-93bc-2f087d866b77",
                  navItem: "4a63b181-7738-4f5f-88a0-8118c72281e7",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d5572866-8aec-4dc3-93bc-2f087d866b77", "id": "131335571"}-->',
                },
                {
                  _uid: "d88e7841-dfc8-4e49-95f7-4574da54c375",
                  navItem: "1f9cc6b4-e02e-4506-9dfa-64d00ff9aa9b",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d88e7841-dfc8-4e49-95f7-4574da54c375", "id": "131335571"}-->',
                },
                {
                  _uid: "56ae4db8-7fde-4473-8f37-322cd9e0b557",
                  navItem: "e525f761-fb58-4255-8a27-e7f193982b0b",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "56ae4db8-7fde-4473-8f37-322cd9e0b557", "id": "131335571"}-->',
                },
                {
                  _uid: "06401a4b-31f9-44d0-87da-cdd7c2ad4c4c",
                  navItem: "359c2940-2440-44b9-bbf0-60ae6278b03d",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "06401a4b-31f9-44d0-87da-cdd7c2ad4c4c", "id": "131335571"}-->',
                },
                {
                  _uid: "1d436f3c-1d92-48a6-8f04-1c9793c36ce3",
                  navItem: "6b8234ab-6966-4628-baab-62d6d6798362",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1d436f3c-1d92-48a6-8f04-1c9793c36ce3", "id": "131335571"}-->',
                },
                {
                  _uid: "1abe7e38-097c-463d-b5df-27cd862070da",
                  navItem: "8127b58d-3646-4b41-8e44-0db12ff2b518",
                  component: "navItem",
                  _editable:
                    '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1abe7e38-097c-463d-b5df-27cd862070da", "id": "131335571"}-->',
                },
              ],
              component: "navFolder",
              _editable:
                '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "c08c4558-7232-438a-b34f-12a816aa86ea", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "0770a34c-d138-4f6b-9664-f4e6fc2448e2", "id": "131335571"}-->',
        },
        {
          url: "/about/alumni-and-supporters",
          _uid: "03de44ec-a7e2-4721-b1f1-ffe3c5c7c58f",
          title: "Alumni and Supporters",
          target: false,
          navBlok: [
            {
              _uid: "a2a29ec1-f553-44dc-9be4-83cf018df911",
              navItem: "7ce3d49e-2ce5-4a9e-b0da-7498b2e8f5d8",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a2a29ec1-f553-44dc-9be4-83cf018df911", "id": "131335571"}-->',
            },
            {
              _uid: "63a08445-bfe0-4ef5-bf47-f6d13bbd26fe",
              navItem: "731ded77-5b69-4504-9d5f-273560b36efb",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "63a08445-bfe0-4ef5-bf47-f6d13bbd26fe", "id": "131335571"}-->',
            },
            {
              _uid: "7cf34e6b-870e-43b4-8bbc-3b067d437224",
              navItem: "186e145d-8c0e-481f-91f1-c7e0c5f22bfb",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7cf34e6b-870e-43b4-8bbc-3b067d437224", "id": "131335571"}-->',
            },
            {
              _uid: "c829b103-e6a9-4a04-80ca-bc63a12ce2ad",
              navItem: "b39712ec-8400-46b4-83c3-5c2cd5812324",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c829b103-e6a9-4a04-80ca-bc63a12ce2ad", "id": "131335571"}-->',
            },
            {
              _uid: "6345aace-e4e1-4d42-9c7b-2d8e00cc2c5a",
              navItem: "4d09f1f8-fcbf-44db-b27f-abe3cc5467c8",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6345aace-e4e1-4d42-9c7b-2d8e00cc2c5a", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "03de44ec-a7e2-4721-b1f1-ffe3c5c7c58f", "id": "131335571"}-->',
        },
        {
          url: "/about/partnership-hubs",
          _uid: "e016da6f-a01a-4e6b-8987-ae55672f5f65",
          title: "Partnerships Hub",
          target: false,
          navBlok: [
            {
              _uid: "bd294b15-3e36-4c79-b647-63c351e3f315",
              navItem: "35619d47-9f20-438b-8b4e-3f79dc2da4ac",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bd294b15-3e36-4c79-b647-63c351e3f315", "id": "131335571"}-->',
            },
            {
              _uid: "60850b01-f0f4-4076-a1ff-a4c3cf683308",
              navItem: "85fac544-b6db-4b8b-8520-38599f130bde",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "60850b01-f0f4-4076-a1ff-a4c3cf683308", "id": "131335571"}-->',
            },
            {
              _uid: "fb808f08-a60e-41bb-bc76-fa46071e6334",
              navItem: "7bb8e6e7-031a-4ea4-8a10-fddf2a8076b1",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fb808f08-a60e-41bb-bc76-fa46071e6334", "id": "131335571"}-->',
            },
            {
              _uid: "bc30e6c1-5d12-464a-8a98-a344e591ba32",
              navItem: "132b54f1-2bf0-4ecd-a2a0-ca4431bc508a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc30e6c1-5d12-464a-8a98-a344e591ba32", "id": "131335571"}-->',
            },
            {
              _uid: "407fd4c2-f7f4-4ef6-8c52-806498a958d8",
              navItem: "305153c1-ad33-41a5-9352-1fba00eb6d52",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "407fd4c2-f7f4-4ef6-8c52-806498a958d8", "id": "131335571"}-->',
            },
            {
              _uid: "8cb00dff-84a6-4527-b032-6dd449c28e59",
              navItem: "e1a596f5-46e3-42a6-b03e-5ec2aaf8796f",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8cb00dff-84a6-4527-b032-6dd449c28e59", "id": "131335571"}-->',
            },
            {
              _uid: "12ef8bcf-3ea2-4ddc-a456-2f404094ae3a",
              navItem: "77e5d230-0beb-4e4a-9b63-01b51579615a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "12ef8bcf-3ea2-4ddc-a456-2f404094ae3a", "id": "131335571"}-->',
            },
            {
              _uid: "a047fae6-f155-4a51-b694-538f4bdf6563",
              navItem: "fd305ec9-6faa-4c48-9244-94c10b5cfb13",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a047fae6-f155-4a51-b694-538f4bdf6563", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e016da6f-a01a-4e6b-8987-ae55672f5f65", "id": "131335571"}-->',
        },
        {
          url: "/about/information-for-visitors",
          _uid: "8b75f3d3-6e7b-478e-a471-7e947f4e07c1",
          title: "Information for Visitors",
          target: false,
          navBlok: [
            {
              _uid: "4b1e098b-2430-40db-a852-bc9e87291b35",
              navItem: "d0798247-cf81-4e4e-ab48-59aa3d3dcf07",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4b1e098b-2430-40db-a852-bc9e87291b35", "id": "131335571"}-->',
            },
            {
              _uid: "e4101ac8-a2f0-47f1-b82c-ef49f14be015",
              navItem: "3f64c73e-e0ae-4dad-8bed-efbbfad8d10b",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e4101ac8-a2f0-47f1-b82c-ef49f14be015", "id": "131335571"}-->',
            },
            {
              _uid: "d37e1b83-0f54-400c-a699-b1d9e2196628",
              navItem: "fc514400-7761-4310-bc66-0f774fede80d",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d37e1b83-0f54-400c-a699-b1d9e2196628", "id": "131335571"}-->',
            },
            {
              _uid: "9ebd8500-e00d-4bc5-86bb-4204741ccb6a",
              navItem: "1a1e7d00-0508-4a69-bab3-ca6a1f4c2ca3",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9ebd8500-e00d-4bc5-86bb-4204741ccb6a", "id": "131335571"}-->',
            },
            {
              _uid: "b8f0df8d-22ad-47ec-9e00-3b41c7ec373f",
              navItem: "d1585714-3603-4f1c-87a1-dca107160b94",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b8f0df8d-22ad-47ec-9e00-3b41c7ec373f", "id": "131335571"}-->',
            },
            {
              _uid: "5b772e1f-0e05-41b8-9983-50c5fed2a2c8",
              navItem: "230d607b-b8a0-4023-ac69-9d1ee8e378c7",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "5b772e1f-0e05-41b8-9983-50c5fed2a2c8", "id": "131335571"}-->',
            },
            {
              _uid: "ba9fe949-7eb8-42f6-bc67-b7ea4ae36a57",
              navItem: "4d2b92de-93df-43e7-8cda-7559786ccea5",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ba9fe949-7eb8-42f6-bc67-b7ea4ae36a57", "id": "131335571"}-->',
            },
            {
              _uid: "8751b311-244f-4426-a762-b8da9db94830",
              navItem: "5775b367-c102-434b-91a2-54629175a1a1",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8751b311-244f-4426-a762-b8da9db94830", "id": "131335571"}-->',
            },
            {
              _uid: "b0f8aa62-2ead-45d8-b717-f0817bdf33b5",
              navItem: "73075055-2961-4849-8ac5-499c383e7693",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b0f8aa62-2ead-45d8-b717-f0817bdf33b5", "id": "131335571"}-->',
            },
            {
              _uid: "938b295a-d8a3-4be4-a011-b830e2342a00",
              navItem: "00230285-6ec1-4605-a45d-3c3772fc6f69",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "938b295a-d8a3-4be4-a011-b830e2342a00", "id": "131335571"}-->',
            },
            {
              _uid: "0a37972d-f0b3-46d7-b2df-74384e50c150",
              navItem: "a40606f8-93b6-49a2-be2f-a5072a82042b",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0a37972d-f0b3-46d7-b2df-74384e50c150", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "8b75f3d3-6e7b-478e-a471-7e947f4e07c1", "id": "131335571"}-->',
        },
        {
          url: "/about/university-information",
          _uid: "5fbf537c-1187-4fde-90de-b352b31437db",
          title: "University Information",
          target: false,
          navBlok: [
            {
              _uid: "bba33830-128c-440a-ad88-7f208cbfaa8e",
              navItem: "8245d29c-3a54-46a0-9373-71940a0d0f2b",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bba33830-128c-440a-ad88-7f208cbfaa8e", "id": "131335571"}-->',
            },
            {
              _uid: "70bd2e0b-6a41-47d2-b126-6b6554c47f2a",
              navItem: "d652dad0-840a-4a1d-bf37-deb6fbb54071",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "70bd2e0b-6a41-47d2-b126-6b6554c47f2a", "id": "131335571"}-->',
            },
            {
              _uid: "be8192b3-f0bf-4b96-acec-628c7dbdd8c7",
              navItem: "8f316eed-1e9e-49e0-9f6f-6cf39e9cd8a0",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "be8192b3-f0bf-4b96-acec-628c7dbdd8c7", "id": "131335571"}-->',
            },
            {
              _uid: "ac02e962-de36-4a7e-b637-ddd237b43eaf",
              navItem: "560daae4-29b7-4c13-89e9-072e899cc947",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ac02e962-de36-4a7e-b637-ddd237b43eaf", "id": "131335571"}-->',
            },
            {
              _uid: "2f5127c4-83af-4024-9375-c4b2bcbddfd9",
              navItem: "31fbc1a0-17ff-4508-a705-566a68e27dd3",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2f5127c4-83af-4024-9375-c4b2bcbddfd9", "id": "131335571"}-->',
            },
            {
              _uid: "84b2a4d0-d7fb-48d3-9c6c-b926a769dba9",
              navItem: "8fdb9998-27a4-4a5a-9255-8254d5306d96",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "84b2a4d0-d7fb-48d3-9c6c-b926a769dba9", "id": "131335571"}-->',
            },
            {
              _uid: "ef05b1f5-f5ae-423e-8ebe-e5e578c44ece",
              navItem: "94575d23-c531-4323-be52-941c1aefbb4a",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ef05b1f5-f5ae-423e-8ebe-e5e578c44ece", "id": "131335571"}-->',
            },
            {
              _uid: "80939f9c-f894-42d2-ab4d-14f091b15d5a",
              navItem: "7ad7cc37-d737-4151-bfea-f8b317c37564",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "80939f9c-f894-42d2-ab4d-14f091b15d5a", "id": "131335571"}-->',
            },
            {
              _uid: "0c050b63-7fd6-482b-ae6b-8dc3c187f9a0",
              navItem: "9358ce86-8056-4690-8060-9f7cda4a08cf",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0c050b63-7fd6-482b-ae6b-8dc3c187f9a0", "id": "131335571"}-->',
            },
            {
              _uid: "03548345-4f8e-401d-9fe9-1d7fd1a3ed00",
              navItem: "312997d2-fdda-41a5-affd-01cbba9ec6a0",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "03548345-4f8e-401d-9fe9-1d7fd1a3ed00", "id": "131335571"}-->',
            },
            {
              _uid: "fcf5d63e-3219-4edc-8cbb-2221820ade0c",
              navItem: "b20bc260-8a44-4803-b74e-39d2393799e0",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fcf5d63e-3219-4edc-8cbb-2221820ade0c", "id": "131335571"}-->',
            },
            {
              _uid: "59354853-82dc-4e3c-b736-dc7c6966f226",
              navItem: "41a3c81d-ccd6-48b2-9478-9d37b810f652",
              component: "navItem",
              _editable:
                '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "59354853-82dc-4e3c-b736-dc7c6966f226", "id": "131335571"}-->',
            },
          ],
          component: "navFolder",
          _editable:
            '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "5fbf537c-1187-4fde-90de-b352b31437db", "id": "131335571"}-->',
        },
      ],
      children: [],
      component: "navFolder",
      _editable:
        '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1495a7b3-a353-4427-b236-b5b5fc3575e4", "id": "131335571"}-->',
    },
    {
      _uid: "f1cfbabc-6777-426c-a14e-996ef7264290",
      navItem: "d00892d0-ce36-44d5-acba-6976c323b8e2",
      component: "navItem",
      _editable:
        '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f1cfbabc-6777-426c-a14e-996ef7264290", "id": "131335571"}-->',
    },
    {
      _uid: "0a8bd7ec-8134-4f59-b34c-fbd1e2fab4f2",
      navItem: "62feefa9-ea8d-4589-b000-e84fb6746ce7",
      component: "navItem",
      _editable:
        '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0a8bd7ec-8134-4f59-b34c-fbd1e2fab4f2", "id": "131335571"}-->',
    },
    {
      _uid: "b21535ae-c585-4a8a-aa8f-3f9bd8c58e88",
      navItem: "f6fbe62a-fdc9-40f9-be5a-339fee265b6a",
      component: "navItem",
      _editable:
        '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b21535ae-c585-4a8a-aa8f-3f9bd8c58e88", "id": "131335571"}-->',
    },
  ],
  navLinkArray: [
    {
      uuid: "b300f616-8281-4f57-8eff-52576b99d244",
      name: "Research",
      content: {
        title: "Research",
        url: "/about/faculties-and-schools/faculty-of-science/research",
      },
    },
    {
      uuid: "cdfed783-7776-40f1-8bde-3f0ec4f95c5f",
      name: "Science Graduate School",
      content: {
        title: "Science Graduate School",
        url: "/about/faculties-and-schools/faculty-of-science/science-graduate-school",
      },
    },
    {
      uuid: "8245d29c-3a54-46a0-9373-71940a0d0f2b",
      name: "Vice-Chancellor's Office",
      content: {
        title: "Vice-Chancellor's Office",
        url: "/about/university-information/vice-chancellors-office",
      },
    },
    {
      uuid: "4efd9dae-7fd0-4c1c-8dc1-c6fbe4293585",
      name: "Work Here",
      content: {
        title: "Work Here",
        url: "/about/faculties-and-schools/faculty-of-science/work-here",
      },
    },
    {
      uuid: "d0798247-cf81-4e4e-ab48-59aa3d3dcf07",
      name: "Contact Us and Map",
      content: {
        title: "Contact Us and Map",
        url: "/about/information-for-visitors/contact-information-and-map",
      },
    },
    {
      uuid: "d652dad0-840a-4a1d-bf37-deb6fbb54071",
      name: "Governance",
      content: {
        title: "Governance",
        url: "/about/university-information/governance",
      },
    },
    {
      uuid: "c13fb4d5-06ec-4e72-997e-622ee6ca71d6",
      name: "Facilities",
      content: {
        title: "Facilities",
        url: "/about/faculties-and-schools/faculty-of-science/facilities",
      },
    },
    {
      uuid: "3f64c73e-e0ae-4dad-8bed-efbbfad8d10b",
      name: "Travel and Transport",
      content: {
        title: "Travel and Transport",
        url: "/about/information-for-visitors/travel-and-transport",
      },
    },
    {
      uuid: "8f316eed-1e9e-49e0-9f6f-6cf39e9cd8a0",
      name: "Facts and Figures",
      content: {
        title: "Facts and Figures",
        url: "/about/university-information/facts-and-figures",
      },
    },
    {
      uuid: "79ff0656-83e2-4b86-a91f-08aa19b92f1f",
      name: "School of Biological Sciences",
      content: {
        title: "School of Biological Sciences",
        url: "/about/school-of-biological-sciences",
      },
    },
    {
      uuid: "fc514400-7761-4310-bc66-0f774fede80d",
      name: "Food on Campus",
      content: {
        title: "Food on Campus",
        url: "/about/information-for-visitors/eat-and-drink",
      },
    },
    {
      uuid: "560daae4-29b7-4c13-89e9-072e899cc947",
      name: "Statutory, Legal and Policies",
      content: {
        title: "Statutory, Legal and Policies",
        url: "/about/university-information/statutory-legal-policies",
      },
    },
    {
      uuid: "df088c1e-da38-46a0-9eec-e196dd653fa1",
      name: "International Students",
      content: {
        title: "International Students Home",
        url: "/study/international-students/",
      },
    },
    {
      uuid: "4043d15c-8fda-4d1a-b03c-ed6e73b68a51",
      name: "Prospective Students",
      content: {
        title: "Prospective Students",
        url: "/study/information-for/prospective-students",
      },
    },
    {
      uuid: "cfc76107-5bbd-4a41-9316-635767929a3f",
      name: "Norwich Business School",
      content: {
        title: "Norwich Business School",
        url: "/about/norwich-business-school",
      },
    },
    {
      uuid: "67ed8f64-3dbf-43a2-bde4-af874dca070a",
      name: "School of Chemistry",
      content: {
        title: "School of Chemistry",
        url: "/about/school-of-chemistry",
      },
    },
    {
      uuid: "35619d47-9f20-438b-8b4e-3f79dc2da4ac",
      name: "Partnerships Hub",
      content: {
        title: "Partnerships Hub",
        url: "/about/partnerships-hub",
      },
    },
    {
      uuid: "1a1e7d00-0508-4a69-bab3-ca6a1f4c2ca3",
      name: "Visitor Accommodation",
      content: {
        title: "Visitor Accommodation",
        url: "/about/information-for-visitors/visitor-accommodation",
      },
    },
    {
      uuid: "31fbc1a0-17ff-4508-a705-566a68e27dd3",
      name: "Finance and Procurement",
      content: {
        title: "Finance and Procurement",
        url: "/about/university-information/finance-and-procurement",
      },
    },
    {
      uuid: "78f93250-0808-4db3-bf7f-73499a26237a",
      name: "Global UEA",
      content: {
        title: "Global UEA",
        url: "/global",
      },
    },
    {
      uuid: "c8858397-127f-4ce3-9c1f-c460ee96271f",
      name: "UEA for Business",
      content: {
        title: "UEA for Business",
        url: "/business",
      },
    },
    {
      uuid: "bbd13d93-d66a-4743-a3dd-12f262a8e95a",
      name: "Wellbeing",
      content: {
        title: "Wellbeing",
        url: "/uea-life/student-support/wellbeing",
      },
    },
    {
      uuid: "7e27ba49-9964-4817-967a-f6fbb15a6ccc",
      name: "Meet Us",
      content: {
        title: "Meet Us",
        url: "/study/international-students/meet-with-us-online",
      },
    },
    {
      uuid: "b4632870-1a4f-4175-bfff-2efd93c3874c",
      name: "Mature Students",
      content: {
        title: "Mature Students",
        url: "/study/information-for/mature-students",
      },
    },
    {
      uuid: "082402b4-e6d2-42a3-b709-a0d2a070d97a",
      name: "All Courses",
      content: {
        title: "All Courses",
        url: "/course-finder",
      },
    },
    {
      uuid: "2f4ac7fd-f74c-4cd9-b923-d5640afdfa27",
      name: "School of Economics",
      content: {
        title: "School of Economics",
        url: "/about/school-of-economics",
      },
    },
    {
      uuid: "15e521bf-807c-4ce8-9168-9a144e4854e9",
      name: "School of Computing Sciences",
      content: {
        title: "School of Computing Sciences",
        url: "/about/school-of-computing-sciences",
      },
    },
    {
      uuid: "4adc3087-1651-490a-bb3e-4b7f623bd8e4",
      name: "Faculty of Arts and Humanities",
      content: {
        title: "Faculty of Arts and Humanities",
        url: "/about/faculties-and-schools/faculty-of-arts-and-humanities",
      },
    },
    {
      uuid: "85fac544-b6db-4b8b-8520-38599f130bde",
      name: "Apprenticeships",
      content: {
        title: "Apprenticeships",
        url: "/business/grow-your-business/apprenticeships",
      },
    },
    {
      uuid: "d1585714-3603-4f1c-87a1-dca107160b94",
      name: "University Reception",
      content: {
        title: "University Reception",
        url: "/about/information-for-visitors/reception",
      },
    },
    {
      uuid: "8fdb9998-27a4-4a5a-9255-8254d5306d96",
      name: "IT Information",
      content: {
        title: "IT Information",
        url: "/about/university-information/it-information",
      },
    },
    {
      uuid: "a7b30fab-fea0-4cd0-888a-ae7eebdb7eb9",
      name: "Study at UEA",
      content: {
        title: "Study at UEA",
        url: "/study/international-students",
      },
    },
    {
      uuid: "6ac66223-3435-4174-b062-df09602e4504",
      name: "How We Can Work Together",
      content: {
        title: "How We Can Work Together",
        url: "/business/how-we-can-work-together",
      },
    },
    {
      uuid: "0dd7c816-45bb-44b7-91ae-53aa28f30eb1",
      name: "Disability Support",
      content: {
        title: "Disability Support",
        url: "/uea-life/student-support/disability-support",
      },
    },
    {
      uuid: "aa88de01-35ab-4f51-946c-f90aa2bef0fd",
      name: "Apply",
      content: {
        title: "Apply",
        url: "/apply",
      },
    },
    {
      uuid: "2de5b204-b4ca-4925-a2ea-22965d556251",
      name: "Your Country/Region",
      content: {
        title: "Your Country/Region",
        url: "/study/international-students/country-map",
      },
    },
    {
      uuid: "f6f4e1c4-211d-40c3-bfb5-d0b1779aac22",
      name: "Foundation Years",
      content: {
        title: "Foundation Years",
        url: "/study/information-for/foundation-years",
      },
    },
    {
      uuid: "b2b688de-a876-4010-aa7f-aba659bda2dc",
      name: "Undergraduate",
      content: {
        title: "Undergraduate",
        url: "/course-finder?primaryFilter=Undergraduate",
      },
    },
    {
      uuid: "4a63b181-7738-4f5f-88a0-8118c72281e7",
      name: "School of Education and Lifelong Learning",
      content: {
        title: "School of Education and Lifelong Learning",
        url: "/about/school-of-education-and-lifelong-learning",
      },
    },
    {
      uuid: "de8e6982-080a-4321-b9d6-695c826612eb",
      name: "School of Engineering",
      content: {
        title: "School of Engineering",
        url: "/about/school-of-engineering",
      },
    },
    {
      uuid: "8bdbfb61-4b28-4c2c-bf25-4e816c7d5da6",
      name: "School of Art Media and American Studies",
      content: {
        title: "School of Art Media and American Studies",
        url: "/about/school-of-art-media-and-american-studies",
      },
    },
    {
      uuid: "91d55c80-9347-443d-9e34-9d9f23d0bf12",
      name: "Staff Benefits",
      content: {
        title: "Staff Benefits",
        url: "/about/working-at-uea/staff-benefits",
      },
    },
    {
      uuid: "7bb8e6e7-031a-4ea4-8a10-fddf2a8076b1",
      name: "Enterprise Centre",
      content: {
        title: "Enterprise Centre",
        url: "/business/grow-your-business/a-home-for-your-business",
      },
    },
    {
      uuid: "230d607b-b8a0-4023-ac69-9d1ee8e378c7",
      name: "Visit UEA",
      content: {
        title: "Visit UEA",
        url: "/visit",
      },
    },
    {
      uuid: "94575d23-c531-4323-be52-941c1aefbb4a",
      name: "Sustainability",
      content: {
        title: "Sustainability",
        url: "/about/university-information/sustainability",
      },
    },
    {
      uuid: "6a96d296-4f94-4991-b95d-caef010960c3",
      name: "Sustainable Research",
      content: {
        title: "Sustainable Research",
        url: "/research/about-uea-research-and-impact/research-for-sustainable-development",
      },
    },
    {
      uuid: "fc7b23b2-7d94-4288-a545-70d49899eb7f",
      name: "Access Student Talent",
      content: {
        title: "Access Student Talent",
        url: "/business/access-student-talent",
      },
    },
    {
      uuid: "5cc5f71f-6dfa-4261-85cd-818ceafa565d",
      name: "Explore UEA Research",
      content: {
        title: "Explore UEA Research",
        url: "/research/explore",
      },
    },
    {
      uuid: "ba7e6c19-858d-4313-892d-0a5642701c8c",
      name: "Student Life",
      content: {
        title: "Student Life",
        url: "/uea-life/student-support/student-life",
      },
    },
    {
      uuid: "2546351e-6a31-490a-b229-5d83c0209409",
      name: "Undergraduate",
      content: {
        title: "Undergraduate",
        url: "/apply/undergraduate",
      },
    },
    {
      uuid: "b9074755-9268-467e-aabc-59ae0bbe3785",
      name: "Fees & Scholarships",
      content: {
        title: "Fees & Scholarships",
        url: "/study/international-students/fees-and-scholarships",
      },
    },
    {
      uuid: "4adea32b-ae99-4603-9195-415a34aa6b82",
      name: "Applicants and Offer Holders",
      content: {
        title: "Applicants and Offer Holders",
        url: "/study/information-for/applicants-and-offer-holders",
      },
    },
    {
      uuid: "bda21e3c-bff2-464c-8cd4-50ec0a631175",
      name: "Postgraduate",
      content: {
        title: "Postgraduate",
        url: "/course-finder?primaryFilter=Postgraduate",
      },
    },
    {
      uuid: "1f9cc6b4-e02e-4506-9dfa-64d00ff9aa9b",
      name: "School of International Development",
      content: {
        title: "School of International Development",
        url: "/about/school-of-international-development",
      },
    },
    {
      uuid: "da7c68c7-56a1-49ea-a147-cf9d4e123d57",
      name: "School of Environmental Sciences",
      content: {
        title: "School of Environmental Sciences",
        url: "/about/school-of-environmental-sciences",
      },
    },
    {
      uuid: "18ff8ead-3aea-4008-be2d-5054d1ae6979",
      name: "School of History",
      content: {
        title: "School of History",
        url: "/about/school-of-history",
      },
    },
    {
      uuid: "99faf738-11a9-42cd-aa08-d86218a4eda4",
      name: "Current Vacancies",
      content: {
        title: "Current Vacancies",
        url: "https://myview.uea.ac.uk/webrecruitment/",
      },
    },
    {
      uuid: "7ce3d49e-2ce5-4a9e-b0da-7498b2e8f5d8",
      name: "Alumni",
      content: {
        title: "Alumni",
        url: "/about/alumni-and-supporters/",
      },
    },
    {
      uuid: "132b54f1-2bf0-4ecd-a2a0-ca4431bc508a",
      name: "Global Engagement",
      content: {
        title: "Global Engagement",
        url: "/about/partnerships-hub/global-engagement",
      },
    },
    {
      uuid: "4d2b92de-93df-43e7-8cda-7559786ccea5",
      name: "IT Services for Visitors",
      content: {
        title: "IT Services for Visitors",
        url: "/about/university-information/it-information/information-for-visitors",
      },
    },
    {
      uuid: "7ad7cc37-d737-4151-bfea-f8b317c37564",
      name: "Corporate Social Responsibility",
      content: {
        title: "Corporate Social Responsibility",
        url: "/about/university-information/corporate-social-responsibility",
      },
    },
    {
      uuid: "a9751b51-7f57-44c6-b819-1ce235862c83",
      name: "Postgraduate Research",
      content: {
        title: "Postgraduate Research",
        url: "/research/research-with-us/postgraduate-research",
      },
    },
    {
      uuid: "15e20977-8cb4-492a-ab73-b41b2bcb7a71",
      name: "Grow Your Business",
      content: {
        title: "Grow Your Business",
        url: "/business/grow-your-business",
      },
    },
    {
      uuid: "216bae1f-764d-4ebb-a180-2151418a7a95",
      name: "Learning Enhancement",
      content: {
        title: "Learning Enhancement",
        url: "/uea-life/student-support/learning-enhancement",
      },
    },
    {
      uuid: "13e6c8e3-4a68-4425-8899-50f943c19297",
      name: "Campus Life",
      content: {
        title: "Campus Life",
        url: "/uea-life/campus-life",
      },
    },
    {
      uuid: "c3559433-a45c-437f-b6b7-b74f32f614c3",
      name: "Postgraduate",
      content: {
        title: "Postgraduate",
        url: "/apply/postgraduate",
      },
    },
    {
      uuid: "f46975f6-6a3a-45c0-92db-22d866594b81",
      name: "Visit Us",
      content: {
        title: "Visit Us",
        url: "/study/visit/",
      },
    },
    {
      uuid: "a8c48c4f-8175-4b14-8747-3d1318d27cd2",
      name: "Students from the EU",
      content: {
        title: "Students from the EU",
        url: "/study/international-students/students-from-the-eu",
      },
    },
    {
      uuid: "36276c32-e4f2-4332-a26f-179ccd5d032a",
      name: "New Students",
      content: {
        title: "New Students",
        url: "/welcome",
      },
    },
    {
      uuid: "02da4b08-5a7c-484e-9933-c10d2468042a",
      name: "PhD/Doctorate",
      content: {
        title: "PhD/Doctorate",
        url: "/course-finder?primaryFilter=PhD%2FDoctorate",
      },
    },
    {
      uuid: "e525f761-fb58-4255-8a27-e7f193982b0b",
      name: "Law School",
      content: {
        title: "Law School",
        url: "/about/law-school",
      },
    },
    {
      uuid: "cdc3112a-099e-4f5b-85ce-2e631cbb3736",
      name: "School of Mathematics",
      content: {
        title: "School of Mathematics",
        url: "/about/school-of-mathematics",
      },
    },
    {
      uuid: "b23d4d43-f71a-4b30-ba9a-4dfd7b82c1ef",
      name: "Interdisciplinary Institute for the Humanities",
      content: {
        title: "Interdisciplinary Institute for the Humanities",
        url: "/about/interdisciplinary-institute-for-the-humanities",
      },
    },
    {
      uuid: "0fa015c6-f1be-4849-baa9-45fa913dd50a",
      name: "Before You Join",
      content: {
        title: "Before You Join",
        url: "/about/working-at-uea/before-you-join",
      },
    },
    {
      uuid: "731ded77-5b69-4504-9d5f-273560b36efb",
      name: "Careers",
      content: {
        title: "Careers",
        url: "/about/alumni-and-supporters/careers",
      },
    },
    {
      uuid: "305153c1-ad33-41a5-9352-1fba00eb6d52",
      name: "Interns and Placements",
      content: {
        title: "Interns and Placements",
        url: "/business/access-student-talent",
      },
    },
    {
      uuid: "5775b367-c102-434b-91a2-54629175a1a1",
      name: "Sportspark",
      content: {
        title: "Sportspark",
        url: "https://www.sportspark.co.uk/",
      },
    },
    {
      uuid: "9358ce86-8056-4690-8060-9f7cda4a08cf",
      name: "Campus and Community",
      content: {
        title: "Campus and Community",
        url: "/about/university-information/campus-and-community",
      },
    },
    {
      uuid: "bb535e35-4f5a-46c0-ad6d-3e52e5eff950",
      name: "Global Engagement",
      content: {
        title: "Global Engagement",
        url: "/about/partnerships-hub/global-engagement",
      },
    },
    {
      uuid: "0baf09c3-0d3c-495d-a0bf-75e45573a11d",
      name: "Secure Funding",
      content: {
        title: "Secure Funding",
        url: "/business/secure-funding",
      },
    },
    {
      uuid: "3d943cea-f8f4-48b8-a0f5-bde786f0b4ec",
      name: "Research With Us",
      content: {
        title: "Research With Us",
        url: "/research/research-with-us/",
      },
    },
    {
      uuid: "7d13e53b-36b1-43fb-8702-5023e80dc81e",
      name: "About UEA Research and Impact",
      content: {
        title: "About UEA Research and Impact",
        url: "/research/about-uea-research-and-impact",
      },
    },
    {
      uuid: "35d66fb1-94f0-46ca-925b-7a6ab1b4c202",
      name: "International Students",
      content: {
        title: "International Students",
        url: "/uea-life/student-support/international-student-support",
      },
    },
    {
      uuid: "2a243b90-075f-4c69-9bb6-8ecf11f08b4b",
      name: "Norwich & Beyond",
      content: {
        title: "Norwich & Beyond",
        url: "/uea-life/norwich-and-beyond",
      },
    },
    {
      uuid: "9b7deafe-dea8-4940-b7d1-c1c7380a51a8",
      name: "Fees",
      content: {
        title: "Fees",
        url: "/study/fees-and-funding/fees",
      },
    },
    {
      uuid: "a5a20d69-65ee-43c2-b056-c1e80aeb608a",
      name: "Apprenticeships",
      content: {
        title: "Apprenticeships",
        url: "/apply/apprenticeships",
      },
    },
    {
      uuid: "7d7165e3-e6f3-4a24-9073-2bb463e5b66f",
      name: "Undergraduate Open Days",
      content: {
        title: "Undergraduate Open Days",
        url: "/study/visit/undergraduate-open-days",
      },
    },
    {
      uuid: "3b6c1789-faaa-404a-ac3a-feb978ad5973",
      name: "Inbound Study Abroad & Exchange",
      content: {
        title: "Inbound Study Abroad & Exchange",
        url: "/study/study-abroad-and-exchange/inbound-study-abroad-and-exchange",
      },
    },
    {
      uuid: "6d356bcc-6ca0-4d3a-95a5-7f7a009104cc",
      name: "INTO UEA",
      content: {
        title: "INTO UEA",
        url: "/study/international-students/into-uea",
      },
    },
    {
      uuid: "b36a628a-b17d-4511-8e1e-6294961a3fbc",
      name: "Graduates",
      content: {
        title: "Graduates",
        url: "/study/information-for/graduates",
      },
    },
    {
      uuid: "b9045368-1ae1-4370-89de-daa002c55a6b",
      name: "Foundation Year",
      content: {
        title: "Foundation Year",
        url: "/course-finder?primaryFilter=Undergraduate&secondaryFilter=Foundation%20Year&year",
      },
    },
    {
      uuid: "359c2940-2440-44b9-bbf0-60ae6278b03d",
      name: "School of Psychology",
      content: {
        title: "School of Psychology",
        url: "/about/school-of-psychology",
      },
    },
    {
      uuid: "f65aa946-1033-43c6-b564-2172cc849366",
      name: "Natural Sciences",
      content: {
        title: "Natural Sciences",
        url: "/about/natural-sciences",
      },
    },
    {
      uuid: "a95e6541-0e99-4516-b53b-6091e34b7870",
      name: "Faculty of Medicine and Health",
      content: {
        title: "Faculty of Medicine and Health",
        url: "/about/faculties-and-schools/faculty-of-medicine-and-health",
      },
    },
    {
      uuid: "881545e2-2a1a-4a10-8659-ed096d333082",
      name: "School of Literature, Drama and Creative Writing",
      content: {
        title: "School of Literature, Drama and Creative Writing",
        url: "/about/school-of-literature-drama-and-creative-writing",
      },
    },
    {
      uuid: "ad6b083b-e169-4991-8a54-db7e4bae7340",
      name: "Explore Norwich & Beyond",
      content: {
        title: "Explore Norwich & Beyond",
        url: "/uea-life/norwich-and-beyond",
      },
    },
    {
      uuid: "186e145d-8c0e-481f-91f1-c7e0c5f22bfb",
      name: "Giving-to-UEA",
      content: {
        title: "Giving-to-UEA",
        url: "/about/giving-to-uea",
      },
    },
    {
      uuid: "e1a596f5-46e3-42a6-b03e-5ec2aaf8796f",
      name: "Partnerships in Doctoral Training",
      content: {
        title: "Partnerships in Doctoral Training",
        url: "/research/research-with-us/postgraduate-research/latest-phds-and-research-studentships/partnerships-in-doctoral-training",
      },
    },
    {
      uuid: "73075055-2961-4849-8ac5-499c383e7693",
      name: "Sainsbury Centre",
      content: {
        title: "Sainsbury Centre",
        url: "/about/information-for-visitors/sainsbury-centre",
      },
    },
    {
      uuid: "312997d2-fdda-41a5-affd-01cbba9ec6a0",
      name: "UEA 2030 Vision",
      content: {
        title: "UEA 2030 Vision",
        url: "/about/university-information/uea-2030-vision",
      },
    },
    {
      uuid: "9a1f0b42-d887-40a3-be52-b4d4cfd1ffec",
      name: "University of Sanctuary",
      content: {
        title: "University of Sanctuary",
        url: "/about/university-information/corporate-social-responsibility/university-of-sanctuary",
      },
    },
    {
      uuid: "e6f2e934-c3d5-4cd1-a29c-737ef2967a37",
      name: "Access Entrepreneurship and Innovation",
      content: {
        title: "Access Entrepreneurship and Innovation",
        url: "/business/access-entrepreneurship-and-innovation",
      },
    },
    {
      uuid: "1da3864f-9fa2-4737-a7c4-da7d9065fcd4",
      name: "Postgraduate Research",
      content: {
        title: "Postgraduate Research",
        url: "/research/research-with-us/postgraduate-research",
      },
    },
    {
      uuid: "6ee4bbe6-06ee-4601-8197-3890eb15db09",
      name: "ClimateUEA",
      content: {
        title: "ClimateUEA",
        url: "/climate",
      },
    },
    {
      uuid: "8c0853d4-ab99-4143-a11e-3fb317948ac0",
      name: "Living on/off Campus",
      content: {
        title: "Living on/off Campus",
        url: "/uea-life/accommodation/",
      },
    },
    {
      uuid: "9779f9b6-5a7e-4681-b4aa-f15a47e4af7f",
      name: "Careers and Employability",
      content: {
        title: "Careers and Employability",
        url: "/uea-life/student-support/careers",
      },
    },
    {
      uuid: "f768d918-f78e-4119-a6a3-04b5a6499b19",
      name: "Funding Options",
      content: {
        title: "Funding Options",
        url: "/study/fees-and-funding/funding-options",
      },
    },
    {
      uuid: "28a446f4-d44c-4aaa-880f-5b1bb72dc8b9",
      name: "International",
      content: {
        title: "International",
        url: "/apply/international",
      },
    },
    {
      uuid: "07410222-c457-4a17-89ad-a1a640960ee7",
      name: "Postgraduate Open Days",
      content: {
        title: "Postgraduate Open Days",
        url: "/study/visit/postgraduate-open-days",
      },
    },
    {
      uuid: "c5d7d8e6-be0f-47cd-b6ab-1b5d81fd2eef",
      name: "Summer Study at UEA",
      content: {
        title: "Summer Study at UEA",
        url: "/study/study-abroad-and-exchange/summer-study-and-short-courses-at-uea",
      },
    },
    {
      uuid: "c83bc6b1-5f77-4d46-be54-877a59c9f728",
      name: "Accommodation for International Students",
      content: {
        title: "Accommodation for International Students",
        url: "/study/international-students/accommodation-for-international-students",
      },
    },
    {
      uuid: "733b2f69-0a95-4f85-925a-a73d1d20c127",
      name: "Young People",
      content: {
        title: "Young People",
        url: "/study/information-for/young-people",
      },
    },
    {
      uuid: "1ad43f5a-9ef3-4f2e-bffc-b4ab6b411077",
      name: "Short Course/Professional Development",
      content: {
        title: "Short Course/Professional Development",
        url: "/course-finder?primaryFilter=Short%20Course%20%2F%20Professional%20Development",
      },
    },
    {
      uuid: "6b8234ab-6966-4628-baab-62d6d6798362",
      name: "School of Social Work",
      content: {
        title: "School of Social Work",
        url: "/about/school-of-social-work",
      },
    },
    {
      uuid: "b172c458-d17f-4966-863f-7af0856f3a92",
      name: "School of Pharmacy",
      content: {
        title: "School of Pharmacy",
        url: "/about/school-of-pharmacy",
      },
    },
    {
      uuid: "6178240b-539c-409a-a5c0-6227b5706d51",
      name: "Norwich Medical School",
      content: {
        title: "Norwich Medical School",
        url: "/about/norwich-medical-school",
      },
    },
    {
      uuid: "4e74db4d-de35-4229-9f77-c0a9a043efcb",
      name: "School of Politics, Philosophy and Communication Studies",
      content: {
        title: "School of Politics, Philosophy and Communication Studies",
        url: "/about/school-of-politics-philosophy-and-communication-studies",
      },
    },
    {
      uuid: "87c83877-fb81-4c3c-979d-a7b229b290af",
      name: "Explore the Library",
      content: {
        title: "Explore the Library",
        url: "/about/library-and-archives/explore-the-library",
      },
    },
    {
      uuid: "9dacc093-1958-4f2e-ad97-559627811c4f",
      name: "Nursery",
      content: {
        title: "Nursery",
        url: "/uea-life/campus-life/campus-facilities/nursery",
      },
    },
    {
      uuid: "b39712ec-8400-46b4-83c3-5c2cd5812324",
      name: "Graduation",
      content: {
        title: "Graduation",
        url: "/about/alumni-and-supporters/graduation",
      },
    },
    {
      uuid: "77e5d230-0beb-4e4a-9b63-01b51579615a",
      name: "Schools",
      content: {
        title: "Schools",
        url: "/about/partnerships-hub/schools",
      },
    },
    {
      uuid: "00230285-6ec1-4605-a45d-3c3772fc6f69",
      name: "Norwich Research Park",
      content: {
        title: "Norwich Research Park",
        url: "/about/information-for-visitors/norwich-research-park",
      },
    },
    {
      uuid: "b20bc260-8a44-4803-b74e-39d2393799e0",
      name: "UEA Values",
      content: {
        title: "UEA Values",
        url: "/about/university-information/vice-chancellors-office/uea-values",
      },
    },
    {
      uuid: "13d92467-9f26-438b-a2aa-17a74006e593",
      name: "UEA for Business",
      content: {
        title: "UEA for Business",
        url: "/business/how-we-can-work-together",
      },
    },
    {
      uuid: "b919247c-f0a6-4a1a-8861-ec7719daedab",
      name: "Use Our Facilities",
      content: {
        title: "Use Our Facilities",
        url: "/business/use-our-facilities",
      },
    },
    {
      uuid: "54c8e57a-3d21-43cc-bfd9-a534e5c63f7f",
      name: "Fellowships",
      content: {
        title: "Fellowships",
        url: "/research/research-with-us/fellowships",
      },
    },
    {
      uuid: "7bce6a8c-d040-4a8c-bff5-85005f270c38",
      name: "CreativeUEA",
      content: {
        title: "CreativeUEA",
        url: "/creative",
      },
    },
    {
      uuid: "c8c74014-678a-46c4-836b-f15fc56b61e5",
      name: "Prospective Students",
      content: {
        title: "Prospective Students",
        url: "/uea-life/accommodation/prospective-students",
      },
    },
    {
      uuid: "74d991fe-dc08-4004-9496-26ffd5dd4e8b",
      name: "Support After UEA",
      content: {
        title: "Support After UEA",
        url: "/uea-life/student-support/support-after-uea",
      },
    },
    {
      uuid: "34dff977-464f-402a-849a-029b99d6cb3b",
      name: "Scholarship Finder",
      content: {
        title: "Scholarship Finder",
        url: "/study/fees-and-funding/scholarship-finder",
      },
    },
    {
      uuid: "0da8928c-829a-47fb-a6fe-7d51ea99845f",
      name: "Register Interest",
      content: {
        title: "Register Interest",
        url: "/apply/register-interest",
      },
    },
    {
      uuid: "fcaf0dbc-32dc-4e54-95f5-d6696c386d7d",
      name: "Campus Tours",
      content: {
        title: "Campus Tours",
        url: "/study/visit/campus-tours",
      },
    },
    {
      uuid: "54330666-26e9-4980-a82b-3feecd24ed11",
      name: "Outgoing Study Abroad",
      content: {
        title: "Outgoing Study Abroad",
        url: "/study/study-abroad-and-exchange/outgoing-study-abroad",
      },
    },
    {
      uuid: "f22ea6cc-b963-4d8e-a3dd-33fec50d966c",
      name: "Visa Advice",
      content: {
        title: "Visa Advice",
        url: "/study/international-students/visa-advice",
      },
    },
    {
      uuid: "3dc07490-2a65-4c6d-bba9-5491d784b463",
      name: "Parents and Carers",
      content: {
        title: "Parents and Carers",
        url: "/study/information-for/parents",
      },
    },
    {
      uuid: "9dbff00f-4224-4b3c-949e-38d9cbd93267",
      name: "Summer School",
      content: {
        title: "Summer School",
        url: "/course-finder?primaryFilter=Summer%20School",
      },
    },
    {
      uuid: "8127b58d-3646-4b41-8e44-0db12ff2b518",
      name: "Sociology",
      content: {
        title: "Sociology",
        url: "/about/sociology",
      },
    },
    {
      uuid: "43003844-9012-4755-b4ba-a4075dec6adc",
      name: "Physics",
      content: {
        title: "Physics",
        url: "/about/physics",
      },
    },
    {
      uuid: "5d03d9df-4309-4c6f-a80b-178511e9c6bd",
      name: "School of Health Sciences",
      content: {
        title: "School of Health Sciences",
        url: "/about/school-of-health-sciences",
      },
    },
    {
      uuid: "5c792102-c249-4746-bd37-3cf5f345fa09",
      name: "Liberal Arts",
      content: {
        title: "Liberal Arts",
        url: "/about/liberal-arts",
      },
    },
    {
      uuid: "eec2b027-1f1c-4da6-809d-39af36c0acae",
      name: "Archives and Special Collections",
      content: {
        title: "Archives and Special Collections",
        url: "/about/library-and-archives/archives-and-special-collections",
      },
    },
    {
      uuid: "ff7e5cd6-9f22-4d2c-a73d-3555ff1d9086",
      name: "Retirement Association",
      content: {
        title: "Retirement Association",
        url: "/about/working-at-uea/retirement-association",
      },
    },
    {
      uuid: "4d09f1f8-fcbf-44db-b27f-abe3cc5467c8",
      name: "Student Records",
      content: {
        title: "Student Records",
        url: "/about/alumni-and-supporters/student-records",
      },
    },
    {
      uuid: "fd305ec9-6faa-4c48-9244-94c10b5cfb13",
      name: "Sponsors and Donors",
      content: {
        title: "Sponsors and Donors",
        url: "/about/giving-to-uea",
      },
    },
    {
      uuid: "a40606f8-93b6-49a2-be2f-a5072a82042b",
      name: "Norwich & Beyond",
      content: {
        title: "Norwich & Beyond",
        url: "/uea-life/norwich-and-beyond",
      },
    },
    {
      uuid: "41a3c81d-ccd6-48b2-9478-9d37b810f652",
      name: "UEA Plan 2016-2020",
      content: {
        title: "UEA Plan 2016-2020",
        url: "/about/university-information/uea-plan-2016-2020",
      },
    },
    {
      uuid: "ad5f9e93-cbc6-49a1-90ab-e48e64a97241",
      name: "Alumni Activities",
      content: {
        title: "Alumni Activities",
        url: "/about/alumni-and-supporters/alumni/get-involved/events/global-gathering",
      },
    },
    {
      uuid: "f9ed0dbe-04cc-47d8-8d5f-a434667548ac",
      name: "Publications",
      content: {
        title: "Publications",
        url: "/business/publications",
      },
    },
    {
      uuid: "422fb32b-b057-4b75-9e33-4066f7069cfc",
      name: "Working at UEA",
      content: {
        title: "Working at UEA",
        url: "/about/working-at-uea",
      },
    },
    {
      uuid: "6779adb2-83a5-4b40-89e2-5a7912fe260e",
      name: "Research Groups and Centres",
      content: {
        title: "Research Groups and Centres",
        url: "/groups-and-centres",
      },
    },
    {
      uuid: "40115fad-2c11-43fd-9a27-d3802465b176",
      name: "Application Process",
      content: {
        title: "Application Process",
        url: "/uea-life/accommodation/application-process",
      },
    },
    {
      uuid: "d3448b3e-37e1-4415-a1a4-92b405fac044",
      name: "Student Services Live Chat",
      content: {
        title: "Student Services Live Chat",
        url: "/uea-life/student-support/live-chat",
      },
    },
    {
      uuid: "4fa621b5-4087-47b7-841d-5b5efddd552f",
      name: "Events",
      content: {
        title: "Events",
        url: "/uea-life/events",
      },
    },
    {
      uuid: "10cb63bf-4f93-4059-89fb-10c6ad6eb885",
      name: "Bursaries",
      content: {
        title: "Bursaries",
        url: "/study/fees-and-funding/bursaries",
      },
    },
    {
      uuid: "f09f4cb3-89df-400a-b41b-654b9be44f31",
      name: "Find a Course",
      content: {
        title: "Find a Course",
        url: "/course-finder",
      },
    },
    {
      uuid: "2d0b806f-6650-43a2-b5c4-d1068a07ff2f",
      name: "Plan Your Visit",
      content: {
        title: "Plan Your Visit",
        url: "/study/visit/plan-your-visit",
      },
    },
    {
      uuid: "ccae13be-e87c-4ad2-8f0c-dc1bbbe0bc34",
      name: "Erasmus Programme",
      content: {
        title: "Erasmus Programme",
        url: "/study/study-abroad-and-exchange/erasmus-programme",
      },
    },
    {
      uuid: "23cb8f2c-543b-4408-85db-45ff3d8a37e2",
      name: "How to Apply",
      content: {
        title: "How to Apply",
        url: "/apply/international",
      },
    },
    {
      uuid: "c3fa4f4a-29cb-431d-9e1e-e94ef82926dd",
      name: "Teachers",
      content: {
        title: "Teachers",
        url: "/study/information-for/teachers",
      },
    },
    {
      uuid: "7d6a5f3c-aa63-4481-a044-eadc803dd08f",
      name: "International Preparation",
      content: {
        title: "International Preparation",
        url: "/course-finder?primaryFilter=International%20Preparation",
      },
    },
    {
      uuid: "4ec1f4d3-44d5-428f-a906-3ded546156d8",
      name: "Accessibility",
      content: {
        title: "Accessibility",
        url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/website",
      },
    },
    {
      uuid: "08d76fe9-6d3d-4f56-800c-6e6c7e562508",
      name: "Welcome",
      content: {
        title: "Welcome",
        url: "/welcome",
      },
    },
    {
      uuid: "9d3a6616-87be-40a1-9ca7-129c99cf46f1",
      name: "News",
      content: {
        title: "News",
        url: "/about/news",
      },
    },
    {
      uuid: "0926acf0-1a95-4a7f-9b38-a5813b9e4d49",
      name: "Apprenticeships",
      content: {
        title: "Apprenticeships",
        url: "/apprenticeships",
      },
    },
    {
      uuid: "166faf7f-6c56-4588-a143-58bf14f6c9fe",
      name: "Legal Statements",
      content: {
        title: "Legal Statements",
        url: "https://www.uea.ac.uk/about/university-information/statutory-legal-policies",
      },
    },
    {
      uuid: "47076cb7-f6fa-4ae8-a02f-5c8981826c2b",
      name: "New Students",
      content: {
        title: "New Students",
        url: "https://www.uea.ac.uk/welcome",
      },
    },
    {
      uuid: "313ff16a-21e5-48b5-9e88-8528f45da2b6",
      name: "Contact Us and Map",
      content: {
        title: "Contact Us and Map",
        url: "/about/information-for-visitors/contact-information-and-map",
      },
    },
    {
      uuid: "ab9992b5-d7f9-43f6-b757-36576c6aa966",
      name: "Incoming Study Abroad",
      content: {
        title: "Incoming Study Abroad",
        url: "/study/study-abroad-and-exchange/incoming-study-abroad-and-exchange",
      },
    },
    {
      uuid: "46b3adbe-c273-4fb8-b67d-7c3a13382b45",
      name: "Statement on Modern Slavery",
      content: {
        title: "Statement on Modern Slavery",
        url: "https://www.uea.ac.uk/about/university-information/statutory-legal-policies/modern-slavery-statement",
      },
    },
    {
      uuid: "1fab50a3-264e-4062-ae41-8e3a9e515672",
      name: "Cookie Policy",
      content: {
        title: "Cookie Policy",
        url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/website",
      },
    },
    {
      uuid: "cc6f86ec-a212-4f47-8b8c-22e2150290f0",
      name: "Data Protection",
      content: {
        title: "Data Protection",
        url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/data-protection",
      },
    },
    {
      uuid: "a218248b-dcef-4596-8af9-00a27ec322c2",
      name: "Equality, Diversity and Inclusion",
      content: {
        title: "Equality, Diversity and Inclusion",
        url: "/about/equality-diversity-and-inclusion",
      },
    },
    {
      uuid: "d00892d0-ce36-44d5-acba-6976c323b8e2",
      name: "Donate",
      content: {
        title: "Donate",
        url: "/donate",
      },
    },
    {
      uuid: "62feefa9-ea8d-4589-b000-e84fb6746ce7",
      name: "Ukraine: How you can help",
      content: {
        title: "Ukraine: How you can help",
        url: "/about/news/statements/ukraine",
      },
    },
    {
      uuid: "f6fbe62a-fdc9-40f9-be5a-339fee265b6a",
      name: "COVID-19 appeal",
      content: {
        title: "COVID-19 appeal",
        url: "covid-19-appeal",
      },
    },
  ],
  utilityItemArray: [
    {
      "uuid": "fffa2ab6-25a9-4a35-84ff-1fc1c5f991c7",
      "name": "New Students",
      "content": {
        "title": "New Students",
        "url": "/welcome"
      }
    },
    {
      "uuid": "eac2ce55-f301-4dca-a566-80a0d0050af2",
      "name": "Login",
      "content": {
        "title": "Login",
        "url": "https://my.uea.ac.uk/my-dashboard"
      }
    },
    {
      "uuid": "1f7009ba-3670-4700-a040-b1712c003a72",
      "name": "Vacancies",
      "content": {
        "title": "Vacancies",
        "url": "https://myview.uea.ac.uk/webrecruitment/"
      }
    }
  ],
  quickLinksArray: [
    {
      "uuid": "d945f7a5-3377-4da8-bf12-59aab53b712e",
      "name": "Research",
      "content": {
        "title": "Research",
        "url": "/Research"
      }
    },
    {
      "uuid": "11e44ae2-07b6-4ab5-934d-93f5bd21a410",
      "name": "Campus",
      "content": {
        "title": "Campus",
        "url": "/Campus"
      }
    },
    {
      "uuid": "cac9856d-6525-4332-a683-0464a5f9ffa2",
      "name": "International",
      "content": {
        "title": "International",
        "url": "/International"
      }
    }
  ],
};
// Light.args = {
//   background: "light",
//   navItemArray: [
//     {
//       url: "/study",
//       _uid: "da720909-b536-4a52-874f-c615a5d73102",
//       title: "Study",
//       target: false,
//       navBlok: [
//         {
//           url: "/course-finder",
//           _uid: "40247380-5559-4c86-9871-efa646461ffa",
//           title: "Course Finder",
//           target: false,
//           navBlok: [
//             {
//               _uid: "4a40e79f-95fa-411e-bb4d-134a5302d1c6",
//               navItem: "082402b4-e6d2-42a3-b709-a0d2a070d97a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4a40e79f-95fa-411e-bb4d-134a5302d1c6", "id": "131335571"}-->',
//             },
//             {
//               _uid: "7733d941-d25b-4ac6-96ba-04eb66a676c7",
//               navItem: "b2b688de-a876-4010-aa7f-aba659bda2dc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7733d941-d25b-4ac6-96ba-04eb66a676c7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d2f5d9ba-5f11-462a-99f2-4d4a075c8865",
//               navItem: "bda21e3c-bff2-464c-8cd4-50ec0a631175",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d2f5d9ba-5f11-462a-99f2-4d4a075c8865", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0f4dc873-9378-47e8-97c5-d5140e52ebbd",
//               navItem: "02da4b08-5a7c-484e-9933-c10d2468042a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0f4dc873-9378-47e8-97c5-d5140e52ebbd", "id": "131335571"}-->',
//             },
//             {
//               _uid: "89d3b91f-8bf9-4dee-9dc1-2907264610b4",
//               navItem: "b9045368-1ae1-4370-89de-daa002c55a6b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "89d3b91f-8bf9-4dee-9dc1-2907264610b4", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bfbaf0ce-a359-4a17-9a6a-5d91b1e1b849",
//               navItem: "1ad43f5a-9ef3-4f2e-bffc-b4ab6b411077",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bfbaf0ce-a359-4a17-9a6a-5d91b1e1b849", "id": "131335571"}-->',
//             },
//             {
//               _uid: "97b0c9dc-2ce6-40cf-a233-2005e660f0aa",
//               navItem: "9dbff00f-4224-4b3c-949e-38d9cbd93267",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "97b0c9dc-2ce6-40cf-a233-2005e660f0aa", "id": "131335571"}-->',
//             },
//             {
//               _uid: "9d0eb615-83a2-4fa0-978c-58268613306f",
//               navItem: "7d6a5f3c-aa63-4481-a044-eadc803dd08f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9d0eb615-83a2-4fa0-978c-58268613306f", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e48feaa4-6b05-4e92-9fda-735e6bf2ead0",
//               navItem: "0926acf0-1a95-4a7f-9b38-a5813b9e4d49",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e48feaa4-6b05-4e92-9fda-735e6bf2ead0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "18cda972-fdfe-4ec8-b591-674e636538e4",
//               navItem: "ab9992b5-d7f9-43f6-b757-36576c6aa966",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "18cda972-fdfe-4ec8-b591-674e636538e4", "id": "131335571"}-->',
//             },
//           ],
//           children: [],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "40247380-5559-4c86-9871-efa646461ffa", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/information-for",
//           _uid: "61f4ae78-76f3-441a-9635-c0734b9119e0",
//           title: "Information For",
//           target: false,
//           navBlok: [
//             {
//               _uid: "4e257c37-4443-4b66-97ff-dfed9d9374dd",
//               navItem: "4043d15c-8fda-4d1a-b03c-ed6e73b68a51",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4e257c37-4443-4b66-97ff-dfed9d9374dd", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e49088a5-6532-44ef-9195-d049c1c1fdb0",
//               navItem: "b4632870-1a4f-4175-bfff-2efd93c3874c",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e49088a5-6532-44ef-9195-d049c1c1fdb0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "c793a9e2-ffe4-4681-935c-650199b861f5",
//               navItem: "f6f4e1c4-211d-40c3-bfb5-d0b1779aac22",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c793a9e2-ffe4-4681-935c-650199b861f5", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b459139f-e766-4704-8c19-8f8458574028",
//               navItem: "4adea32b-ae99-4603-9195-415a34aa6b82",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b459139f-e766-4704-8c19-8f8458574028", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4a2d5e42-c6d6-4dc5-81e8-3e03d11c1337",
//               navItem: "36276c32-e4f2-4332-a26f-179ccd5d032a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4a2d5e42-c6d6-4dc5-81e8-3e03d11c1337", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4b9994b9-9afc-4279-904e-a6b7d661f2d9",
//               navItem: "b36a628a-b17d-4511-8e1e-6294961a3fbc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4b9994b9-9afc-4279-904e-a6b7d661f2d9", "id": "131335571"}-->',
//             },
//             {
//               _uid: "a524a26d-1505-4276-9d92-3bd804a3a1c7",
//               navItem: "733b2f69-0a95-4f85-925a-a73d1d20c127",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a524a26d-1505-4276-9d92-3bd804a3a1c7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "91138691-3d3c-4626-b10b-445544c161b0",
//               navItem: "3dc07490-2a65-4c6d-bba9-5491d784b463",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "91138691-3d3c-4626-b10b-445544c161b0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4efdfb03-af87-4669-92bc-be377fab2723",
//               navItem: "c3fa4f4a-29cb-431d-9e1e-e94ef82926dd",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4efdfb03-af87-4669-92bc-be377fab2723", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "61f4ae78-76f3-441a-9635-c0734b9119e0", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/international-students",
//           _uid: "1e301632-110e-46df-8c76-ccb949ad041b",
//           title: "International Students",
//           target: false,
//           navBlok: [
//             {
//               _uid: "3de1e81a-d80b-49b3-a7b6-2d8f4d8f8a24",
//               navItem: "df088c1e-da38-46a0-9eec-e196dd653fa1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "3de1e81a-d80b-49b3-a7b6-2d8f4d8f8a24", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bce40591-5c61-4495-84ab-d176890c4adb",
//               navItem: "7e27ba49-9964-4817-967a-f6fbb15a6ccc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bce40591-5c61-4495-84ab-d176890c4adb", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8ab414eb-0387-45f4-a0a7-2206335f8ca6",
//               navItem: "2de5b204-b4ca-4925-a2ea-22965d556251",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8ab414eb-0387-45f4-a0a7-2206335f8ca6", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8cdab14b-a794-4263-9200-26cef467b029",
//               navItem: "b9074755-9268-467e-aabc-59ae0bbe3785",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8cdab14b-a794-4263-9200-26cef467b029", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b705bf7e-ece3-480d-a8f8-225f8aa763ee",
//               navItem: "a8c48c4f-8175-4b14-8747-3d1318d27cd2",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b705bf7e-ece3-480d-a8f8-225f8aa763ee", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4367303f-bc9b-4c89-91ff-f018508c406c",
//               navItem: "6d356bcc-6ca0-4d3a-95a5-7f7a009104cc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4367303f-bc9b-4c89-91ff-f018508c406c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6c64c538-8aca-44e2-9998-97bddfb78d09",
//               navItem: "c83bc6b1-5f77-4d46-be54-877a59c9f728",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6c64c538-8aca-44e2-9998-97bddfb78d09", "id": "131335571"}-->',
//             },
//             {
//               _uid: "1a79868c-1373-436a-af4b-8cff913fed31",
//               navItem: "f22ea6cc-b963-4d8e-a3dd-33fec50d966c",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1a79868c-1373-436a-af4b-8cff913fed31", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e674c58f-673d-4da0-bee4-e513c66eff5a",
//               navItem: "23cb8f2c-543b-4408-85db-45ff3d8a37e2",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e674c58f-673d-4da0-bee4-e513c66eff5a", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1e301632-110e-46df-8c76-ccb949ad041b", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/study-abroad-and-exchange",
//           _uid: "ed2f9105-3aaa-4264-8a79-eb3f335075f5",
//           title: "Study Abroad and Exchange",
//           target: false,
//           navBlok: [
//             {
//               _uid: "75603f16-a527-4d8f-a430-9d0bc43bb78b",
//               navItem: "3b6c1789-faaa-404a-ac3a-feb978ad5973",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "75603f16-a527-4d8f-a430-9d0bc43bb78b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b1be66d7-98b3-4326-910b-96c7b1d266d2",
//               navItem: "c5d7d8e6-be0f-47cd-b6ab-1b5d81fd2eef",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b1be66d7-98b3-4326-910b-96c7b1d266d2", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b4500ccf-bfdd-45c4-a378-f6241927f339",
//               navItem: "54330666-26e9-4980-a82b-3feecd24ed11",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b4500ccf-bfdd-45c4-a378-f6241927f339", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0cafeab4-08a1-4c93-aab2-adb300e8713c",
//               navItem: "ccae13be-e87c-4ad2-8f0c-dc1bbbe0bc34",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0cafeab4-08a1-4c93-aab2-adb300e8713c", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ed2f9105-3aaa-4264-8a79-eb3f335075f5", "id": "131335571"}-->',
//         },
//         {
//           url: "/visit",
//           _uid: "449b9961-583b-4b01-bc71-75f5cf066ffe",
//           title: "Visit",
//           target: false,
//           navBlok: [
//             {
//               _uid: "a9af18ad-82db-4f35-9179-1ed3e97616fa",
//               navItem: "f46975f6-6a3a-45c0-92db-22d866594b81",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a9af18ad-82db-4f35-9179-1ed3e97616fa", "id": "131335571"}-->',
//             },
//             {
//               _uid: "159b1b0e-d907-429d-b730-05f8b805e4db",
//               navItem: "7d7165e3-e6f3-4a24-9073-2bb463e5b66f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "159b1b0e-d907-429d-b730-05f8b805e4db", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8ba0a7aa-2049-49f7-acfe-0110b33857bc",
//               navItem: "07410222-c457-4a17-89ad-a1a640960ee7",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8ba0a7aa-2049-49f7-acfe-0110b33857bc", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2098de44-16c9-4364-8894-3737667d828c",
//               navItem: "fcaf0dbc-32dc-4e54-95f5-d6696c386d7d",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2098de44-16c9-4364-8894-3737667d828c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "f8209856-d64d-4035-91d2-97588d96a3ad",
//               navItem: "2d0b806f-6650-43a2-b5c4-d1068a07ff2f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f8209856-d64d-4035-91d2-97588d96a3ad", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "449b9961-583b-4b01-bc71-75f5cf066ffe", "id": "131335571"}-->',
//         },
//         {
//           url: "/apply",
//           _uid: "ec5ef15b-c7fc-41ff-a508-59e4fa0f86d3",
//           title: "Apply",
//           target: false,
//           navBlok: [
//             {
//               _uid: "9ee1f580-1d28-4c54-b6de-7196f77e1bd7",
//               navItem: "aa88de01-35ab-4f51-946c-f90aa2bef0fd",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9ee1f580-1d28-4c54-b6de-7196f77e1bd7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2f4a54c3-68fb-4b97-83d6-d9178cac765e",
//               navItem: "2546351e-6a31-490a-b229-5d83c0209409",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2f4a54c3-68fb-4b97-83d6-d9178cac765e", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b9767440-1a44-4594-adc0-e27a41f7ce1b",
//               navItem: "c3559433-a45c-437f-b6b7-b74f32f614c3",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b9767440-1a44-4594-adc0-e27a41f7ce1b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b244ae15-8cfb-476f-8b17-db5dc2ae6867",
//               navItem: "a5a20d69-65ee-43c2-b056-c1e80aeb608a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b244ae15-8cfb-476f-8b17-db5dc2ae6867", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d97c849a-d5e9-4ee0-aa67-0fe77ee2d63b",
//               navItem: "28a446f4-d44c-4aaa-880f-5b1bb72dc8b9",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d97c849a-d5e9-4ee0-aa67-0fe77ee2d63b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "c5cecd78-6574-4e15-a39b-c99109327184",
//               navItem: "0da8928c-829a-47fb-a6fe-7d51ea99845f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c5cecd78-6574-4e15-a39b-c99109327184", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4961a56f-73dd-430d-90fa-461dff515ce5",
//               navItem: "f09f4cb3-89df-400a-b41b-654b9be44f31",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4961a56f-73dd-430d-90fa-461dff515ce5", "id": "131335571"}-->',
//             },
//           ],
//           children: [],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ec5ef15b-c7fc-41ff-a508-59e4fa0f86d3", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/fees-and-funding",
//           _uid: "314505ed-183c-4a1f-996b-2f41f3c059a7",
//           title: "Fees and Funding",
//           target: false,
//           navBlok: [
//             {
//               _uid: "59c1a4aa-2dd6-4ed6-aa00-43f2ce63e25a",
//               navItem: "9b7deafe-dea8-4940-b7d1-c1c7380a51a8",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "59c1a4aa-2dd6-4ed6-aa00-43f2ce63e25a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "173caf0f-0fc9-4dad-8b04-eb4ba3d30cbe",
//               navItem: "f768d918-f78e-4119-a6a3-04b5a6499b19",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "173caf0f-0fc9-4dad-8b04-eb4ba3d30cbe", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2e60df1a-93b5-437d-bcb2-70f747b10253",
//               navItem: "34dff977-464f-402a-849a-029b99d6cb3b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2e60df1a-93b5-437d-bcb2-70f747b10253", "id": "131335571"}-->',
//             },
//             {
//               _uid: "a3fe1281-ff53-4085-9c69-28ece609caf1",
//               navItem: "10cb63bf-4f93-4059-89fb-10c6ad6eb885",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a3fe1281-ff53-4085-9c69-28ece609caf1", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "314505ed-183c-4a1f-996b-2f41f3c059a7", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "da720909-b536-4a52-874f-c615a5d73102", "id": "131335571"}-->',
//     },
//     {
//       url: "/uea-life",
//       _uid: "1d4b820b-68e9-4c86-a249-e022eb316299",
//       title: "UEA Life",
//       target: false,
//       navBlok: [
//         {
//           _uid: "8aa678e2-f7e0-4f4f-98ff-3c02bf10131d",
//           navItem: "13e6c8e3-4a68-4425-8899-50f943c19297",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8aa678e2-f7e0-4f4f-98ff-3c02bf10131d", "id": "131335571"}-->',
//         },
//         {
//           _uid: "64c99c43-65d1-4aae-9d8b-48a752ec19a3",
//           navItem: "a40606f8-93b6-49a2-be2f-a5072a82042b",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "64c99c43-65d1-4aae-9d8b-48a752ec19a3", "id": "131335571"}-->',
//         },
//         {
//           url: "/uea-life/accommodation",
//           _uid: "e13e0e63-2ee0-4cc2-a5c8-4f64d826c262",
//           title: "Accommodation",
//           target: false,
//           navBlok: [
//             {
//               _uid: "f66ac81d-1db7-4c38-aeb5-5ed045288553",
//               navItem: "8c0853d4-ab99-4143-a11e-3fb317948ac0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f66ac81d-1db7-4c38-aeb5-5ed045288553", "id": "131335571"}-->',
//             },
//             {
//               _uid: "1b3d25a1-b4db-4b55-bee0-9418bec42db7",
//               navItem: "c8c74014-678a-46c4-836b-f15fc56b61e5",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1b3d25a1-b4db-4b55-bee0-9418bec42db7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "20717b4c-9c85-4d4e-ad72-8e75141ecea5",
//               navItem: "40115fad-2c11-43fd-9a27-d3802465b176",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "20717b4c-9c85-4d4e-ad72-8e75141ecea5", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e13e0e63-2ee0-4cc2-a5c8-4f64d826c262", "id": "131335571"}-->',
//         },
//         {
//           url: "/uea/student-support",
//           _uid: "2fad35c2-f73d-4359-b1c9-c5e10803dd5c",
//           title: "Student Support",
//           target: false,
//           navBlok: [
//             {
//               _uid: "29210c50-3cf9-429b-8f64-fd63049f9b07",
//               navItem: "bbd13d93-d66a-4743-a3dd-12f262a8e95a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "29210c50-3cf9-429b-8f64-fd63049f9b07", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8bd6d0fb-6ce3-48e8-b675-283c5b30959b",
//               navItem: "0dd7c816-45bb-44b7-91ae-53aa28f30eb1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8bd6d0fb-6ce3-48e8-b675-283c5b30959b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d1ca801a-0233-451d-83ae-2bf4977c6c1c",
//               navItem: "ba7e6c19-858d-4313-892d-0a5642701c8c",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d1ca801a-0233-451d-83ae-2bf4977c6c1c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "5830f413-e18e-4168-b3a8-05ff5de888ee",
//               navItem: "216bae1f-764d-4ebb-a180-2151418a7a95",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "5830f413-e18e-4168-b3a8-05ff5de888ee", "id": "131335571"}-->',
//             },
//             {
//               _uid: "9037444a-ddaf-40f3-9a20-38ec16ea5aff",
//               navItem: "35d66fb1-94f0-46ca-925b-7a6ab1b4c202",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9037444a-ddaf-40f3-9a20-38ec16ea5aff", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6d5af400-63be-4b10-b954-e44e17017491",
//               navItem: "9779f9b6-5a7e-4681-b4aa-f15a47e4af7f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6d5af400-63be-4b10-b954-e44e17017491", "id": "131335571"}-->',
//             },
//             {
//               _uid: "1d1d6c93-5da6-468f-81f4-a38ad0de4ef8",
//               navItem: "74d991fe-dc08-4004-9496-26ffd5dd4e8b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1d1d6c93-5da6-468f-81f4-a38ad0de4ef8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "fa5b7ad0-feb5-4d40-b922-94f52af32743",
//               navItem: "d3448b3e-37e1-4415-a1a4-92b405fac044",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fa5b7ad0-feb5-4d40-b922-94f52af32743", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "2fad35c2-f73d-4359-b1c9-c5e10803dd5c", "id": "131335571"}-->',
//         },
//         {
//           _uid: "a4309e12-3fd4-44a9-80f8-a5d6a4b387af",
//           navItem: "4fa621b5-4087-47b7-841d-5b5efddd552f",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a4309e12-3fd4-44a9-80f8-a5d6a4b387af", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1d4b820b-68e9-4c86-a249-e022eb316299", "id": "131335571"}-->',
//     },
//     {
//       url: "/research",
//       _uid: "949d3728-8603-4f91-a99f-166827e3fbec",
//       title: "Research",
//       target: false,
//       navBlok: [
//         {
//           _uid: "7f854c25-8037-4626-afad-f9bceb297fdc",
//           navItem: "5cc5f71f-6dfa-4261-85cd-818ceafa565d",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7f854c25-8037-4626-afad-f9bceb297fdc", "id": "131335571"}-->',
//         },
//         {
//           url: "/research/research-with-us",
//           _uid: "d55bfbe1-df03-4bf4-9121-fd88ec22e1e5",
//           title: "Research With Us",
//           target: false,
//           navBlok: [
//             {
//               _uid: "7ea22ddf-7d94-4604-aa96-85ebf3acc2b8",
//               navItem: "3d943cea-f8f4-48b8-a0f5-bde786f0b4ec",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7ea22ddf-7d94-4604-aa96-85ebf3acc2b8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e6ac212a-886d-4261-9968-1aabdf138882",
//               navItem: "1da3864f-9fa2-4737-a7c4-da7d9065fcd4",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e6ac212a-886d-4261-9968-1aabdf138882", "id": "131335571"}-->',
//             },
//             {
//               _uid: "28e1a65a-c05a-41db-9b29-0615dc4212e8",
//               navItem: "54c8e57a-3d21-43cc-bfd9-a534e5c63f7f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "28e1a65a-c05a-41db-9b29-0615dc4212e8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6732b67b-344a-4318-a6cb-827121ca69d4",
//               navItem: "422fb32b-b057-4b75-9e33-4066f7069cfc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6732b67b-344a-4318-a6cb-827121ca69d4", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "d55bfbe1-df03-4bf4-9121-fd88ec22e1e5", "id": "131335571"}-->',
//         },
//         {
//           _uid: "244ba7b4-ea19-4293-aa40-b253174f10d8",
//           navItem: "7d13e53b-36b1-43fb-8702-5023e80dc81e",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "244ba7b4-ea19-4293-aa40-b253174f10d8", "id": "131335571"}-->',
//         },
//         {
//           _uid: "84ff0294-efa6-4360-9733-ac70c484e2c7",
//           navItem: "6ee4bbe6-06ee-4601-8197-3890eb15db09",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "84ff0294-efa6-4360-9733-ac70c484e2c7", "id": "131335571"}-->',
//         },
//         {
//           _uid: "a6d4ccf9-a08e-4300-b6f9-dc068d42b958",
//           navItem: "7bce6a8c-d040-4a8c-bff5-85005f270c38",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a6d4ccf9-a08e-4300-b6f9-dc068d42b958", "id": "131335571"}-->',
//         },
//         {
//           _uid: "96c5fd40-d045-463a-a42e-d19edb7805f5",
//           navItem: "6779adb2-83a5-4b40-89e2-5a7912fe260e",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "96c5fd40-d045-463a-a42e-d19edb7805f5", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "949d3728-8603-4f91-a99f-166827e3fbec", "id": "131335571"}-->',
//     },
//     {
//       url: "/business",
//       _uid: "73391001-2c2a-4182-b527-f72bbec03acb",
//       title: "Business",
//       target: false,
//       navBlok: [
//         {
//           _uid: "08d7364c-6e0e-4c77-b45c-d6cdb0b90d5c",
//           navItem: "c8858397-127f-4ce3-9c1f-c460ee96271f",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "08d7364c-6e0e-4c77-b45c-d6cdb0b90d5c", "id": "131335571"}-->',
//         },
//         {
//           _uid: "e56c1cfb-3e67-41e8-9ad1-763edef044ce",
//           navItem: "6ac66223-3435-4174-b062-df09602e4504",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e56c1cfb-3e67-41e8-9ad1-763edef044ce", "id": "131335571"}-->',
//         },
//         {
//           _uid: "a85d47e5-0f17-4864-9f2b-70bdd88f580b",
//           navItem: "fc7b23b2-7d94-4288-a545-70d49899eb7f",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a85d47e5-0f17-4864-9f2b-70bdd88f580b", "id": "131335571"}-->',
//         },
//         {
//           _uid: "b5d6bcc1-c41f-45e0-97c8-1503a5b65008",
//           navItem: "15e20977-8cb4-492a-ab73-b41b2bcb7a71",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b5d6bcc1-c41f-45e0-97c8-1503a5b65008", "id": "131335571"}-->',
//         },
//         {
//           _uid: "355cbe67-d3d7-44d5-9c6c-f289d43dd4cb",
//           navItem: "0baf09c3-0d3c-495d-a0bf-75e45573a11d",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "355cbe67-d3d7-44d5-9c6c-f289d43dd4cb", "id": "131335571"}-->',
//         },
//         {
//           _uid: "bc98954a-a54c-4fec-a4dc-eaaeddd91659",
//           navItem: "e6f2e934-c3d5-4cd1-a29c-737ef2967a37",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc98954a-a54c-4fec-a4dc-eaaeddd91659", "id": "131335571"}-->',
//         },
//         {
//           _uid: "1b9e0e75-ca14-4a90-a0e0-21701b6c7ec7",
//           navItem: "b919247c-f0a6-4a1a-8861-ec7719daedab",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1b9e0e75-ca14-4a90-a0e0-21701b6c7ec7", "id": "131335571"}-->',
//         },
//         {
//           _uid: "e21ff00d-3fc1-41c0-ac74-0838cbbf8ef4",
//           navItem: "f9ed0dbe-04cc-47d8-8d5f-a434667548ac",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e21ff00d-3fc1-41c0-ac74-0838cbbf8ef4", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "73391001-2c2a-4182-b527-f72bbec03acb", "id": "131335571"}-->',
//     },
//     {
//       url: "/global",
//       _uid: "54dfc4c1-2b9b-4fd2-a75c-064bc1537cad",
//       title: "Global",
//       target: false,
//       navBlok: [
//         {
//           _uid: "f3f922e1-36f2-4b20-914a-7d5e2c5cd329",
//           navItem: "78f93250-0808-4db3-bf7f-73499a26237a",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f3f922e1-36f2-4b20-914a-7d5e2c5cd329", "id": "131335571"}-->',
//         },
//         {
//           _uid: "cd4597a6-c1ef-47da-8b3b-493726dba4cb",
//           navItem: "a7b30fab-fea0-4cd0-888a-ae7eebdb7eb9",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "cd4597a6-c1ef-47da-8b3b-493726dba4cb", "id": "131335571"}-->',
//         },
//         {
//           _uid: "ed0e4817-21e6-4dbd-a369-ee6b5c93a785",
//           navItem: "6a96d296-4f94-4991-b95d-caef010960c3",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ed0e4817-21e6-4dbd-a369-ee6b5c93a785", "id": "131335571"}-->',
//         },
//         {
//           _uid: "ef8e89f3-8236-412d-9e1d-533a4dc9a366",
//           navItem: "a9751b51-7f57-44c6-b819-1ce235862c83",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ef8e89f3-8236-412d-9e1d-533a4dc9a366", "id": "131335571"}-->',
//         },
//         {
//           _uid: "1864ca34-5d2d-4900-bf19-88d925fc0a80",
//           navItem: "bb535e35-4f5a-46c0-ad6d-3e52e5eff950",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1864ca34-5d2d-4900-bf19-88d925fc0a80", "id": "131335571"}-->',
//         },
//         {
//           _uid: "da2df4a0-3417-4a71-a81e-eafe6d631d9b",
//           navItem: "9a1f0b42-d887-40a3-be52-b4d4cfd1ffec",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "da2df4a0-3417-4a71-a81e-eafe6d631d9b", "id": "131335571"}-->',
//         },
//         {
//           _uid: "bf6e176e-c73e-443f-b069-db2ddf58a537",
//           navItem: "13d92467-9f26-438b-a2aa-17a74006e593",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bf6e176e-c73e-443f-b069-db2ddf58a537", "id": "131335571"}-->',
//         },
//         {
//           _uid: "c8f11152-7ed6-4c02-940e-44c27514a91f",
//           navItem: "ad5f9e93-cbc6-49a1-90ab-e48e64a97241",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c8f11152-7ed6-4c02-940e-44c27514a91f", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "54dfc4c1-2b9b-4fd2-a75c-064bc1537cad", "id": "131335571"}-->',
//     },
//     {
//       url: "/about",
//       _uid: "1495a7b3-a353-4427-b236-b5b5fc3575e4",
//       title: "About",
//       target: false,
//       navBlok: [
//         {
//           _uid: "f3cae847-af5f-4d9a-aa6a-95d93baf981d",
//           navItem: "9d3a6616-87be-40a1-9ca7-129c99cf46f1",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f3cae847-af5f-4d9a-aa6a-95d93baf981d", "id": "131335571"}-->',
//         },
//         {
//           _uid: "8b568800-7ed7-4265-a6f3-7964adb9c330",
//           navItem: "313ff16a-21e5-48b5-9e88-8528f45da2b6",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8b568800-7ed7-4265-a6f3-7964adb9c330", "id": "131335571"}-->',
//         },
//         {
//           url: "/library",
//           _uid: "ddcba14c-6a29-4e94-9fcd-335ac76b8dfd",
//           title: "Library and Archives",
//           target: false,
//           navBlok: [
//             {
//               _uid: "15c987be-afda-4064-9fc2-36b8712aa0b4",
//               navItem: "87c83877-fb81-4c3c-979d-a7b229b290af",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "15c987be-afda-4064-9fc2-36b8712aa0b4", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b081d6a6-e916-4de4-8e8b-43aaf23afab1",
//               navItem: "eec2b027-1f1c-4da6-809d-39af36c0acae",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b081d6a6-e916-4de4-8e8b-43aaf23afab1", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ddcba14c-6a29-4e94-9fcd-335ac76b8dfd", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/working-at-uea",
//           _uid: "5517ab26-1dda-4f93-a922-34a509bbf2e8",
//           title: "Working at UEA",
//           target: false,
//           navBlok: [
//             {
//               _uid: "027bee49-ee0f-44c7-8121-65b7a4b30741",
//               navItem: "91d55c80-9347-443d-9e34-9d9f23d0bf12",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "027bee49-ee0f-44c7-8121-65b7a4b30741", "id": "131335571"}-->',
//             },
//             {
//               _uid: "44eab4ef-66c6-4f0a-8546-f6023eeff3ea",
//               navItem: "99faf738-11a9-42cd-aa08-d86218a4eda4",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "44eab4ef-66c6-4f0a-8546-f6023eeff3ea", "id": "131335571"}-->',
//             },
//             {
//               _uid: "921cfd5e-9b9c-4209-a379-35772a348691",
//               navItem: "0fa015c6-f1be-4849-baa9-45fa913dd50a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "921cfd5e-9b9c-4209-a379-35772a348691", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bc2c9a9e-70ee-49f3-836e-1ee2b39a6d69",
//               navItem: "ad6b083b-e169-4991-8a54-db7e4bae7340",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc2c9a9e-70ee-49f3-836e-1ee2b39a6d69", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8b5ca8c2-ba29-4961-aed6-c93e144c1885",
//               navItem: "9dacc093-1958-4f2e-ad97-559627811c4f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8b5ca8c2-ba29-4961-aed6-c93e144c1885", "id": "131335571"}-->',
//             },
//             {
//               _uid: "eaf271c1-a4e9-44b2-8b8c-a5e302e1fc82",
//               navItem: "ff7e5cd6-9f22-4d2c-a73d-3555ff1d9086",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "eaf271c1-a4e9-44b2-8b8c-a5e302e1fc82", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "5517ab26-1dda-4f93-a922-34a509bbf2e8", "id": "131335571"}-->',
//         },
//         {
//           _uid: "095d080b-2339-4109-8b07-05a4ca891bc5",
//           navItem: "a218248b-dcef-4596-8af9-00a27ec322c2",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "095d080b-2339-4109-8b07-05a4ca891bc5", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/faculties-and-schools",
//           _uid: "0770a34c-d138-4f6b-9664-f4e6fc2448e2",
//           title: "Faculties and Schools",
//           target: false,
//           navBlok: [
//             {
//               url: "/about/faculties-and-schools/faculty-of-arts-and-humanities",
//               _uid: "e41aa522-7c32-46f9-a4ca-81d3767bd844",
//               title: "Faculty of Arts and Humanities",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "0cde4f93-76e3-4a54-986e-eea78cb5e6ca",
//                   navItem: "4adc3087-1651-490a-bb3e-4b7f623bd8e4",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0cde4f93-76e3-4a54-986e-eea78cb5e6ca", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "2461c21e-772b-403a-858d-f8fc803b6cf8",
//                   navItem: "8bdbfb61-4b28-4c2c-bf25-4e816c7d5da6",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2461c21e-772b-403a-858d-f8fc803b6cf8", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d3824f64-9510-4823-8859-9fd7851183db",
//                   navItem: "18ff8ead-3aea-4008-be2d-5054d1ae6979",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d3824f64-9510-4823-8859-9fd7851183db", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "08089dad-0e24-4395-84ba-643b4354e90a",
//                   navItem: "b23d4d43-f71a-4b30-ba9a-4dfd7b82c1ef",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "08089dad-0e24-4395-84ba-643b4354e90a", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "ccc3fbb2-f182-4841-9718-c7c3bed0adc6",
//                   navItem: "881545e2-2a1a-4a10-8659-ed096d333082",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ccc3fbb2-f182-4841-9718-c7c3bed0adc6", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "bb9b45a6-606d-4f59-b23a-85a53485ca55",
//                   navItem: "4e74db4d-de35-4229-9f77-c0a9a043efcb",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bb9b45a6-606d-4f59-b23a-85a53485ca55", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "6621b667-29b1-4d76-b75b-9eb214596813",
//                   navItem: "5c792102-c249-4746-bd37-3cf5f345fa09",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6621b667-29b1-4d76-b75b-9eb214596813", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e41aa522-7c32-46f9-a4ca-81d3767bd844", "id": "131335571"}-->',
//             },
//             {
//               url: "/about/faculties-and-schools/faculty-of-medicine-and-health",
//               _uid: "00f7d236-6770-43f6-a2f0-68edae0ab22d",
//               title: "Faculty of Medicine and Health",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "99856116-f9e0-462c-928d-c156258b943b",
//                   navItem: "a95e6541-0e99-4516-b53b-6091e34b7870",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "99856116-f9e0-462c-928d-c156258b943b", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "7dbf092f-18c6-462f-bebe-cc70dd8a2e98",
//                   navItem: "6178240b-539c-409a-a5c0-6227b5706d51",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7dbf092f-18c6-462f-bebe-cc70dd8a2e98", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "3ee08bc2-4053-48a3-bba8-62b47f113a36",
//                   navItem: "5d03d9df-4309-4c6f-a80b-178511e9c6bd",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "3ee08bc2-4053-48a3-bba8-62b47f113a36", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "00f7d236-6770-43f6-a2f0-68edae0ab22d", "id": "131335571"}-->',
//             },
//             {
//               url: "/about/faculties-and-schools/faculty-of-science",
//               _uid: "29d45e7a-c1db-4b46-942d-5d97f8d42311",
//               title: "Faculty of Science",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "2034f1e9-7508-459b-8116-b26ac3e487c5",
//                   navItem: "b300f616-8281-4f57-8eff-52576b99d244",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2034f1e9-7508-459b-8116-b26ac3e487c5", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d82dd144-2bb3-46c8-a1c8-b3029a7a329f",
//                   navItem: "cdfed783-7776-40f1-8bde-3f0ec4f95c5f",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d82dd144-2bb3-46c8-a1c8-b3029a7a329f", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "ac0a9ef2-888a-4bc5-89d0-989f78fde464",
//                   navItem: "4efd9dae-7fd0-4c1c-8dc1-c6fbe4293585",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ac0a9ef2-888a-4bc5-89d0-989f78fde464", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "fc352d33-b4e2-404e-bc92-052e02cece4c",
//                   navItem: "c13fb4d5-06ec-4e72-997e-622ee6ca71d6",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fc352d33-b4e2-404e-bc92-052e02cece4c", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "ad92c7d7-0aa4-46a3-bd86-269dfda987f3",
//                   navItem: "79ff0656-83e2-4b86-a91f-08aa19b92f1f",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ad92c7d7-0aa4-46a3-bd86-269dfda987f3", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "9f238ed6-49e2-4545-94e4-639f852c713b",
//                   navItem: "67ed8f64-3dbf-43a2-bde4-af874dca070a",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9f238ed6-49e2-4545-94e4-639f852c713b", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "643e536d-7c4a-4d8b-a1ae-36e44966a5f6",
//                   navItem: "15e521bf-807c-4ce8-9168-9a144e4854e9",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "643e536d-7c4a-4d8b-a1ae-36e44966a5f6", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "4d1b65dd-4268-47b5-9208-6bb017e0e02f",
//                   navItem: "de8e6982-080a-4321-b9d6-695c826612eb",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4d1b65dd-4268-47b5-9208-6bb017e0e02f", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "34e9050e-f0aa-41d8-ae75-0b5bcc5ebcf9",
//                   navItem: "da7c68c7-56a1-49ea-a147-cf9d4e123d57",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "34e9050e-f0aa-41d8-ae75-0b5bcc5ebcf9", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "069b163a-6149-4110-a4bb-249583a8972f",
//                   navItem: "cdc3112a-099e-4f5b-85ce-2e631cbb3736",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "069b163a-6149-4110-a4bb-249583a8972f", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "e09f1f34-fd9c-4326-b611-60163d505598",
//                   navItem: "f65aa946-1033-43c6-b564-2172cc849366",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e09f1f34-fd9c-4326-b611-60163d505598", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "76849b72-ac5f-4c13-8027-aba40d2988c0",
//                   navItem: "b172c458-d17f-4966-863f-7af0856f3a92",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "76849b72-ac5f-4c13-8027-aba40d2988c0", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "146cf578-3526-4d66-8b48-ee772a897c7f",
//                   navItem: "43003844-9012-4755-b4ba-a4075dec6adc",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "146cf578-3526-4d66-8b48-ee772a897c7f", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "29d45e7a-c1db-4b46-942d-5d97f8d42311", "id": "131335571"}-->',
//             },
//             {
//               url: "/about/faculties-and-schools/faculty-of-social-sciences",
//               _uid: "c08c4558-7232-438a-b34f-12a816aa86ea",
//               title: "Faculty of Social Sciences",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "cf209fc0-35ab-48cf-b0ba-7fd733ed980b",
//                   navItem: "cfc76107-5bbd-4a41-9316-635767929a3f",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "cf209fc0-35ab-48cf-b0ba-7fd733ed980b", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "12e3522b-2374-4aeb-aaf9-95f13aa2c4f3",
//                   navItem: "2f4ac7fd-f74c-4cd9-b923-d5640afdfa27",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "12e3522b-2374-4aeb-aaf9-95f13aa2c4f3", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d5572866-8aec-4dc3-93bc-2f087d866b77",
//                   navItem: "4a63b181-7738-4f5f-88a0-8118c72281e7",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d5572866-8aec-4dc3-93bc-2f087d866b77", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d88e7841-dfc8-4e49-95f7-4574da54c375",
//                   navItem: "1f9cc6b4-e02e-4506-9dfa-64d00ff9aa9b",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d88e7841-dfc8-4e49-95f7-4574da54c375", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "56ae4db8-7fde-4473-8f37-322cd9e0b557",
//                   navItem: "e525f761-fb58-4255-8a27-e7f193982b0b",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "56ae4db8-7fde-4473-8f37-322cd9e0b557", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "06401a4b-31f9-44d0-87da-cdd7c2ad4c4c",
//                   navItem: "359c2940-2440-44b9-bbf0-60ae6278b03d",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "06401a4b-31f9-44d0-87da-cdd7c2ad4c4c", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "1d436f3c-1d92-48a6-8f04-1c9793c36ce3",
//                   navItem: "6b8234ab-6966-4628-baab-62d6d6798362",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1d436f3c-1d92-48a6-8f04-1c9793c36ce3", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "1abe7e38-097c-463d-b5df-27cd862070da",
//                   navItem: "8127b58d-3646-4b41-8e44-0db12ff2b518",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1abe7e38-097c-463d-b5df-27cd862070da", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "c08c4558-7232-438a-b34f-12a816aa86ea", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "0770a34c-d138-4f6b-9664-f4e6fc2448e2", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/alumni-and-supporters",
//           _uid: "03de44ec-a7e2-4721-b1f1-ffe3c5c7c58f",
//           title: "Alumni and Supporters",
//           target: false,
//           navBlok: [
//             {
//               _uid: "a2a29ec1-f553-44dc-9be4-83cf018df911",
//               navItem: "7ce3d49e-2ce5-4a9e-b0da-7498b2e8f5d8",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a2a29ec1-f553-44dc-9be4-83cf018df911", "id": "131335571"}-->',
//             },
//             {
//               _uid: "63a08445-bfe0-4ef5-bf47-f6d13bbd26fe",
//               navItem: "731ded77-5b69-4504-9d5f-273560b36efb",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "63a08445-bfe0-4ef5-bf47-f6d13bbd26fe", "id": "131335571"}-->',
//             },
//             {
//               _uid: "7cf34e6b-870e-43b4-8bbc-3b067d437224",
//               navItem: "186e145d-8c0e-481f-91f1-c7e0c5f22bfb",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7cf34e6b-870e-43b4-8bbc-3b067d437224", "id": "131335571"}-->',
//             },
//             {
//               _uid: "c829b103-e6a9-4a04-80ca-bc63a12ce2ad",
//               navItem: "b39712ec-8400-46b4-83c3-5c2cd5812324",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c829b103-e6a9-4a04-80ca-bc63a12ce2ad", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6345aace-e4e1-4d42-9c7b-2d8e00cc2c5a",
//               navItem: "4d09f1f8-fcbf-44db-b27f-abe3cc5467c8",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6345aace-e4e1-4d42-9c7b-2d8e00cc2c5a", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "03de44ec-a7e2-4721-b1f1-ffe3c5c7c58f", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/partnership-hubs",
//           _uid: "e016da6f-a01a-4e6b-8987-ae55672f5f65",
//           title: "Partnerships Hub",
//           target: false,
//           navBlok: [
//             {
//               _uid: "bd294b15-3e36-4c79-b647-63c351e3f315",
//               navItem: "35619d47-9f20-438b-8b4e-3f79dc2da4ac",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bd294b15-3e36-4c79-b647-63c351e3f315", "id": "131335571"}-->',
//             },
//             {
//               _uid: "60850b01-f0f4-4076-a1ff-a4c3cf683308",
//               navItem: "85fac544-b6db-4b8b-8520-38599f130bde",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "60850b01-f0f4-4076-a1ff-a4c3cf683308", "id": "131335571"}-->',
//             },
//             {
//               _uid: "fb808f08-a60e-41bb-bc76-fa46071e6334",
//               navItem: "7bb8e6e7-031a-4ea4-8a10-fddf2a8076b1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fb808f08-a60e-41bb-bc76-fa46071e6334", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bc30e6c1-5d12-464a-8a98-a344e591ba32",
//               navItem: "132b54f1-2bf0-4ecd-a2a0-ca4431bc508a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc30e6c1-5d12-464a-8a98-a344e591ba32", "id": "131335571"}-->',
//             },
//             {
//               _uid: "407fd4c2-f7f4-4ef6-8c52-806498a958d8",
//               navItem: "305153c1-ad33-41a5-9352-1fba00eb6d52",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "407fd4c2-f7f4-4ef6-8c52-806498a958d8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8cb00dff-84a6-4527-b032-6dd449c28e59",
//               navItem: "e1a596f5-46e3-42a6-b03e-5ec2aaf8796f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8cb00dff-84a6-4527-b032-6dd449c28e59", "id": "131335571"}-->',
//             },
//             {
//               _uid: "12ef8bcf-3ea2-4ddc-a456-2f404094ae3a",
//               navItem: "77e5d230-0beb-4e4a-9b63-01b51579615a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "12ef8bcf-3ea2-4ddc-a456-2f404094ae3a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "a047fae6-f155-4a51-b694-538f4bdf6563",
//               navItem: "fd305ec9-6faa-4c48-9244-94c10b5cfb13",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a047fae6-f155-4a51-b694-538f4bdf6563", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e016da6f-a01a-4e6b-8987-ae55672f5f65", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/information-for-visitors",
//           _uid: "8b75f3d3-6e7b-478e-a471-7e947f4e07c1",
//           title: "Information for Visitors",
//           target: false,
//           navBlok: [
//             {
//               _uid: "4b1e098b-2430-40db-a852-bc9e87291b35",
//               navItem: "d0798247-cf81-4e4e-ab48-59aa3d3dcf07",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4b1e098b-2430-40db-a852-bc9e87291b35", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e4101ac8-a2f0-47f1-b82c-ef49f14be015",
//               navItem: "3f64c73e-e0ae-4dad-8bed-efbbfad8d10b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e4101ac8-a2f0-47f1-b82c-ef49f14be015", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d37e1b83-0f54-400c-a699-b1d9e2196628",
//               navItem: "fc514400-7761-4310-bc66-0f774fede80d",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d37e1b83-0f54-400c-a699-b1d9e2196628", "id": "131335571"}-->',
//             },
//             {
//               _uid: "9ebd8500-e00d-4bc5-86bb-4204741ccb6a",
//               navItem: "1a1e7d00-0508-4a69-bab3-ca6a1f4c2ca3",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9ebd8500-e00d-4bc5-86bb-4204741ccb6a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b8f0df8d-22ad-47ec-9e00-3b41c7ec373f",
//               navItem: "d1585714-3603-4f1c-87a1-dca107160b94",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b8f0df8d-22ad-47ec-9e00-3b41c7ec373f", "id": "131335571"}-->',
//             },
//             {
//               _uid: "5b772e1f-0e05-41b8-9983-50c5fed2a2c8",
//               navItem: "230d607b-b8a0-4023-ac69-9d1ee8e378c7",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "5b772e1f-0e05-41b8-9983-50c5fed2a2c8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "ba9fe949-7eb8-42f6-bc67-b7ea4ae36a57",
//               navItem: "4d2b92de-93df-43e7-8cda-7559786ccea5",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ba9fe949-7eb8-42f6-bc67-b7ea4ae36a57", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8751b311-244f-4426-a762-b8da9db94830",
//               navItem: "5775b367-c102-434b-91a2-54629175a1a1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8751b311-244f-4426-a762-b8da9db94830", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b0f8aa62-2ead-45d8-b717-f0817bdf33b5",
//               navItem: "73075055-2961-4849-8ac5-499c383e7693",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b0f8aa62-2ead-45d8-b717-f0817bdf33b5", "id": "131335571"}-->',
//             },
//             {
//               _uid: "938b295a-d8a3-4be4-a011-b830e2342a00",
//               navItem: "00230285-6ec1-4605-a45d-3c3772fc6f69",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "938b295a-d8a3-4be4-a011-b830e2342a00", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0a37972d-f0b3-46d7-b2df-74384e50c150",
//               navItem: "a40606f8-93b6-49a2-be2f-a5072a82042b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0a37972d-f0b3-46d7-b2df-74384e50c150", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "8b75f3d3-6e7b-478e-a471-7e947f4e07c1", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/university-information",
//           _uid: "5fbf537c-1187-4fde-90de-b352b31437db",
//           title: "University Information",
//           target: false,
//           navBlok: [
//             {
//               _uid: "bba33830-128c-440a-ad88-7f208cbfaa8e",
//               navItem: "8245d29c-3a54-46a0-9373-71940a0d0f2b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bba33830-128c-440a-ad88-7f208cbfaa8e", "id": "131335571"}-->',
//             },
//             {
//               _uid: "70bd2e0b-6a41-47d2-b126-6b6554c47f2a",
//               navItem: "d652dad0-840a-4a1d-bf37-deb6fbb54071",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "70bd2e0b-6a41-47d2-b126-6b6554c47f2a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "be8192b3-f0bf-4b96-acec-628c7dbdd8c7",
//               navItem: "8f316eed-1e9e-49e0-9f6f-6cf39e9cd8a0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "be8192b3-f0bf-4b96-acec-628c7dbdd8c7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "ac02e962-de36-4a7e-b637-ddd237b43eaf",
//               navItem: "560daae4-29b7-4c13-89e9-072e899cc947",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ac02e962-de36-4a7e-b637-ddd237b43eaf", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2f5127c4-83af-4024-9375-c4b2bcbddfd9",
//               navItem: "31fbc1a0-17ff-4508-a705-566a68e27dd3",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2f5127c4-83af-4024-9375-c4b2bcbddfd9", "id": "131335571"}-->',
//             },
//             {
//               _uid: "84b2a4d0-d7fb-48d3-9c6c-b926a769dba9",
//               navItem: "8fdb9998-27a4-4a5a-9255-8254d5306d96",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "84b2a4d0-d7fb-48d3-9c6c-b926a769dba9", "id": "131335571"}-->',
//             },
//             {
//               _uid: "ef05b1f5-f5ae-423e-8ebe-e5e578c44ece",
//               navItem: "94575d23-c531-4323-be52-941c1aefbb4a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ef05b1f5-f5ae-423e-8ebe-e5e578c44ece", "id": "131335571"}-->',
//             },
//             {
//               _uid: "80939f9c-f894-42d2-ab4d-14f091b15d5a",
//               navItem: "7ad7cc37-d737-4151-bfea-f8b317c37564",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "80939f9c-f894-42d2-ab4d-14f091b15d5a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0c050b63-7fd6-482b-ae6b-8dc3c187f9a0",
//               navItem: "9358ce86-8056-4690-8060-9f7cda4a08cf",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0c050b63-7fd6-482b-ae6b-8dc3c187f9a0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "03548345-4f8e-401d-9fe9-1d7fd1a3ed00",
//               navItem: "312997d2-fdda-41a5-affd-01cbba9ec6a0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "03548345-4f8e-401d-9fe9-1d7fd1a3ed00", "id": "131335571"}-->',
//             },
//             {
//               _uid: "fcf5d63e-3219-4edc-8cbb-2221820ade0c",
//               navItem: "b20bc260-8a44-4803-b74e-39d2393799e0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fcf5d63e-3219-4edc-8cbb-2221820ade0c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "59354853-82dc-4e3c-b736-dc7c6966f226",
//               navItem: "41a3c81d-ccd6-48b2-9478-9d37b810f652",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "59354853-82dc-4e3c-b736-dc7c6966f226", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "5fbf537c-1187-4fde-90de-b352b31437db", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1495a7b3-a353-4427-b236-b5b5fc3575e4", "id": "131335571"}-->',
//     },
//     {
//       _uid: "f1cfbabc-6777-426c-a14e-996ef7264290",
//       navItem: "d00892d0-ce36-44d5-acba-6976c323b8e2",
//       component: "navItem",
//       _editable:
//         '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f1cfbabc-6777-426c-a14e-996ef7264290", "id": "131335571"}-->',
//     },
//     {
//       _uid: "0a8bd7ec-8134-4f59-b34c-fbd1e2fab4f2",
//       navItem: "62feefa9-ea8d-4589-b000-e84fb6746ce7",
//       component: "navItem",
//       _editable:
//         '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0a8bd7ec-8134-4f59-b34c-fbd1e2fab4f2", "id": "131335571"}-->',
//     },
//     {
//       _uid: "b21535ae-c585-4a8a-aa8f-3f9bd8c58e88",
//       navItem: "f6fbe62a-fdc9-40f9-be5a-339fee265b6a",
//       component: "navItem",
//       _editable:
//         '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b21535ae-c585-4a8a-aa8f-3f9bd8c58e88", "id": "131335571"}-->',
//     },
//   ],
//   navLinkArray: [
//     {
//       uuid: "b300f616-8281-4f57-8eff-52576b99d244",
//       name: "Research",
//       content: {
//         title: "Research",
//         url: "/about/faculties-and-schools/faculty-of-science/research",
//       },
//     },
//     {
//       uuid: "cdfed783-7776-40f1-8bde-3f0ec4f95c5f",
//       name: "Science Graduate School",
//       content: {
//         title: "Science Graduate School",
//         url: "/about/faculties-and-schools/faculty-of-science/science-graduate-school",
//       },
//     },
//     {
//       uuid: "8245d29c-3a54-46a0-9373-71940a0d0f2b",
//       name: "Vice-Chancellor's Office",
//       content: {
//         title: "Vice-Chancellor's Office",
//         url: "/about/university-information/vice-chancellors-office",
//       },
//     },
//     {
//       uuid: "4efd9dae-7fd0-4c1c-8dc1-c6fbe4293585",
//       name: "Work Here",
//       content: {
//         title: "Work Here",
//         url: "/about/faculties-and-schools/faculty-of-science/work-here",
//       },
//     },
//     {
//       uuid: "d0798247-cf81-4e4e-ab48-59aa3d3dcf07",
//       name: "Contact Us and Map",
//       content: {
//         title: "Contact Us and Map",
//         url: "/about/information-for-visitors/contact-information-and-map",
//       },
//     },
//     {
//       uuid: "d652dad0-840a-4a1d-bf37-deb6fbb54071",
//       name: "Governance",
//       content: {
//         title: "Governance",
//         url: "/about/university-information/governance",
//       },
//     },
//     {
//       uuid: "c13fb4d5-06ec-4e72-997e-622ee6ca71d6",
//       name: "Facilities",
//       content: {
//         title: "Facilities",
//         url: "/about/faculties-and-schools/faculty-of-science/facilities",
//       },
//     },
//     {
//       uuid: "3f64c73e-e0ae-4dad-8bed-efbbfad8d10b",
//       name: "Travel and Transport",
//       content: {
//         title: "Travel and Transport",
//         url: "/about/information-for-visitors/travel-and-transport",
//       },
//     },
//     {
//       uuid: "8f316eed-1e9e-49e0-9f6f-6cf39e9cd8a0",
//       name: "Facts and Figures",
//       content: {
//         title: "Facts and Figures",
//         url: "/about/university-information/facts-and-figures",
//       },
//     },
//     {
//       uuid: "79ff0656-83e2-4b86-a91f-08aa19b92f1f",
//       name: "School of Biological Sciences",
//       content: {
//         title: "School of Biological Sciences",
//         url: "/about/school-of-biological-sciences",
//       },
//     },
//     {
//       uuid: "fc514400-7761-4310-bc66-0f774fede80d",
//       name: "Food on Campus",
//       content: {
//         title: "Food on Campus",
//         url: "/about/information-for-visitors/eat-and-drink",
//       },
//     },
//     {
//       uuid: "560daae4-29b7-4c13-89e9-072e899cc947",
//       name: "Statutory, Legal and Policies",
//       content: {
//         title: "Statutory, Legal and Policies",
//         url: "/about/university-information/statutory-legal-policies",
//       },
//     },
//     {
//       uuid: "df088c1e-da38-46a0-9eec-e196dd653fa1",
//       name: "International Students",
//       content: {
//         title: "International Students Home",
//         url: "/study/international-students/",
//       },
//     },
//     {
//       uuid: "4043d15c-8fda-4d1a-b03c-ed6e73b68a51",
//       name: "Prospective Students",
//       content: {
//         title: "Prospective Students",
//         url: "/study/information-for/prospective-students",
//       },
//     },
//     {
//       uuid: "cfc76107-5bbd-4a41-9316-635767929a3f",
//       name: "Norwich Business School",
//       content: {
//         title: "Norwich Business School",
//         url: "/about/norwich-business-school",
//       },
//     },
//     {
//       uuid: "67ed8f64-3dbf-43a2-bde4-af874dca070a",
//       name: "School of Chemistry",
//       content: {
//         title: "School of Chemistry",
//         url: "/about/school-of-chemistry",
//       },
//     },
//     {
//       uuid: "35619d47-9f20-438b-8b4e-3f79dc2da4ac",
//       name: "Partnerships Hub",
//       content: {
//         title: "Partnerships Hub",
//         url: "/about/partnerships-hub",
//       },
//     },
//     {
//       uuid: "1a1e7d00-0508-4a69-bab3-ca6a1f4c2ca3",
//       name: "Visitor Accommodation",
//       content: {
//         title: "Visitor Accommodation",
//         url: "/about/information-for-visitors/visitor-accommodation",
//       },
//     },
//     {
//       uuid: "31fbc1a0-17ff-4508-a705-566a68e27dd3",
//       name: "Finance and Procurement",
//       content: {
//         title: "Finance and Procurement",
//         url: "/about/university-information/finance-and-procurement",
//       },
//     },
//     {
//       uuid: "78f93250-0808-4db3-bf7f-73499a26237a",
//       name: "Global UEA",
//       content: {
//         title: "Global UEA",
//         url: "/global",
//       },
//     },
//     {
//       uuid: "c8858397-127f-4ce3-9c1f-c460ee96271f",
//       name: "UEA for Business",
//       content: {
//         title: "UEA for Business",
//         url: "/business",
//       },
//     },
//     {
//       uuid: "bbd13d93-d66a-4743-a3dd-12f262a8e95a",
//       name: "Wellbeing",
//       content: {
//         title: "Wellbeing",
//         url: "/uea-life/student-support/wellbeing",
//       },
//     },
//     {
//       uuid: "7e27ba49-9964-4817-967a-f6fbb15a6ccc",
//       name: "Meet Us",
//       content: {
//         title: "Meet Us",
//         url: "/study/international-students/meet-with-us-online",
//       },
//     },
//     {
//       uuid: "b4632870-1a4f-4175-bfff-2efd93c3874c",
//       name: "Mature Students",
//       content: {
//         title: "Mature Students",
//         url: "/study/information-for/mature-students",
//       },
//     },
//     {
//       uuid: "082402b4-e6d2-42a3-b709-a0d2a070d97a",
//       name: "All Courses",
//       content: {
//         title: "All Courses",
//         url: "/course-finder",
//       },
//     },
//     {
//       uuid: "2f4ac7fd-f74c-4cd9-b923-d5640afdfa27",
//       name: "School of Economics",
//       content: {
//         title: "School of Economics",
//         url: "/about/school-of-economics",
//       },
//     },
//     {
//       uuid: "15e521bf-807c-4ce8-9168-9a144e4854e9",
//       name: "School of Computing Sciences",
//       content: {
//         title: "School of Computing Sciences",
//         url: "/about/school-of-computing-sciences",
//       },
//     },
//     {
//       uuid: "4adc3087-1651-490a-bb3e-4b7f623bd8e4",
//       name: "Faculty of Arts and Humanities",
//       content: {
//         title: "Faculty of Arts and Humanities",
//         url: "/about/faculties-and-schools/faculty-of-arts-and-humanities",
//       },
//     },
//     {
//       uuid: "85fac544-b6db-4b8b-8520-38599f130bde",
//       name: "Apprenticeships",
//       content: {
//         title: "Apprenticeships",
//         url: "/business/grow-your-business/apprenticeships",
//       },
//     },
//     {
//       uuid: "d1585714-3603-4f1c-87a1-dca107160b94",
//       name: "University Reception",
//       content: {
//         title: "University Reception",
//         url: "/about/information-for-visitors/reception",
//       },
//     },
//     {
//       uuid: "8fdb9998-27a4-4a5a-9255-8254d5306d96",
//       name: "IT Information",
//       content: {
//         title: "IT Information",
//         url: "/about/university-information/it-information",
//       },
//     },
//     {
//       uuid: "a7b30fab-fea0-4cd0-888a-ae7eebdb7eb9",
//       name: "Study at UEA",
//       content: {
//         title: "Study at UEA",
//         url: "/study/international-students",
//       },
//     },
//     {
//       uuid: "6ac66223-3435-4174-b062-df09602e4504",
//       name: "How We Can Work Together",
//       content: {
//         title: "How We Can Work Together",
//         url: "/business/how-we-can-work-together",
//       },
//     },
//     {
//       uuid: "0dd7c816-45bb-44b7-91ae-53aa28f30eb1",
//       name: "Disability Support",
//       content: {
//         title: "Disability Support",
//         url: "/uea-life/student-support/disability-support",
//       },
//     },
//     {
//       uuid: "aa88de01-35ab-4f51-946c-f90aa2bef0fd",
//       name: "Apply",
//       content: {
//         title: "Apply",
//         url: "/apply",
//       },
//     },
//     {
//       uuid: "2de5b204-b4ca-4925-a2ea-22965d556251",
//       name: "Your Country/Region",
//       content: {
//         title: "Your Country/Region",
//         url: "/study/international-students/country-map",
//       },
//     },
//     {
//       uuid: "f6f4e1c4-211d-40c3-bfb5-d0b1779aac22",
//       name: "Foundation Years",
//       content: {
//         title: "Foundation Years",
//         url: "/study/information-for/foundation-years",
//       },
//     },
//     {
//       uuid: "b2b688de-a876-4010-aa7f-aba659bda2dc",
//       name: "Undergraduate",
//       content: {
//         title: "Undergraduate",
//         url: "/course-finder?primaryFilter=Undergraduate",
//       },
//     },
//     {
//       uuid: "4a63b181-7738-4f5f-88a0-8118c72281e7",
//       name: "School of Education and Lifelong Learning",
//       content: {
//         title: "School of Education and Lifelong Learning",
//         url: "/about/school-of-education-and-lifelong-learning",
//       },
//     },
//     {
//       uuid: "de8e6982-080a-4321-b9d6-695c826612eb",
//       name: "School of Engineering",
//       content: {
//         title: "School of Engineering",
//         url: "/about/school-of-engineering",
//       },
//     },
//     {
//       uuid: "8bdbfb61-4b28-4c2c-bf25-4e816c7d5da6",
//       name: "School of Art Media and American Studies",
//       content: {
//         title: "School of Art Media and American Studies",
//         url: "/about/school-of-art-media-and-american-studies",
//       },
//     },
//     {
//       uuid: "91d55c80-9347-443d-9e34-9d9f23d0bf12",
//       name: "Staff Benefits",
//       content: {
//         title: "Staff Benefits",
//         url: "/about/working-at-uea/staff-benefits",
//       },
//     },
//     {
//       uuid: "7bb8e6e7-031a-4ea4-8a10-fddf2a8076b1",
//       name: "Enterprise Centre",
//       content: {
//         title: "Enterprise Centre",
//         url: "/business/grow-your-business/a-home-for-your-business",
//       },
//     },
//     {
//       uuid: "230d607b-b8a0-4023-ac69-9d1ee8e378c7",
//       name: "Visit UEA",
//       content: {
//         title: "Visit UEA",
//         url: "/visit",
//       },
//     },
//     {
//       uuid: "94575d23-c531-4323-be52-941c1aefbb4a",
//       name: "Sustainability",
//       content: {
//         title: "Sustainability",
//         url: "/about/university-information/sustainability",
//       },
//     },
//     {
//       uuid: "6a96d296-4f94-4991-b95d-caef010960c3",
//       name: "Sustainable Research",
//       content: {
//         title: "Sustainable Research",
//         url: "/research/about-uea-research-and-impact/research-for-sustainable-development",
//       },
//     },
//     {
//       uuid: "fc7b23b2-7d94-4288-a545-70d49899eb7f",
//       name: "Access Student Talent",
//       content: {
//         title: "Access Student Talent",
//         url: "/business/access-student-talent",
//       },
//     },
//     {
//       uuid: "5cc5f71f-6dfa-4261-85cd-818ceafa565d",
//       name: "Explore UEA Research",
//       content: {
//         title: "Explore UEA Research",
//         url: "/research/explore",
//       },
//     },
//     {
//       uuid: "ba7e6c19-858d-4313-892d-0a5642701c8c",
//       name: "Student Life",
//       content: {
//         title: "Student Life",
//         url: "/uea-life/student-support/student-life",
//       },
//     },
//     {
//       uuid: "2546351e-6a31-490a-b229-5d83c0209409",
//       name: "Undergraduate",
//       content: {
//         title: "Undergraduate",
//         url: "/apply/undergraduate",
//       },
//     },
//     {
//       uuid: "b9074755-9268-467e-aabc-59ae0bbe3785",
//       name: "Fees & Scholarships",
//       content: {
//         title: "Fees & Scholarships",
//         url: "/study/international-students/fees-and-scholarships",
//       },
//     },
//     {
//       uuid: "4adea32b-ae99-4603-9195-415a34aa6b82",
//       name: "Applicants and Offer Holders",
//       content: {
//         title: "Applicants and Offer Holders",
//         url: "/study/information-for/applicants-and-offer-holders",
//       },
//     },
//     {
//       uuid: "bda21e3c-bff2-464c-8cd4-50ec0a631175",
//       name: "Postgraduate",
//       content: {
//         title: "Postgraduate",
//         url: "/course-finder?primaryFilter=Postgraduate",
//       },
//     },
//     {
//       uuid: "1f9cc6b4-e02e-4506-9dfa-64d00ff9aa9b",
//       name: "School of International Development",
//       content: {
//         title: "School of International Development",
//         url: "/about/school-of-international-development",
//       },
//     },
//     {
//       uuid: "da7c68c7-56a1-49ea-a147-cf9d4e123d57",
//       name: "School of Environmental Sciences",
//       content: {
//         title: "School of Environmental Sciences",
//         url: "/about/school-of-environmental-sciences",
//       },
//     },
//     {
//       uuid: "18ff8ead-3aea-4008-be2d-5054d1ae6979",
//       name: "School of History",
//       content: {
//         title: "School of History",
//         url: "/about/school-of-history",
//       },
//     },
//     {
//       uuid: "99faf738-11a9-42cd-aa08-d86218a4eda4",
//       name: "Current Vacancies",
//       content: {
//         title: "Current Vacancies",
//         url: "https://myview.uea.ac.uk/webrecruitment/",
//       },
//     },
//     {
//       uuid: "7ce3d49e-2ce5-4a9e-b0da-7498b2e8f5d8",
//       name: "Alumni",
//       content: {
//         title: "Alumni",
//         url: "/about/alumni-and-supporters/",
//       },
//     },
//     {
//       uuid: "132b54f1-2bf0-4ecd-a2a0-ca4431bc508a",
//       name: "Global Engagement",
//       content: {
//         title: "Global Engagement",
//         url: "/about/partnerships-hub/global-engagement",
//       },
//     },
//     {
//       uuid: "4d2b92de-93df-43e7-8cda-7559786ccea5",
//       name: "IT Services for Visitors",
//       content: {
//         title: "IT Services for Visitors",
//         url: "/about/university-information/it-information/information-for-visitors",
//       },
//     },
//     {
//       uuid: "7ad7cc37-d737-4151-bfea-f8b317c37564",
//       name: "Corporate Social Responsibility",
//       content: {
//         title: "Corporate Social Responsibility",
//         url: "/about/university-information/corporate-social-responsibility",
//       },
//     },
//     {
//       uuid: "a9751b51-7f57-44c6-b819-1ce235862c83",
//       name: "Postgraduate Research",
//       content: {
//         title: "Postgraduate Research",
//         url: "/research/research-with-us/postgraduate-research",
//       },
//     },
//     {
//       uuid: "15e20977-8cb4-492a-ab73-b41b2bcb7a71",
//       name: "Grow Your Business",
//       content: {
//         title: "Grow Your Business",
//         url: "/business/grow-your-business",
//       },
//     },
//     {
//       uuid: "216bae1f-764d-4ebb-a180-2151418a7a95",
//       name: "Learning Enhancement",
//       content: {
//         title: "Learning Enhancement",
//         url: "/uea-life/student-support/learning-enhancement",
//       },
//     },
//     {
//       uuid: "13e6c8e3-4a68-4425-8899-50f943c19297",
//       name: "Campus Life",
//       content: {
//         title: "Campus Life",
//         url: "/uea-life/campus-life",
//       },
//     },
//     {
//       uuid: "c3559433-a45c-437f-b6b7-b74f32f614c3",
//       name: "Postgraduate",
//       content: {
//         title: "Postgraduate",
//         url: "/apply/postgraduate",
//       },
//     },
//     {
//       uuid: "f46975f6-6a3a-45c0-92db-22d866594b81",
//       name: "Visit Us",
//       content: {
//         title: "Visit Us",
//         url: "/study/visit/",
//       },
//     },
//     {
//       uuid: "a8c48c4f-8175-4b14-8747-3d1318d27cd2",
//       name: "Students from the EU",
//       content: {
//         title: "Students from the EU",
//         url: "/study/international-students/students-from-the-eu",
//       },
//     },
//     {
//       uuid: "36276c32-e4f2-4332-a26f-179ccd5d032a",
//       name: "New Students",
//       content: {
//         title: "New Students",
//         url: "/welcome",
//       },
//     },
//     {
//       uuid: "02da4b08-5a7c-484e-9933-c10d2468042a",
//       name: "PhD/Doctorate",
//       content: {
//         title: "PhD/Doctorate",
//         url: "/course-finder?primaryFilter=PhD%2FDoctorate",
//       },
//     },
//     {
//       uuid: "e525f761-fb58-4255-8a27-e7f193982b0b",
//       name: "Law School",
//       content: {
//         title: "Law School",
//         url: "/about/law-school",
//       },
//     },
//     {
//       uuid: "cdc3112a-099e-4f5b-85ce-2e631cbb3736",
//       name: "School of Mathematics",
//       content: {
//         title: "School of Mathematics",
//         url: "/about/school-of-mathematics",
//       },
//     },
//     {
//       uuid: "b23d4d43-f71a-4b30-ba9a-4dfd7b82c1ef",
//       name: "Interdisciplinary Institute for the Humanities",
//       content: {
//         title: "Interdisciplinary Institute for the Humanities",
//         url: "/about/interdisciplinary-institute-for-the-humanities",
//       },
//     },
//     {
//       uuid: "0fa015c6-f1be-4849-baa9-45fa913dd50a",
//       name: "Before You Join",
//       content: {
//         title: "Before You Join",
//         url: "/about/working-at-uea/before-you-join",
//       },
//     },
//     {
//       uuid: "731ded77-5b69-4504-9d5f-273560b36efb",
//       name: "Careers",
//       content: {
//         title: "Careers",
//         url: "/about/alumni-and-supporters/careers",
//       },
//     },
//     {
//       uuid: "305153c1-ad33-41a5-9352-1fba00eb6d52",
//       name: "Interns and Placements",
//       content: {
//         title: "Interns and Placements",
//         url: "/business/access-student-talent",
//       },
//     },
//     {
//       uuid: "5775b367-c102-434b-91a2-54629175a1a1",
//       name: "Sportspark",
//       content: {
//         title: "Sportspark",
//         url: "https://www.sportspark.co.uk/",
//       },
//     },
//     {
//       uuid: "9358ce86-8056-4690-8060-9f7cda4a08cf",
//       name: "Campus and Community",
//       content: {
//         title: "Campus and Community",
//         url: "/about/university-information/campus-and-community",
//       },
//     },
//     {
//       uuid: "bb535e35-4f5a-46c0-ad6d-3e52e5eff950",
//       name: "Global Engagement",
//       content: {
//         title: "Global Engagement",
//         url: "/about/partnerships-hub/global-engagement",
//       },
//     },
//     {
//       uuid: "0baf09c3-0d3c-495d-a0bf-75e45573a11d",
//       name: "Secure Funding",
//       content: {
//         title: "Secure Funding",
//         url: "/business/secure-funding",
//       },
//     },
//     {
//       uuid: "3d943cea-f8f4-48b8-a0f5-bde786f0b4ec",
//       name: "Research With Us",
//       content: {
//         title: "Research With Us",
//         url: "/research/research-with-us/",
//       },
//     },
//     {
//       uuid: "7d13e53b-36b1-43fb-8702-5023e80dc81e",
//       name: "About UEA Research and Impact",
//       content: {
//         title: "About UEA Research and Impact",
//         url: "/research/about-uea-research-and-impact",
//       },
//     },
//     {
//       uuid: "35d66fb1-94f0-46ca-925b-7a6ab1b4c202",
//       name: "International Students",
//       content: {
//         title: "International Students",
//         url: "/uea-life/student-support/international-student-support",
//       },
//     },
//     {
//       uuid: "2a243b90-075f-4c69-9bb6-8ecf11f08b4b",
//       name: "Norwich & Beyond",
//       content: {
//         title: "Norwich & Beyond",
//         url: "/uea-life/norwich-and-beyond",
//       },
//     },
//     {
//       uuid: "9b7deafe-dea8-4940-b7d1-c1c7380a51a8",
//       name: "Fees",
//       content: {
//         title: "Fees",
//         url: "/study/fees-and-funding/fees",
//       },
//     },
//     {
//       uuid: "a5a20d69-65ee-43c2-b056-c1e80aeb608a",
//       name: "Apprenticeships",
//       content: {
//         title: "Apprenticeships",
//         url: "/apply/apprenticeships",
//       },
//     },
//     {
//       uuid: "7d7165e3-e6f3-4a24-9073-2bb463e5b66f",
//       name: "Undergraduate Open Days",
//       content: {
//         title: "Undergraduate Open Days",
//         url: "/study/visit/undergraduate-open-days",
//       },
//     },
//     {
//       uuid: "3b6c1789-faaa-404a-ac3a-feb978ad5973",
//       name: "Inbound Study Abroad & Exchange",
//       content: {
//         title: "Inbound Study Abroad & Exchange",
//         url: "/study/study-abroad-and-exchange/inbound-study-abroad-and-exchange",
//       },
//     },
//     {
//       uuid: "6d356bcc-6ca0-4d3a-95a5-7f7a009104cc",
//       name: "INTO UEA",
//       content: {
//         title: "INTO UEA",
//         url: "/study/international-students/into-uea",
//       },
//     },
//     {
//       uuid: "b36a628a-b17d-4511-8e1e-6294961a3fbc",
//       name: "Graduates",
//       content: {
//         title: "Graduates",
//         url: "/study/information-for/graduates",
//       },
//     },
//     {
//       uuid: "b9045368-1ae1-4370-89de-daa002c55a6b",
//       name: "Foundation Year",
//       content: {
//         title: "Foundation Year",
//         url: "/course-finder?primaryFilter=Undergraduate&secondaryFilter=Foundation%20Year&year",
//       },
//     },
//     {
//       uuid: "359c2940-2440-44b9-bbf0-60ae6278b03d",
//       name: "School of Psychology",
//       content: {
//         title: "School of Psychology",
//         url: "/about/school-of-psychology",
//       },
//     },
//     {
//       uuid: "f65aa946-1033-43c6-b564-2172cc849366",
//       name: "Natural Sciences",
//       content: {
//         title: "Natural Sciences",
//         url: "/about/natural-sciences",
//       },
//     },
//     {
//       uuid: "a95e6541-0e99-4516-b53b-6091e34b7870",
//       name: "Faculty of Medicine and Health",
//       content: {
//         title: "Faculty of Medicine and Health",
//         url: "/about/faculties-and-schools/faculty-of-medicine-and-health",
//       },
//     },
//     {
//       uuid: "881545e2-2a1a-4a10-8659-ed096d333082",
//       name: "School of Literature, Drama and Creative Writing",
//       content: {
//         title: "School of Literature, Drama and Creative Writing",
//         url: "/about/school-of-literature-drama-and-creative-writing",
//       },
//     },
//     {
//       uuid: "ad6b083b-e169-4991-8a54-db7e4bae7340",
//       name: "Explore Norwich & Beyond",
//       content: {
//         title: "Explore Norwich & Beyond",
//         url: "/uea-life/norwich-and-beyond",
//       },
//     },
//     {
//       uuid: "186e145d-8c0e-481f-91f1-c7e0c5f22bfb",
//       name: "Giving-to-UEA",
//       content: {
//         title: "Giving-to-UEA",
//         url: "/about/giving-to-uea",
//       },
//     },
//     {
//       uuid: "e1a596f5-46e3-42a6-b03e-5ec2aaf8796f",
//       name: "Partnerships in Doctoral Training",
//       content: {
//         title: "Partnerships in Doctoral Training",
//         url: "/research/research-with-us/postgraduate-research/latest-phds-and-research-studentships/partnerships-in-doctoral-training",
//       },
//     },
//     {
//       uuid: "73075055-2961-4849-8ac5-499c383e7693",
//       name: "Sainsbury Centre",
//       content: {
//         title: "Sainsbury Centre",
//         url: "/about/information-for-visitors/sainsbury-centre",
//       },
//     },
//     {
//       uuid: "312997d2-fdda-41a5-affd-01cbba9ec6a0",
//       name: "UEA 2030 Vision",
//       content: {
//         title: "UEA 2030 Vision",
//         url: "/about/university-information/uea-2030-vision",
//       },
//     },
//     {
//       uuid: "9a1f0b42-d887-40a3-be52-b4d4cfd1ffec",
//       name: "University of Sanctuary",
//       content: {
//         title: "University of Sanctuary",
//         url: "/about/university-information/corporate-social-responsibility/university-of-sanctuary",
//       },
//     },
//     {
//       uuid: "e6f2e934-c3d5-4cd1-a29c-737ef2967a37",
//       name: "Access Entrepreneurship and Innovation",
//       content: {
//         title: "Access Entrepreneurship and Innovation",
//         url: "/business/access-entrepreneurship-and-innovation",
//       },
//     },
//     {
//       uuid: "1da3864f-9fa2-4737-a7c4-da7d9065fcd4",
//       name: "Postgraduate Research",
//       content: {
//         title: "Postgraduate Research",
//         url: "/research/research-with-us/postgraduate-research",
//       },
//     },
//     {
//       uuid: "6ee4bbe6-06ee-4601-8197-3890eb15db09",
//       name: "ClimateUEA",
//       content: {
//         title: "ClimateUEA",
//         url: "/climate",
//       },
//     },
//     {
//       uuid: "8c0853d4-ab99-4143-a11e-3fb317948ac0",
//       name: "Living on/off Campus",
//       content: {
//         title: "Living on/off Campus",
//         url: "/uea-life/accommodation/",
//       },
//     },
//     {
//       uuid: "9779f9b6-5a7e-4681-b4aa-f15a47e4af7f",
//       name: "Careers and Employability",
//       content: {
//         title: "Careers and Employability",
//         url: "/uea-life/student-support/careers",
//       },
//     },
//     {
//       uuid: "f768d918-f78e-4119-a6a3-04b5a6499b19",
//       name: "Funding Options",
//       content: {
//         title: "Funding Options",
//         url: "/study/fees-and-funding/funding-options",
//       },
//     },
//     {
//       uuid: "28a446f4-d44c-4aaa-880f-5b1bb72dc8b9",
//       name: "International",
//       content: {
//         title: "International",
//         url: "/apply/international",
//       },
//     },
//     {
//       uuid: "07410222-c457-4a17-89ad-a1a640960ee7",
//       name: "Postgraduate Open Days",
//       content: {
//         title: "Postgraduate Open Days",
//         url: "/study/visit/postgraduate-open-days",
//       },
//     },
//     {
//       uuid: "c5d7d8e6-be0f-47cd-b6ab-1b5d81fd2eef",
//       name: "Summer Study at UEA",
//       content: {
//         title: "Summer Study at UEA",
//         url: "/study/study-abroad-and-exchange/summer-study-and-short-courses-at-uea",
//       },
//     },
//     {
//       uuid: "c83bc6b1-5f77-4d46-be54-877a59c9f728",
//       name: "Accommodation for International Students",
//       content: {
//         title: "Accommodation for International Students",
//         url: "/study/international-students/accommodation-for-international-students",
//       },
//     },
//     {
//       uuid: "733b2f69-0a95-4f85-925a-a73d1d20c127",
//       name: "Young People",
//       content: {
//         title: "Young People",
//         url: "/study/information-for/young-people",
//       },
//     },
//     {
//       uuid: "1ad43f5a-9ef3-4f2e-bffc-b4ab6b411077",
//       name: "Short Course/Professional Development",
//       content: {
//         title: "Short Course/Professional Development",
//         url: "/course-finder?primaryFilter=Short%20Course%20%2F%20Professional%20Development",
//       },
//     },
//     {
//       uuid: "6b8234ab-6966-4628-baab-62d6d6798362",
//       name: "School of Social Work",
//       content: {
//         title: "School of Social Work",
//         url: "/about/school-of-social-work",
//       },
//     },
//     {
//       uuid: "b172c458-d17f-4966-863f-7af0856f3a92",
//       name: "School of Pharmacy",
//       content: {
//         title: "School of Pharmacy",
//         url: "/about/school-of-pharmacy",
//       },
//     },
//     {
//       uuid: "6178240b-539c-409a-a5c0-6227b5706d51",
//       name: "Norwich Medical School",
//       content: {
//         title: "Norwich Medical School",
//         url: "/about/norwich-medical-school",
//       },
//     },
//     {
//       uuid: "4e74db4d-de35-4229-9f77-c0a9a043efcb",
//       name: "School of Politics, Philosophy and Communication Studies",
//       content: {
//         title: "School of Politics, Philosophy and Communication Studies",
//         url: "/about/school-of-politics-philosophy-and-communication-studies",
//       },
//     },
//     {
//       uuid: "87c83877-fb81-4c3c-979d-a7b229b290af",
//       name: "Explore the Library",
//       content: {
//         title: "Explore the Library",
//         url: "/about/library-and-archives/explore-the-library",
//       },
//     },
//     {
//       uuid: "9dacc093-1958-4f2e-ad97-559627811c4f",
//       name: "Nursery",
//       content: {
//         title: "Nursery",
//         url: "/uea-life/campus-life/campus-facilities/nursery",
//       },
//     },
//     {
//       uuid: "b39712ec-8400-46b4-83c3-5c2cd5812324",
//       name: "Graduation",
//       content: {
//         title: "Graduation",
//         url: "/about/alumni-and-supporters/graduation",
//       },
//     },
//     {
//       uuid: "77e5d230-0beb-4e4a-9b63-01b51579615a",
//       name: "Schools",
//       content: {
//         title: "Schools",
//         url: "/about/partnerships-hub/schools",
//       },
//     },
//     {
//       uuid: "00230285-6ec1-4605-a45d-3c3772fc6f69",
//       name: "Norwich Research Park",
//       content: {
//         title: "Norwich Research Park",
//         url: "/about/information-for-visitors/norwich-research-park",
//       },
//     },
//     {
//       uuid: "b20bc260-8a44-4803-b74e-39d2393799e0",
//       name: "UEA Values",
//       content: {
//         title: "UEA Values",
//         url: "/about/university-information/vice-chancellors-office/uea-values",
//       },
//     },
//     {
//       uuid: "13d92467-9f26-438b-a2aa-17a74006e593",
//       name: "UEA for Business",
//       content: {
//         title: "UEA for Business",
//         url: "/business/how-we-can-work-together",
//       },
//     },
//     {
//       uuid: "b919247c-f0a6-4a1a-8861-ec7719daedab",
//       name: "Use Our Facilities",
//       content: {
//         title: "Use Our Facilities",
//         url: "/business/use-our-facilities",
//       },
//     },
//     {
//       uuid: "54c8e57a-3d21-43cc-bfd9-a534e5c63f7f",
//       name: "Fellowships",
//       content: {
//         title: "Fellowships",
//         url: "/research/research-with-us/fellowships",
//       },
//     },
//     {
//       uuid: "7bce6a8c-d040-4a8c-bff5-85005f270c38",
//       name: "CreativeUEA",
//       content: {
//         title: "CreativeUEA",
//         url: "/creative",
//       },
//     },
//     {
//       uuid: "c8c74014-678a-46c4-836b-f15fc56b61e5",
//       name: "Prospective Students",
//       content: {
//         title: "Prospective Students",
//         url: "/uea-life/accommodation/prospective-students",
//       },
//     },
//     {
//       uuid: "74d991fe-dc08-4004-9496-26ffd5dd4e8b",
//       name: "Support After UEA",
//       content: {
//         title: "Support After UEA",
//         url: "/uea-life/student-support/support-after-uea",
//       },
//     },
//     {
//       uuid: "34dff977-464f-402a-849a-029b99d6cb3b",
//       name: "Scholarship Finder",
//       content: {
//         title: "Scholarship Finder",
//         url: "/study/fees-and-funding/scholarship-finder",
//       },
//     },
//     {
//       uuid: "0da8928c-829a-47fb-a6fe-7d51ea99845f",
//       name: "Register Interest",
//       content: {
//         title: "Register Interest",
//         url: "/apply/register-interest",
//       },
//     },
//     {
//       uuid: "fcaf0dbc-32dc-4e54-95f5-d6696c386d7d",
//       name: "Campus Tours",
//       content: {
//         title: "Campus Tours",
//         url: "/study/visit/campus-tours",
//       },
//     },
//     {
//       uuid: "54330666-26e9-4980-a82b-3feecd24ed11",
//       name: "Outgoing Study Abroad",
//       content: {
//         title: "Outgoing Study Abroad",
//         url: "/study/study-abroad-and-exchange/outgoing-study-abroad",
//       },
//     },
//     {
//       uuid: "f22ea6cc-b963-4d8e-a3dd-33fec50d966c",
//       name: "Visa Advice",
//       content: {
//         title: "Visa Advice",
//         url: "/study/international-students/visa-advice",
//       },
//     },
//     {
//       uuid: "3dc07490-2a65-4c6d-bba9-5491d784b463",
//       name: "Parents and Carers",
//       content: {
//         title: "Parents and Carers",
//         url: "/study/information-for/parents",
//       },
//     },
//     {
//       uuid: "9dbff00f-4224-4b3c-949e-38d9cbd93267",
//       name: "Summer School",
//       content: {
//         title: "Summer School",
//         url: "/course-finder?primaryFilter=Summer%20School",
//       },
//     },
//     {
//       uuid: "8127b58d-3646-4b41-8e44-0db12ff2b518",
//       name: "Sociology",
//       content: {
//         title: "Sociology",
//         url: "/about/sociology",
//       },
//     },
//     {
//       uuid: "43003844-9012-4755-b4ba-a4075dec6adc",
//       name: "Physics",
//       content: {
//         title: "Physics",
//         url: "/about/physics",
//       },
//     },
//     {
//       uuid: "5d03d9df-4309-4c6f-a80b-178511e9c6bd",
//       name: "School of Health Sciences",
//       content: {
//         title: "School of Health Sciences",
//         url: "/about/school-of-health-sciences",
//       },
//     },
//     {
//       uuid: "5c792102-c249-4746-bd37-3cf5f345fa09",
//       name: "Liberal Arts",
//       content: {
//         title: "Liberal Arts",
//         url: "/about/liberal-arts",
//       },
//     },
//     {
//       uuid: "eec2b027-1f1c-4da6-809d-39af36c0acae",
//       name: "Archives and Special Collections",
//       content: {
//         title: "Archives and Special Collections",
//         url: "/about/library-and-archives/archives-and-special-collections",
//       },
//     },
//     {
//       uuid: "ff7e5cd6-9f22-4d2c-a73d-3555ff1d9086",
//       name: "Retirement Association",
//       content: {
//         title: "Retirement Association",
//         url: "/about/working-at-uea/retirement-association",
//       },
//     },
//     {
//       uuid: "4d09f1f8-fcbf-44db-b27f-abe3cc5467c8",
//       name: "Student Records",
//       content: {
//         title: "Student Records",
//         url: "/about/alumni-and-supporters/student-records",
//       },
//     },
//     {
//       uuid: "fd305ec9-6faa-4c48-9244-94c10b5cfb13",
//       name: "Sponsors and Donors",
//       content: {
//         title: "Sponsors and Donors",
//         url: "/about/giving-to-uea",
//       },
//     },
//     {
//       uuid: "a40606f8-93b6-49a2-be2f-a5072a82042b",
//       name: "Norwich & Beyond",
//       content: {
//         title: "Norwich & Beyond",
//         url: "/uea-life/norwich-and-beyond",
//       },
//     },
//     {
//       uuid: "41a3c81d-ccd6-48b2-9478-9d37b810f652",
//       name: "UEA Plan 2016-2020",
//       content: {
//         title: "UEA Plan 2016-2020",
//         url: "/about/university-information/uea-plan-2016-2020",
//       },
//     },
//     {
//       uuid: "ad5f9e93-cbc6-49a1-90ab-e48e64a97241",
//       name: "Alumni Activities",
//       content: {
//         title: "Alumni Activities",
//         url: "/about/alumni-and-supporters/alumni/get-involved/events/global-gathering",
//       },
//     },
//     {
//       uuid: "f9ed0dbe-04cc-47d8-8d5f-a434667548ac",
//       name: "Publications",
//       content: {
//         title: "Publications",
//         url: "/business/publications",
//       },
//     },
//     {
//       uuid: "422fb32b-b057-4b75-9e33-4066f7069cfc",
//       name: "Working at UEA",
//       content: {
//         title: "Working at UEA",
//         url: "/about/working-at-uea",
//       },
//     },
//     {
//       uuid: "6779adb2-83a5-4b40-89e2-5a7912fe260e",
//       name: "Research Groups and Centres",
//       content: {
//         title: "Research Groups and Centres",
//         url: "/groups-and-centres",
//       },
//     },
//     {
//       uuid: "40115fad-2c11-43fd-9a27-d3802465b176",
//       name: "Application Process",
//       content: {
//         title: "Application Process",
//         url: "/uea-life/accommodation/application-process",
//       },
//     },
//     {
//       uuid: "d3448b3e-37e1-4415-a1a4-92b405fac044",
//       name: "Student Services Live Chat",
//       content: {
//         title: "Student Services Live Chat",
//         url: "/uea-life/student-support/live-chat",
//       },
//     },
//     {
//       uuid: "4fa621b5-4087-47b7-841d-5b5efddd552f",
//       name: "Events",
//       content: {
//         title: "Events",
//         url: "/uea-life/events",
//       },
//     },
//     {
//       uuid: "10cb63bf-4f93-4059-89fb-10c6ad6eb885",
//       name: "Bursaries",
//       content: {
//         title: "Bursaries",
//         url: "/study/fees-and-funding/bursaries",
//       },
//     },
//     {
//       uuid: "f09f4cb3-89df-400a-b41b-654b9be44f31",
//       name: "Find a Course",
//       content: {
//         title: "Find a Course",
//         url: "/course-finder",
//       },
//     },
//     {
//       uuid: "2d0b806f-6650-43a2-b5c4-d1068a07ff2f",
//       name: "Plan Your Visit",
//       content: {
//         title: "Plan Your Visit",
//         url: "/study/visit/plan-your-visit",
//       },
//     },
//     {
//       uuid: "ccae13be-e87c-4ad2-8f0c-dc1bbbe0bc34",
//       name: "Erasmus Programme",
//       content: {
//         title: "Erasmus Programme",
//         url: "/study/study-abroad-and-exchange/erasmus-programme",
//       },
//     },
//     {
//       uuid: "23cb8f2c-543b-4408-85db-45ff3d8a37e2",
//       name: "How to Apply",
//       content: {
//         title: "How to Apply",
//         url: "/apply/international",
//       },
//     },
//     {
//       uuid: "c3fa4f4a-29cb-431d-9e1e-e94ef82926dd",
//       name: "Teachers",
//       content: {
//         title: "Teachers",
//         url: "/study/information-for/teachers",
//       },
//     },
//     {
//       uuid: "7d6a5f3c-aa63-4481-a044-eadc803dd08f",
//       name: "International Preparation",
//       content: {
//         title: "International Preparation",
//         url: "/course-finder?primaryFilter=International%20Preparation",
//       },
//     },
//     {
//       uuid: "4ec1f4d3-44d5-428f-a906-3ded546156d8",
//       name: "Accessibility",
//       content: {
//         title: "Accessibility",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/website",
//       },
//     },
//     {
//       uuid: "08d76fe9-6d3d-4f56-800c-6e6c7e562508",
//       name: "Welcome",
//       content: {
//         title: "Welcome",
//         url: "/welcome",
//       },
//     },
//     {
//       uuid: "9d3a6616-87be-40a1-9ca7-129c99cf46f1",
//       name: "News",
//       content: {
//         title: "News",
//         url: "/about/news",
//       },
//     },
//     {
//       uuid: "0926acf0-1a95-4a7f-9b38-a5813b9e4d49",
//       name: "Apprenticeships",
//       content: {
//         title: "Apprenticeships",
//         url: "/apprenticeships",
//       },
//     },
//     {
//       uuid: "166faf7f-6c56-4588-a143-58bf14f6c9fe",
//       name: "Legal Statements",
//       content: {
//         title: "Legal Statements",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-legal-policies",
//       },
//     },
//     {
//       uuid: "47076cb7-f6fa-4ae8-a02f-5c8981826c2b",
//       name: "New Students",
//       content: {
//         title: "New Students",
//         url: "https://www.uea.ac.uk/welcome",
//       },
//     },
//     {
//       uuid: "313ff16a-21e5-48b5-9e88-8528f45da2b6",
//       name: "Contact Us and Map",
//       content: {
//         title: "Contact Us and Map",
//         url: "/about/information-for-visitors/contact-information-and-map",
//       },
//     },
//     {
//       uuid: "ab9992b5-d7f9-43f6-b757-36576c6aa966",
//       name: "Incoming Study Abroad",
//       content: {
//         title: "Incoming Study Abroad",
//         url: "/study/study-abroad-and-exchange/incoming-study-abroad-and-exchange",
//       },
//     },
//     {
//       uuid: "46b3adbe-c273-4fb8-b67d-7c3a13382b45",
//       name: "Statement on Modern Slavery",
//       content: {
//         title: "Statement on Modern Slavery",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-legal-policies/modern-slavery-statement",
//       },
//     },
//     {
//       uuid: "1fab50a3-264e-4062-ae41-8e3a9e515672",
//       name: "Cookie Policy",
//       content: {
//         title: "Cookie Policy",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/website",
//       },
//     },
//     {
//       uuid: "cc6f86ec-a212-4f47-8b8c-22e2150290f0",
//       name: "Data Protection",
//       content: {
//         title: "Data Protection",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/data-protection",
//       },
//     },
//     {
//       uuid: "a218248b-dcef-4596-8af9-00a27ec322c2",
//       name: "Equality, Diversity and Inclusion",
//       content: {
//         title: "Equality, Diversity and Inclusion",
//         url: "/about/equality-diversity-and-inclusion",
//       },
//     },
//     {
//       uuid: "d00892d0-ce36-44d5-acba-6976c323b8e2",
//       name: "Donate",
//       content: {
//         title: "Donate",
//         url: "/donate",
//       },
//     },
//     {
//       uuid: "62feefa9-ea8d-4589-b000-e84fb6746ce7",
//       name: "Ukraine: How you can help",
//       content: {
//         title: "Ukraine: How you can help",
//         url: "/about/news/statements/ukraine",
//       },
//     },
//     {
//       uuid: "f6fbe62a-fdc9-40f9-be5a-339fee265b6a",
//       name: "COVID-19 appeal",
//       content: {
//         title: "COVID-19 appeal",
//         url: "covid-19-appeal",
//       },
//     },
//   ],
// };
// Dark.args = {
//   background: "dark",
//   navItemArray: [
//     {
//       url: "/study",
//       _uid: "da720909-b536-4a52-874f-c615a5d73102",
//       title: "Study",
//       target: false,
//       navBlok: [
//         {
//           url: "/course-finder",
//           _uid: "40247380-5559-4c86-9871-efa646461ffa",
//           title: "Course Finder",
//           target: false,
//           navBlok: [
//             {
//               _uid: "4a40e79f-95fa-411e-bb4d-134a5302d1c6",
//               navItem: "082402b4-e6d2-42a3-b709-a0d2a070d97a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4a40e79f-95fa-411e-bb4d-134a5302d1c6", "id": "131335571"}-->',
//             },
//             {
//               _uid: "7733d941-d25b-4ac6-96ba-04eb66a676c7",
//               navItem: "b2b688de-a876-4010-aa7f-aba659bda2dc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7733d941-d25b-4ac6-96ba-04eb66a676c7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d2f5d9ba-5f11-462a-99f2-4d4a075c8865",
//               navItem: "bda21e3c-bff2-464c-8cd4-50ec0a631175",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d2f5d9ba-5f11-462a-99f2-4d4a075c8865", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0f4dc873-9378-47e8-97c5-d5140e52ebbd",
//               navItem: "02da4b08-5a7c-484e-9933-c10d2468042a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0f4dc873-9378-47e8-97c5-d5140e52ebbd", "id": "131335571"}-->',
//             },
//             {
//               _uid: "89d3b91f-8bf9-4dee-9dc1-2907264610b4",
//               navItem: "b9045368-1ae1-4370-89de-daa002c55a6b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "89d3b91f-8bf9-4dee-9dc1-2907264610b4", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bfbaf0ce-a359-4a17-9a6a-5d91b1e1b849",
//               navItem: "1ad43f5a-9ef3-4f2e-bffc-b4ab6b411077",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bfbaf0ce-a359-4a17-9a6a-5d91b1e1b849", "id": "131335571"}-->',
//             },
//             {
//               _uid: "97b0c9dc-2ce6-40cf-a233-2005e660f0aa",
//               navItem: "9dbff00f-4224-4b3c-949e-38d9cbd93267",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "97b0c9dc-2ce6-40cf-a233-2005e660f0aa", "id": "131335571"}-->',
//             },
//             {
//               _uid: "9d0eb615-83a2-4fa0-978c-58268613306f",
//               navItem: "7d6a5f3c-aa63-4481-a044-eadc803dd08f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9d0eb615-83a2-4fa0-978c-58268613306f", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e48feaa4-6b05-4e92-9fda-735e6bf2ead0",
//               navItem: "0926acf0-1a95-4a7f-9b38-a5813b9e4d49",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e48feaa4-6b05-4e92-9fda-735e6bf2ead0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "18cda972-fdfe-4ec8-b591-674e636538e4",
//               navItem: "ab9992b5-d7f9-43f6-b757-36576c6aa966",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "18cda972-fdfe-4ec8-b591-674e636538e4", "id": "131335571"}-->',
//             },
//           ],
//           children: [],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "40247380-5559-4c86-9871-efa646461ffa", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/information-for",
//           _uid: "61f4ae78-76f3-441a-9635-c0734b9119e0",
//           title: "Information For",
//           target: false,
//           navBlok: [
//             {
//               _uid: "4e257c37-4443-4b66-97ff-dfed9d9374dd",
//               navItem: "4043d15c-8fda-4d1a-b03c-ed6e73b68a51",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4e257c37-4443-4b66-97ff-dfed9d9374dd", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e49088a5-6532-44ef-9195-d049c1c1fdb0",
//               navItem: "b4632870-1a4f-4175-bfff-2efd93c3874c",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e49088a5-6532-44ef-9195-d049c1c1fdb0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "c793a9e2-ffe4-4681-935c-650199b861f5",
//               navItem: "f6f4e1c4-211d-40c3-bfb5-d0b1779aac22",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c793a9e2-ffe4-4681-935c-650199b861f5", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b459139f-e766-4704-8c19-8f8458574028",
//               navItem: "4adea32b-ae99-4603-9195-415a34aa6b82",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b459139f-e766-4704-8c19-8f8458574028", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4a2d5e42-c6d6-4dc5-81e8-3e03d11c1337",
//               navItem: "36276c32-e4f2-4332-a26f-179ccd5d032a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4a2d5e42-c6d6-4dc5-81e8-3e03d11c1337", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4b9994b9-9afc-4279-904e-a6b7d661f2d9",
//               navItem: "b36a628a-b17d-4511-8e1e-6294961a3fbc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4b9994b9-9afc-4279-904e-a6b7d661f2d9", "id": "131335571"}-->',
//             },
//             {
//               _uid: "a524a26d-1505-4276-9d92-3bd804a3a1c7",
//               navItem: "733b2f69-0a95-4f85-925a-a73d1d20c127",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a524a26d-1505-4276-9d92-3bd804a3a1c7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "91138691-3d3c-4626-b10b-445544c161b0",
//               navItem: "3dc07490-2a65-4c6d-bba9-5491d784b463",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "91138691-3d3c-4626-b10b-445544c161b0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4efdfb03-af87-4669-92bc-be377fab2723",
//               navItem: "c3fa4f4a-29cb-431d-9e1e-e94ef82926dd",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4efdfb03-af87-4669-92bc-be377fab2723", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "61f4ae78-76f3-441a-9635-c0734b9119e0", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/international-students",
//           _uid: "1e301632-110e-46df-8c76-ccb949ad041b",
//           title: "International Students",
//           target: false,
//           navBlok: [
//             {
//               _uid: "3de1e81a-d80b-49b3-a7b6-2d8f4d8f8a24",
//               navItem: "df088c1e-da38-46a0-9eec-e196dd653fa1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "3de1e81a-d80b-49b3-a7b6-2d8f4d8f8a24", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bce40591-5c61-4495-84ab-d176890c4adb",
//               navItem: "7e27ba49-9964-4817-967a-f6fbb15a6ccc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bce40591-5c61-4495-84ab-d176890c4adb", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8ab414eb-0387-45f4-a0a7-2206335f8ca6",
//               navItem: "2de5b204-b4ca-4925-a2ea-22965d556251",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8ab414eb-0387-45f4-a0a7-2206335f8ca6", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8cdab14b-a794-4263-9200-26cef467b029",
//               navItem: "b9074755-9268-467e-aabc-59ae0bbe3785",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8cdab14b-a794-4263-9200-26cef467b029", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b705bf7e-ece3-480d-a8f8-225f8aa763ee",
//               navItem: "a8c48c4f-8175-4b14-8747-3d1318d27cd2",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b705bf7e-ece3-480d-a8f8-225f8aa763ee", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4367303f-bc9b-4c89-91ff-f018508c406c",
//               navItem: "6d356bcc-6ca0-4d3a-95a5-7f7a009104cc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4367303f-bc9b-4c89-91ff-f018508c406c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6c64c538-8aca-44e2-9998-97bddfb78d09",
//               navItem: "c83bc6b1-5f77-4d46-be54-877a59c9f728",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6c64c538-8aca-44e2-9998-97bddfb78d09", "id": "131335571"}-->',
//             },
//             {
//               _uid: "1a79868c-1373-436a-af4b-8cff913fed31",
//               navItem: "f22ea6cc-b963-4d8e-a3dd-33fec50d966c",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1a79868c-1373-436a-af4b-8cff913fed31", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e674c58f-673d-4da0-bee4-e513c66eff5a",
//               navItem: "23cb8f2c-543b-4408-85db-45ff3d8a37e2",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e674c58f-673d-4da0-bee4-e513c66eff5a", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1e301632-110e-46df-8c76-ccb949ad041b", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/study-abroad-and-exchange",
//           _uid: "ed2f9105-3aaa-4264-8a79-eb3f335075f5",
//           title: "Study Abroad and Exchange",
//           target: false,
//           navBlok: [
//             {
//               _uid: "75603f16-a527-4d8f-a430-9d0bc43bb78b",
//               navItem: "3b6c1789-faaa-404a-ac3a-feb978ad5973",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "75603f16-a527-4d8f-a430-9d0bc43bb78b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b1be66d7-98b3-4326-910b-96c7b1d266d2",
//               navItem: "c5d7d8e6-be0f-47cd-b6ab-1b5d81fd2eef",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b1be66d7-98b3-4326-910b-96c7b1d266d2", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b4500ccf-bfdd-45c4-a378-f6241927f339",
//               navItem: "54330666-26e9-4980-a82b-3feecd24ed11",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b4500ccf-bfdd-45c4-a378-f6241927f339", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0cafeab4-08a1-4c93-aab2-adb300e8713c",
//               navItem: "ccae13be-e87c-4ad2-8f0c-dc1bbbe0bc34",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0cafeab4-08a1-4c93-aab2-adb300e8713c", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ed2f9105-3aaa-4264-8a79-eb3f335075f5", "id": "131335571"}-->',
//         },
//         {
//           url: "/visit",
//           _uid: "449b9961-583b-4b01-bc71-75f5cf066ffe",
//           title: "Visit",
//           target: false,
//           navBlok: [
//             {
//               _uid: "a9af18ad-82db-4f35-9179-1ed3e97616fa",
//               navItem: "f46975f6-6a3a-45c0-92db-22d866594b81",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a9af18ad-82db-4f35-9179-1ed3e97616fa", "id": "131335571"}-->',
//             },
//             {
//               _uid: "159b1b0e-d907-429d-b730-05f8b805e4db",
//               navItem: "7d7165e3-e6f3-4a24-9073-2bb463e5b66f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "159b1b0e-d907-429d-b730-05f8b805e4db", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8ba0a7aa-2049-49f7-acfe-0110b33857bc",
//               navItem: "07410222-c457-4a17-89ad-a1a640960ee7",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8ba0a7aa-2049-49f7-acfe-0110b33857bc", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2098de44-16c9-4364-8894-3737667d828c",
//               navItem: "fcaf0dbc-32dc-4e54-95f5-d6696c386d7d",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2098de44-16c9-4364-8894-3737667d828c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "f8209856-d64d-4035-91d2-97588d96a3ad",
//               navItem: "2d0b806f-6650-43a2-b5c4-d1068a07ff2f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f8209856-d64d-4035-91d2-97588d96a3ad", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "449b9961-583b-4b01-bc71-75f5cf066ffe", "id": "131335571"}-->',
//         },
//         {
//           url: "/apply",
//           _uid: "ec5ef15b-c7fc-41ff-a508-59e4fa0f86d3",
//           title: "Apply",
//           target: false,
//           navBlok: [
//             {
//               _uid: "9ee1f580-1d28-4c54-b6de-7196f77e1bd7",
//               navItem: "aa88de01-35ab-4f51-946c-f90aa2bef0fd",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9ee1f580-1d28-4c54-b6de-7196f77e1bd7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2f4a54c3-68fb-4b97-83d6-d9178cac765e",
//               navItem: "2546351e-6a31-490a-b229-5d83c0209409",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2f4a54c3-68fb-4b97-83d6-d9178cac765e", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b9767440-1a44-4594-adc0-e27a41f7ce1b",
//               navItem: "c3559433-a45c-437f-b6b7-b74f32f614c3",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b9767440-1a44-4594-adc0-e27a41f7ce1b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b244ae15-8cfb-476f-8b17-db5dc2ae6867",
//               navItem: "a5a20d69-65ee-43c2-b056-c1e80aeb608a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b244ae15-8cfb-476f-8b17-db5dc2ae6867", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d97c849a-d5e9-4ee0-aa67-0fe77ee2d63b",
//               navItem: "28a446f4-d44c-4aaa-880f-5b1bb72dc8b9",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d97c849a-d5e9-4ee0-aa67-0fe77ee2d63b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "c5cecd78-6574-4e15-a39b-c99109327184",
//               navItem: "0da8928c-829a-47fb-a6fe-7d51ea99845f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c5cecd78-6574-4e15-a39b-c99109327184", "id": "131335571"}-->',
//             },
//             {
//               _uid: "4961a56f-73dd-430d-90fa-461dff515ce5",
//               navItem: "f09f4cb3-89df-400a-b41b-654b9be44f31",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4961a56f-73dd-430d-90fa-461dff515ce5", "id": "131335571"}-->',
//             },
//           ],
//           children: [],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ec5ef15b-c7fc-41ff-a508-59e4fa0f86d3", "id": "131335571"}-->',
//         },
//         {
//           url: "/study/fees-and-funding",
//           _uid: "314505ed-183c-4a1f-996b-2f41f3c059a7",
//           title: "Fees and Funding",
//           target: false,
//           navBlok: [
//             {
//               _uid: "59c1a4aa-2dd6-4ed6-aa00-43f2ce63e25a",
//               navItem: "9b7deafe-dea8-4940-b7d1-c1c7380a51a8",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "59c1a4aa-2dd6-4ed6-aa00-43f2ce63e25a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "173caf0f-0fc9-4dad-8b04-eb4ba3d30cbe",
//               navItem: "f768d918-f78e-4119-a6a3-04b5a6499b19",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "173caf0f-0fc9-4dad-8b04-eb4ba3d30cbe", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2e60df1a-93b5-437d-bcb2-70f747b10253",
//               navItem: "34dff977-464f-402a-849a-029b99d6cb3b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2e60df1a-93b5-437d-bcb2-70f747b10253", "id": "131335571"}-->',
//             },
//             {
//               _uid: "a3fe1281-ff53-4085-9c69-28ece609caf1",
//               navItem: "10cb63bf-4f93-4059-89fb-10c6ad6eb885",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a3fe1281-ff53-4085-9c69-28ece609caf1", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "314505ed-183c-4a1f-996b-2f41f3c059a7", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "da720909-b536-4a52-874f-c615a5d73102", "id": "131335571"}-->',
//     },
//     {
//       url: "/uea-life",
//       _uid: "1d4b820b-68e9-4c86-a249-e022eb316299",
//       title: "UEA Life",
//       target: false,
//       navBlok: [
//         {
//           _uid: "8aa678e2-f7e0-4f4f-98ff-3c02bf10131d",
//           navItem: "13e6c8e3-4a68-4425-8899-50f943c19297",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8aa678e2-f7e0-4f4f-98ff-3c02bf10131d", "id": "131335571"}-->',
//         },
//         {
//           _uid: "64c99c43-65d1-4aae-9d8b-48a752ec19a3",
//           navItem: "a40606f8-93b6-49a2-be2f-a5072a82042b",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "64c99c43-65d1-4aae-9d8b-48a752ec19a3", "id": "131335571"}-->',
//         },
//         {
//           url: "/uea-life/accommodation",
//           _uid: "e13e0e63-2ee0-4cc2-a5c8-4f64d826c262",
//           title: "Accommodation",
//           target: false,
//           navBlok: [
//             {
//               _uid: "f66ac81d-1db7-4c38-aeb5-5ed045288553",
//               navItem: "8c0853d4-ab99-4143-a11e-3fb317948ac0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f66ac81d-1db7-4c38-aeb5-5ed045288553", "id": "131335571"}-->',
//             },
//             {
//               _uid: "1b3d25a1-b4db-4b55-bee0-9418bec42db7",
//               navItem: "c8c74014-678a-46c4-836b-f15fc56b61e5",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1b3d25a1-b4db-4b55-bee0-9418bec42db7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "20717b4c-9c85-4d4e-ad72-8e75141ecea5",
//               navItem: "40115fad-2c11-43fd-9a27-d3802465b176",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "20717b4c-9c85-4d4e-ad72-8e75141ecea5", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e13e0e63-2ee0-4cc2-a5c8-4f64d826c262", "id": "131335571"}-->',
//         },
//         {
//           url: "/uea/student-support",
//           _uid: "2fad35c2-f73d-4359-b1c9-c5e10803dd5c",
//           title: "Student Support",
//           target: false,
//           navBlok: [
//             {
//               _uid: "29210c50-3cf9-429b-8f64-fd63049f9b07",
//               navItem: "bbd13d93-d66a-4743-a3dd-12f262a8e95a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "29210c50-3cf9-429b-8f64-fd63049f9b07", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8bd6d0fb-6ce3-48e8-b675-283c5b30959b",
//               navItem: "0dd7c816-45bb-44b7-91ae-53aa28f30eb1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8bd6d0fb-6ce3-48e8-b675-283c5b30959b", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d1ca801a-0233-451d-83ae-2bf4977c6c1c",
//               navItem: "ba7e6c19-858d-4313-892d-0a5642701c8c",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d1ca801a-0233-451d-83ae-2bf4977c6c1c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "5830f413-e18e-4168-b3a8-05ff5de888ee",
//               navItem: "216bae1f-764d-4ebb-a180-2151418a7a95",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "5830f413-e18e-4168-b3a8-05ff5de888ee", "id": "131335571"}-->',
//             },
//             {
//               _uid: "9037444a-ddaf-40f3-9a20-38ec16ea5aff",
//               navItem: "35d66fb1-94f0-46ca-925b-7a6ab1b4c202",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9037444a-ddaf-40f3-9a20-38ec16ea5aff", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6d5af400-63be-4b10-b954-e44e17017491",
//               navItem: "9779f9b6-5a7e-4681-b4aa-f15a47e4af7f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6d5af400-63be-4b10-b954-e44e17017491", "id": "131335571"}-->',
//             },
//             {
//               _uid: "1d1d6c93-5da6-468f-81f4-a38ad0de4ef8",
//               navItem: "74d991fe-dc08-4004-9496-26ffd5dd4e8b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1d1d6c93-5da6-468f-81f4-a38ad0de4ef8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "fa5b7ad0-feb5-4d40-b922-94f52af32743",
//               navItem: "d3448b3e-37e1-4415-a1a4-92b405fac044",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fa5b7ad0-feb5-4d40-b922-94f52af32743", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "2fad35c2-f73d-4359-b1c9-c5e10803dd5c", "id": "131335571"}-->',
//         },
//         {
//           _uid: "a4309e12-3fd4-44a9-80f8-a5d6a4b387af",
//           navItem: "4fa621b5-4087-47b7-841d-5b5efddd552f",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a4309e12-3fd4-44a9-80f8-a5d6a4b387af", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1d4b820b-68e9-4c86-a249-e022eb316299", "id": "131335571"}-->',
//     },
//     {
//       url: "/research",
//       _uid: "949d3728-8603-4f91-a99f-166827e3fbec",
//       title: "Research",
//       target: false,
//       navBlok: [
//         {
//           _uid: "7f854c25-8037-4626-afad-f9bceb297fdc",
//           navItem: "5cc5f71f-6dfa-4261-85cd-818ceafa565d",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7f854c25-8037-4626-afad-f9bceb297fdc", "id": "131335571"}-->',
//         },
//         {
//           url: "/research/research-with-us",
//           _uid: "d55bfbe1-df03-4bf4-9121-fd88ec22e1e5",
//           title: "Research With Us",
//           target: false,
//           navBlok: [
//             {
//               _uid: "7ea22ddf-7d94-4604-aa96-85ebf3acc2b8",
//               navItem: "3d943cea-f8f4-48b8-a0f5-bde786f0b4ec",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7ea22ddf-7d94-4604-aa96-85ebf3acc2b8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e6ac212a-886d-4261-9968-1aabdf138882",
//               navItem: "1da3864f-9fa2-4737-a7c4-da7d9065fcd4",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e6ac212a-886d-4261-9968-1aabdf138882", "id": "131335571"}-->',
//             },
//             {
//               _uid: "28e1a65a-c05a-41db-9b29-0615dc4212e8",
//               navItem: "54c8e57a-3d21-43cc-bfd9-a534e5c63f7f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "28e1a65a-c05a-41db-9b29-0615dc4212e8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6732b67b-344a-4318-a6cb-827121ca69d4",
//               navItem: "422fb32b-b057-4b75-9e33-4066f7069cfc",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6732b67b-344a-4318-a6cb-827121ca69d4", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "d55bfbe1-df03-4bf4-9121-fd88ec22e1e5", "id": "131335571"}-->',
//         },
//         {
//           _uid: "244ba7b4-ea19-4293-aa40-b253174f10d8",
//           navItem: "7d13e53b-36b1-43fb-8702-5023e80dc81e",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "244ba7b4-ea19-4293-aa40-b253174f10d8", "id": "131335571"}-->',
//         },
//         {
//           _uid: "84ff0294-efa6-4360-9733-ac70c484e2c7",
//           navItem: "6ee4bbe6-06ee-4601-8197-3890eb15db09",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "84ff0294-efa6-4360-9733-ac70c484e2c7", "id": "131335571"}-->',
//         },
//         {
//           _uid: "a6d4ccf9-a08e-4300-b6f9-dc068d42b958",
//           navItem: "7bce6a8c-d040-4a8c-bff5-85005f270c38",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a6d4ccf9-a08e-4300-b6f9-dc068d42b958", "id": "131335571"}-->',
//         },
//         {
//           _uid: "96c5fd40-d045-463a-a42e-d19edb7805f5",
//           navItem: "6779adb2-83a5-4b40-89e2-5a7912fe260e",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "96c5fd40-d045-463a-a42e-d19edb7805f5", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "949d3728-8603-4f91-a99f-166827e3fbec", "id": "131335571"}-->',
//     },
//     {
//       url: "/business",
//       _uid: "73391001-2c2a-4182-b527-f72bbec03acb",
//       title: "Business",
//       target: false,
//       navBlok: [
//         {
//           _uid: "08d7364c-6e0e-4c77-b45c-d6cdb0b90d5c",
//           navItem: "c8858397-127f-4ce3-9c1f-c460ee96271f",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "08d7364c-6e0e-4c77-b45c-d6cdb0b90d5c", "id": "131335571"}-->',
//         },
//         {
//           _uid: "e56c1cfb-3e67-41e8-9ad1-763edef044ce",
//           navItem: "6ac66223-3435-4174-b062-df09602e4504",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e56c1cfb-3e67-41e8-9ad1-763edef044ce", "id": "131335571"}-->',
//         },
//         {
//           _uid: "a85d47e5-0f17-4864-9f2b-70bdd88f580b",
//           navItem: "fc7b23b2-7d94-4288-a545-70d49899eb7f",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a85d47e5-0f17-4864-9f2b-70bdd88f580b", "id": "131335571"}-->',
//         },
//         {
//           _uid: "b5d6bcc1-c41f-45e0-97c8-1503a5b65008",
//           navItem: "15e20977-8cb4-492a-ab73-b41b2bcb7a71",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b5d6bcc1-c41f-45e0-97c8-1503a5b65008", "id": "131335571"}-->',
//         },
//         {
//           _uid: "355cbe67-d3d7-44d5-9c6c-f289d43dd4cb",
//           navItem: "0baf09c3-0d3c-495d-a0bf-75e45573a11d",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "355cbe67-d3d7-44d5-9c6c-f289d43dd4cb", "id": "131335571"}-->',
//         },
//         {
//           _uid: "bc98954a-a54c-4fec-a4dc-eaaeddd91659",
//           navItem: "e6f2e934-c3d5-4cd1-a29c-737ef2967a37",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc98954a-a54c-4fec-a4dc-eaaeddd91659", "id": "131335571"}-->',
//         },
//         {
//           _uid: "1b9e0e75-ca14-4a90-a0e0-21701b6c7ec7",
//           navItem: "b919247c-f0a6-4a1a-8861-ec7719daedab",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1b9e0e75-ca14-4a90-a0e0-21701b6c7ec7", "id": "131335571"}-->',
//         },
//         {
//           _uid: "e21ff00d-3fc1-41c0-ac74-0838cbbf8ef4",
//           navItem: "f9ed0dbe-04cc-47d8-8d5f-a434667548ac",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e21ff00d-3fc1-41c0-ac74-0838cbbf8ef4", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "73391001-2c2a-4182-b527-f72bbec03acb", "id": "131335571"}-->',
//     },
//     {
//       url: "/global",
//       _uid: "54dfc4c1-2b9b-4fd2-a75c-064bc1537cad",
//       title: "Global",
//       target: false,
//       navBlok: [
//         {
//           _uid: "f3f922e1-36f2-4b20-914a-7d5e2c5cd329",
//           navItem: "78f93250-0808-4db3-bf7f-73499a26237a",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f3f922e1-36f2-4b20-914a-7d5e2c5cd329", "id": "131335571"}-->',
//         },
//         {
//           _uid: "cd4597a6-c1ef-47da-8b3b-493726dba4cb",
//           navItem: "a7b30fab-fea0-4cd0-888a-ae7eebdb7eb9",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "cd4597a6-c1ef-47da-8b3b-493726dba4cb", "id": "131335571"}-->',
//         },
//         {
//           _uid: "ed0e4817-21e6-4dbd-a369-ee6b5c93a785",
//           navItem: "6a96d296-4f94-4991-b95d-caef010960c3",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ed0e4817-21e6-4dbd-a369-ee6b5c93a785", "id": "131335571"}-->',
//         },
//         {
//           _uid: "ef8e89f3-8236-412d-9e1d-533a4dc9a366",
//           navItem: "a9751b51-7f57-44c6-b819-1ce235862c83",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ef8e89f3-8236-412d-9e1d-533a4dc9a366", "id": "131335571"}-->',
//         },
//         {
//           _uid: "1864ca34-5d2d-4900-bf19-88d925fc0a80",
//           navItem: "bb535e35-4f5a-46c0-ad6d-3e52e5eff950",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1864ca34-5d2d-4900-bf19-88d925fc0a80", "id": "131335571"}-->',
//         },
//         {
//           _uid: "da2df4a0-3417-4a71-a81e-eafe6d631d9b",
//           navItem: "9a1f0b42-d887-40a3-be52-b4d4cfd1ffec",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "da2df4a0-3417-4a71-a81e-eafe6d631d9b", "id": "131335571"}-->',
//         },
//         {
//           _uid: "bf6e176e-c73e-443f-b069-db2ddf58a537",
//           navItem: "13d92467-9f26-438b-a2aa-17a74006e593",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bf6e176e-c73e-443f-b069-db2ddf58a537", "id": "131335571"}-->',
//         },
//         {
//           _uid: "c8f11152-7ed6-4c02-940e-44c27514a91f",
//           navItem: "ad5f9e93-cbc6-49a1-90ab-e48e64a97241",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c8f11152-7ed6-4c02-940e-44c27514a91f", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "54dfc4c1-2b9b-4fd2-a75c-064bc1537cad", "id": "131335571"}-->',
//     },
//     {
//       url: "/about",
//       _uid: "1495a7b3-a353-4427-b236-b5b5fc3575e4",
//       title: "About",
//       target: false,
//       navBlok: [
//         {
//           _uid: "f3cae847-af5f-4d9a-aa6a-95d93baf981d",
//           navItem: "9d3a6616-87be-40a1-9ca7-129c99cf46f1",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f3cae847-af5f-4d9a-aa6a-95d93baf981d", "id": "131335571"}-->',
//         },
//         {
//           _uid: "8b568800-7ed7-4265-a6f3-7964adb9c330",
//           navItem: "313ff16a-21e5-48b5-9e88-8528f45da2b6",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8b568800-7ed7-4265-a6f3-7964adb9c330", "id": "131335571"}-->',
//         },
//         {
//           url: "/library",
//           _uid: "ddcba14c-6a29-4e94-9fcd-335ac76b8dfd",
//           title: "Library and Archives",
//           target: false,
//           navBlok: [
//             {
//               _uid: "15c987be-afda-4064-9fc2-36b8712aa0b4",
//               navItem: "87c83877-fb81-4c3c-979d-a7b229b290af",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "15c987be-afda-4064-9fc2-36b8712aa0b4", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b081d6a6-e916-4de4-8e8b-43aaf23afab1",
//               navItem: "eec2b027-1f1c-4da6-809d-39af36c0acae",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b081d6a6-e916-4de4-8e8b-43aaf23afab1", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "ddcba14c-6a29-4e94-9fcd-335ac76b8dfd", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/working-at-uea",
//           _uid: "5517ab26-1dda-4f93-a922-34a509bbf2e8",
//           title: "Working at UEA",
//           target: false,
//           navBlok: [
//             {
//               _uid: "027bee49-ee0f-44c7-8121-65b7a4b30741",
//               navItem: "91d55c80-9347-443d-9e34-9d9f23d0bf12",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "027bee49-ee0f-44c7-8121-65b7a4b30741", "id": "131335571"}-->',
//             },
//             {
//               _uid: "44eab4ef-66c6-4f0a-8546-f6023eeff3ea",
//               navItem: "99faf738-11a9-42cd-aa08-d86218a4eda4",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "44eab4ef-66c6-4f0a-8546-f6023eeff3ea", "id": "131335571"}-->',
//             },
//             {
//               _uid: "921cfd5e-9b9c-4209-a379-35772a348691",
//               navItem: "0fa015c6-f1be-4849-baa9-45fa913dd50a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "921cfd5e-9b9c-4209-a379-35772a348691", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bc2c9a9e-70ee-49f3-836e-1ee2b39a6d69",
//               navItem: "ad6b083b-e169-4991-8a54-db7e4bae7340",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc2c9a9e-70ee-49f3-836e-1ee2b39a6d69", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8b5ca8c2-ba29-4961-aed6-c93e144c1885",
//               navItem: "9dacc093-1958-4f2e-ad97-559627811c4f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8b5ca8c2-ba29-4961-aed6-c93e144c1885", "id": "131335571"}-->',
//             },
//             {
//               _uid: "eaf271c1-a4e9-44b2-8b8c-a5e302e1fc82",
//               navItem: "ff7e5cd6-9f22-4d2c-a73d-3555ff1d9086",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "eaf271c1-a4e9-44b2-8b8c-a5e302e1fc82", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "5517ab26-1dda-4f93-a922-34a509bbf2e8", "id": "131335571"}-->',
//         },
//         {
//           _uid: "095d080b-2339-4109-8b07-05a4ca891bc5",
//           navItem: "a218248b-dcef-4596-8af9-00a27ec322c2",
//           component: "navItem",
//           _editable:
//             '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "095d080b-2339-4109-8b07-05a4ca891bc5", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/faculties-and-schools",
//           _uid: "0770a34c-d138-4f6b-9664-f4e6fc2448e2",
//           title: "Faculties and Schools",
//           target: false,
//           navBlok: [
//             {
//               url: "/about/faculties-and-schools/faculty-of-arts-and-humanities",
//               _uid: "e41aa522-7c32-46f9-a4ca-81d3767bd844",
//               title: "Faculty of Arts and Humanities",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "0cde4f93-76e3-4a54-986e-eea78cb5e6ca",
//                   navItem: "4adc3087-1651-490a-bb3e-4b7f623bd8e4",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0cde4f93-76e3-4a54-986e-eea78cb5e6ca", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "2461c21e-772b-403a-858d-f8fc803b6cf8",
//                   navItem: "8bdbfb61-4b28-4c2c-bf25-4e816c7d5da6",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2461c21e-772b-403a-858d-f8fc803b6cf8", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d3824f64-9510-4823-8859-9fd7851183db",
//                   navItem: "18ff8ead-3aea-4008-be2d-5054d1ae6979",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d3824f64-9510-4823-8859-9fd7851183db", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "08089dad-0e24-4395-84ba-643b4354e90a",
//                   navItem: "b23d4d43-f71a-4b30-ba9a-4dfd7b82c1ef",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "08089dad-0e24-4395-84ba-643b4354e90a", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "ccc3fbb2-f182-4841-9718-c7c3bed0adc6",
//                   navItem: "881545e2-2a1a-4a10-8659-ed096d333082",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ccc3fbb2-f182-4841-9718-c7c3bed0adc6", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "bb9b45a6-606d-4f59-b23a-85a53485ca55",
//                   navItem: "4e74db4d-de35-4229-9f77-c0a9a043efcb",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bb9b45a6-606d-4f59-b23a-85a53485ca55", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "6621b667-29b1-4d76-b75b-9eb214596813",
//                   navItem: "5c792102-c249-4746-bd37-3cf5f345fa09",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6621b667-29b1-4d76-b75b-9eb214596813", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e41aa522-7c32-46f9-a4ca-81d3767bd844", "id": "131335571"}-->',
//             },
//             {
//               url: "/about/faculties-and-schools/faculty-of-medicine-and-health",
//               _uid: "00f7d236-6770-43f6-a2f0-68edae0ab22d",
//               title: "Faculty of Medicine and Health",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "99856116-f9e0-462c-928d-c156258b943b",
//                   navItem: "a95e6541-0e99-4516-b53b-6091e34b7870",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "99856116-f9e0-462c-928d-c156258b943b", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "7dbf092f-18c6-462f-bebe-cc70dd8a2e98",
//                   navItem: "6178240b-539c-409a-a5c0-6227b5706d51",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7dbf092f-18c6-462f-bebe-cc70dd8a2e98", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "3ee08bc2-4053-48a3-bba8-62b47f113a36",
//                   navItem: "5d03d9df-4309-4c6f-a80b-178511e9c6bd",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "3ee08bc2-4053-48a3-bba8-62b47f113a36", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "00f7d236-6770-43f6-a2f0-68edae0ab22d", "id": "131335571"}-->',
//             },
//             {
//               url: "/about/faculties-and-schools/faculty-of-science",
//               _uid: "29d45e7a-c1db-4b46-942d-5d97f8d42311",
//               title: "Faculty of Science",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "2034f1e9-7508-459b-8116-b26ac3e487c5",
//                   navItem: "b300f616-8281-4f57-8eff-52576b99d244",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2034f1e9-7508-459b-8116-b26ac3e487c5", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d82dd144-2bb3-46c8-a1c8-b3029a7a329f",
//                   navItem: "cdfed783-7776-40f1-8bde-3f0ec4f95c5f",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d82dd144-2bb3-46c8-a1c8-b3029a7a329f", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "ac0a9ef2-888a-4bc5-89d0-989f78fde464",
//                   navItem: "4efd9dae-7fd0-4c1c-8dc1-c6fbe4293585",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ac0a9ef2-888a-4bc5-89d0-989f78fde464", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "fc352d33-b4e2-404e-bc92-052e02cece4c",
//                   navItem: "c13fb4d5-06ec-4e72-997e-622ee6ca71d6",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fc352d33-b4e2-404e-bc92-052e02cece4c", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "ad92c7d7-0aa4-46a3-bd86-269dfda987f3",
//                   navItem: "79ff0656-83e2-4b86-a91f-08aa19b92f1f",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ad92c7d7-0aa4-46a3-bd86-269dfda987f3", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "9f238ed6-49e2-4545-94e4-639f852c713b",
//                   navItem: "67ed8f64-3dbf-43a2-bde4-af874dca070a",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9f238ed6-49e2-4545-94e4-639f852c713b", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "643e536d-7c4a-4d8b-a1ae-36e44966a5f6",
//                   navItem: "15e521bf-807c-4ce8-9168-9a144e4854e9",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "643e536d-7c4a-4d8b-a1ae-36e44966a5f6", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "4d1b65dd-4268-47b5-9208-6bb017e0e02f",
//                   navItem: "de8e6982-080a-4321-b9d6-695c826612eb",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4d1b65dd-4268-47b5-9208-6bb017e0e02f", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "34e9050e-f0aa-41d8-ae75-0b5bcc5ebcf9",
//                   navItem: "da7c68c7-56a1-49ea-a147-cf9d4e123d57",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "34e9050e-f0aa-41d8-ae75-0b5bcc5ebcf9", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "069b163a-6149-4110-a4bb-249583a8972f",
//                   navItem: "cdc3112a-099e-4f5b-85ce-2e631cbb3736",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "069b163a-6149-4110-a4bb-249583a8972f", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "e09f1f34-fd9c-4326-b611-60163d505598",
//                   navItem: "f65aa946-1033-43c6-b564-2172cc849366",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e09f1f34-fd9c-4326-b611-60163d505598", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "76849b72-ac5f-4c13-8027-aba40d2988c0",
//                   navItem: "b172c458-d17f-4966-863f-7af0856f3a92",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "76849b72-ac5f-4c13-8027-aba40d2988c0", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "146cf578-3526-4d66-8b48-ee772a897c7f",
//                   navItem: "43003844-9012-4755-b4ba-a4075dec6adc",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "146cf578-3526-4d66-8b48-ee772a897c7f", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "29d45e7a-c1db-4b46-942d-5d97f8d42311", "id": "131335571"}-->',
//             },
//             {
//               url: "/about/faculties-and-schools/faculty-of-social-sciences",
//               _uid: "c08c4558-7232-438a-b34f-12a816aa86ea",
//               title: "Faculty of Social Sciences",
//               target: false,
//               navBlok: [
//                 {
//                   _uid: "cf209fc0-35ab-48cf-b0ba-7fd733ed980b",
//                   navItem: "cfc76107-5bbd-4a41-9316-635767929a3f",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "cf209fc0-35ab-48cf-b0ba-7fd733ed980b", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "12e3522b-2374-4aeb-aaf9-95f13aa2c4f3",
//                   navItem: "2f4ac7fd-f74c-4cd9-b923-d5640afdfa27",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "12e3522b-2374-4aeb-aaf9-95f13aa2c4f3", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d5572866-8aec-4dc3-93bc-2f087d866b77",
//                   navItem: "4a63b181-7738-4f5f-88a0-8118c72281e7",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d5572866-8aec-4dc3-93bc-2f087d866b77", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "d88e7841-dfc8-4e49-95f7-4574da54c375",
//                   navItem: "1f9cc6b4-e02e-4506-9dfa-64d00ff9aa9b",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d88e7841-dfc8-4e49-95f7-4574da54c375", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "56ae4db8-7fde-4473-8f37-322cd9e0b557",
//                   navItem: "e525f761-fb58-4255-8a27-e7f193982b0b",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "56ae4db8-7fde-4473-8f37-322cd9e0b557", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "06401a4b-31f9-44d0-87da-cdd7c2ad4c4c",
//                   navItem: "359c2940-2440-44b9-bbf0-60ae6278b03d",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "06401a4b-31f9-44d0-87da-cdd7c2ad4c4c", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "1d436f3c-1d92-48a6-8f04-1c9793c36ce3",
//                   navItem: "6b8234ab-6966-4628-baab-62d6d6798362",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1d436f3c-1d92-48a6-8f04-1c9793c36ce3", "id": "131335571"}-->',
//                 },
//                 {
//                   _uid: "1abe7e38-097c-463d-b5df-27cd862070da",
//                   navItem: "8127b58d-3646-4b41-8e44-0db12ff2b518",
//                   component: "navItem",
//                   _editable:
//                     '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "1abe7e38-097c-463d-b5df-27cd862070da", "id": "131335571"}-->',
//                 },
//               ],
//               component: "navFolder",
//               _editable:
//                 '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "c08c4558-7232-438a-b34f-12a816aa86ea", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "0770a34c-d138-4f6b-9664-f4e6fc2448e2", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/alumni-and-supporters",
//           _uid: "03de44ec-a7e2-4721-b1f1-ffe3c5c7c58f",
//           title: "Alumni and Supporters",
//           target: false,
//           navBlok: [
//             {
//               _uid: "a2a29ec1-f553-44dc-9be4-83cf018df911",
//               navItem: "7ce3d49e-2ce5-4a9e-b0da-7498b2e8f5d8",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a2a29ec1-f553-44dc-9be4-83cf018df911", "id": "131335571"}-->',
//             },
//             {
//               _uid: "63a08445-bfe0-4ef5-bf47-f6d13bbd26fe",
//               navItem: "731ded77-5b69-4504-9d5f-273560b36efb",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "63a08445-bfe0-4ef5-bf47-f6d13bbd26fe", "id": "131335571"}-->',
//             },
//             {
//               _uid: "7cf34e6b-870e-43b4-8bbc-3b067d437224",
//               navItem: "186e145d-8c0e-481f-91f1-c7e0c5f22bfb",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "7cf34e6b-870e-43b4-8bbc-3b067d437224", "id": "131335571"}-->',
//             },
//             {
//               _uid: "c829b103-e6a9-4a04-80ca-bc63a12ce2ad",
//               navItem: "b39712ec-8400-46b4-83c3-5c2cd5812324",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "c829b103-e6a9-4a04-80ca-bc63a12ce2ad", "id": "131335571"}-->',
//             },
//             {
//               _uid: "6345aace-e4e1-4d42-9c7b-2d8e00cc2c5a",
//               navItem: "4d09f1f8-fcbf-44db-b27f-abe3cc5467c8",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "6345aace-e4e1-4d42-9c7b-2d8e00cc2c5a", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "03de44ec-a7e2-4721-b1f1-ffe3c5c7c58f", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/partnership-hubs",
//           _uid: "e016da6f-a01a-4e6b-8987-ae55672f5f65",
//           title: "Partnerships Hub",
//           target: false,
//           navBlok: [
//             {
//               _uid: "bd294b15-3e36-4c79-b647-63c351e3f315",
//               navItem: "35619d47-9f20-438b-8b4e-3f79dc2da4ac",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bd294b15-3e36-4c79-b647-63c351e3f315", "id": "131335571"}-->',
//             },
//             {
//               _uid: "60850b01-f0f4-4076-a1ff-a4c3cf683308",
//               navItem: "85fac544-b6db-4b8b-8520-38599f130bde",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "60850b01-f0f4-4076-a1ff-a4c3cf683308", "id": "131335571"}-->',
//             },
//             {
//               _uid: "fb808f08-a60e-41bb-bc76-fa46071e6334",
//               navItem: "7bb8e6e7-031a-4ea4-8a10-fddf2a8076b1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fb808f08-a60e-41bb-bc76-fa46071e6334", "id": "131335571"}-->',
//             },
//             {
//               _uid: "bc30e6c1-5d12-464a-8a98-a344e591ba32",
//               navItem: "132b54f1-2bf0-4ecd-a2a0-ca4431bc508a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bc30e6c1-5d12-464a-8a98-a344e591ba32", "id": "131335571"}-->',
//             },
//             {
//               _uid: "407fd4c2-f7f4-4ef6-8c52-806498a958d8",
//               navItem: "305153c1-ad33-41a5-9352-1fba00eb6d52",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "407fd4c2-f7f4-4ef6-8c52-806498a958d8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8cb00dff-84a6-4527-b032-6dd449c28e59",
//               navItem: "e1a596f5-46e3-42a6-b03e-5ec2aaf8796f",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8cb00dff-84a6-4527-b032-6dd449c28e59", "id": "131335571"}-->',
//             },
//             {
//               _uid: "12ef8bcf-3ea2-4ddc-a456-2f404094ae3a",
//               navItem: "77e5d230-0beb-4e4a-9b63-01b51579615a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "12ef8bcf-3ea2-4ddc-a456-2f404094ae3a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "a047fae6-f155-4a51-b694-538f4bdf6563",
//               navItem: "fd305ec9-6faa-4c48-9244-94c10b5cfb13",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "a047fae6-f155-4a51-b694-538f4bdf6563", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "e016da6f-a01a-4e6b-8987-ae55672f5f65", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/information-for-visitors",
//           _uid: "8b75f3d3-6e7b-478e-a471-7e947f4e07c1",
//           title: "Information for Visitors",
//           target: false,
//           navBlok: [
//             {
//               _uid: "4b1e098b-2430-40db-a852-bc9e87291b35",
//               navItem: "d0798247-cf81-4e4e-ab48-59aa3d3dcf07",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "4b1e098b-2430-40db-a852-bc9e87291b35", "id": "131335571"}-->',
//             },
//             {
//               _uid: "e4101ac8-a2f0-47f1-b82c-ef49f14be015",
//               navItem: "3f64c73e-e0ae-4dad-8bed-efbbfad8d10b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "e4101ac8-a2f0-47f1-b82c-ef49f14be015", "id": "131335571"}-->',
//             },
//             {
//               _uid: "d37e1b83-0f54-400c-a699-b1d9e2196628",
//               navItem: "fc514400-7761-4310-bc66-0f774fede80d",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "d37e1b83-0f54-400c-a699-b1d9e2196628", "id": "131335571"}-->',
//             },
//             {
//               _uid: "9ebd8500-e00d-4bc5-86bb-4204741ccb6a",
//               navItem: "1a1e7d00-0508-4a69-bab3-ca6a1f4c2ca3",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "9ebd8500-e00d-4bc5-86bb-4204741ccb6a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b8f0df8d-22ad-47ec-9e00-3b41c7ec373f",
//               navItem: "d1585714-3603-4f1c-87a1-dca107160b94",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b8f0df8d-22ad-47ec-9e00-3b41c7ec373f", "id": "131335571"}-->',
//             },
//             {
//               _uid: "5b772e1f-0e05-41b8-9983-50c5fed2a2c8",
//               navItem: "230d607b-b8a0-4023-ac69-9d1ee8e378c7",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "5b772e1f-0e05-41b8-9983-50c5fed2a2c8", "id": "131335571"}-->',
//             },
//             {
//               _uid: "ba9fe949-7eb8-42f6-bc67-b7ea4ae36a57",
//               navItem: "4d2b92de-93df-43e7-8cda-7559786ccea5",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ba9fe949-7eb8-42f6-bc67-b7ea4ae36a57", "id": "131335571"}-->',
//             },
//             {
//               _uid: "8751b311-244f-4426-a762-b8da9db94830",
//               navItem: "5775b367-c102-434b-91a2-54629175a1a1",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "8751b311-244f-4426-a762-b8da9db94830", "id": "131335571"}-->',
//             },
//             {
//               _uid: "b0f8aa62-2ead-45d8-b717-f0817bdf33b5",
//               navItem: "73075055-2961-4849-8ac5-499c383e7693",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b0f8aa62-2ead-45d8-b717-f0817bdf33b5", "id": "131335571"}-->',
//             },
//             {
//               _uid: "938b295a-d8a3-4be4-a011-b830e2342a00",
//               navItem: "00230285-6ec1-4605-a45d-3c3772fc6f69",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "938b295a-d8a3-4be4-a011-b830e2342a00", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0a37972d-f0b3-46d7-b2df-74384e50c150",
//               navItem: "a40606f8-93b6-49a2-be2f-a5072a82042b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0a37972d-f0b3-46d7-b2df-74384e50c150", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "8b75f3d3-6e7b-478e-a471-7e947f4e07c1", "id": "131335571"}-->',
//         },
//         {
//           url: "/about/university-information",
//           _uid: "5fbf537c-1187-4fde-90de-b352b31437db",
//           title: "University Information",
//           target: false,
//           navBlok: [
//             {
//               _uid: "bba33830-128c-440a-ad88-7f208cbfaa8e",
//               navItem: "8245d29c-3a54-46a0-9373-71940a0d0f2b",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "bba33830-128c-440a-ad88-7f208cbfaa8e", "id": "131335571"}-->',
//             },
//             {
//               _uid: "70bd2e0b-6a41-47d2-b126-6b6554c47f2a",
//               navItem: "d652dad0-840a-4a1d-bf37-deb6fbb54071",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "70bd2e0b-6a41-47d2-b126-6b6554c47f2a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "be8192b3-f0bf-4b96-acec-628c7dbdd8c7",
//               navItem: "8f316eed-1e9e-49e0-9f6f-6cf39e9cd8a0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "be8192b3-f0bf-4b96-acec-628c7dbdd8c7", "id": "131335571"}-->',
//             },
//             {
//               _uid: "ac02e962-de36-4a7e-b637-ddd237b43eaf",
//               navItem: "560daae4-29b7-4c13-89e9-072e899cc947",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ac02e962-de36-4a7e-b637-ddd237b43eaf", "id": "131335571"}-->',
//             },
//             {
//               _uid: "2f5127c4-83af-4024-9375-c4b2bcbddfd9",
//               navItem: "31fbc1a0-17ff-4508-a705-566a68e27dd3",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "2f5127c4-83af-4024-9375-c4b2bcbddfd9", "id": "131335571"}-->',
//             },
//             {
//               _uid: "84b2a4d0-d7fb-48d3-9c6c-b926a769dba9",
//               navItem: "8fdb9998-27a4-4a5a-9255-8254d5306d96",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "84b2a4d0-d7fb-48d3-9c6c-b926a769dba9", "id": "131335571"}-->',
//             },
//             {
//               _uid: "ef05b1f5-f5ae-423e-8ebe-e5e578c44ece",
//               navItem: "94575d23-c531-4323-be52-941c1aefbb4a",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "ef05b1f5-f5ae-423e-8ebe-e5e578c44ece", "id": "131335571"}-->',
//             },
//             {
//               _uid: "80939f9c-f894-42d2-ab4d-14f091b15d5a",
//               navItem: "7ad7cc37-d737-4151-bfea-f8b317c37564",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "80939f9c-f894-42d2-ab4d-14f091b15d5a", "id": "131335571"}-->',
//             },
//             {
//               _uid: "0c050b63-7fd6-482b-ae6b-8dc3c187f9a0",
//               navItem: "9358ce86-8056-4690-8060-9f7cda4a08cf",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0c050b63-7fd6-482b-ae6b-8dc3c187f9a0", "id": "131335571"}-->',
//             },
//             {
//               _uid: "03548345-4f8e-401d-9fe9-1d7fd1a3ed00",
//               navItem: "312997d2-fdda-41a5-affd-01cbba9ec6a0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "03548345-4f8e-401d-9fe9-1d7fd1a3ed00", "id": "131335571"}-->',
//             },
//             {
//               _uid: "fcf5d63e-3219-4edc-8cbb-2221820ade0c",
//               navItem: "b20bc260-8a44-4803-b74e-39d2393799e0",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "fcf5d63e-3219-4edc-8cbb-2221820ade0c", "id": "131335571"}-->',
//             },
//             {
//               _uid: "59354853-82dc-4e3c-b736-dc7c6966f226",
//               navItem: "41a3c81d-ccd6-48b2-9478-9d37b810f652",
//               component: "navItem",
//               _editable:
//                 '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "59354853-82dc-4e3c-b736-dc7c6966f226", "id": "131335571"}-->',
//             },
//           ],
//           component: "navFolder",
//           _editable:
//             '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "5fbf537c-1187-4fde-90de-b352b31437db", "id": "131335571"}-->',
//         },
//       ],
//       children: [],
//       component: "navFolder",
//       _editable:
//         '<!--#storyblok#{"name": "navFolder", "space": "154676", "uid": "1495a7b3-a353-4427-b236-b5b5fc3575e4", "id": "131335571"}-->',
//     },
//     {
//       _uid: "f1cfbabc-6777-426c-a14e-996ef7264290",
//       navItem: "d00892d0-ce36-44d5-acba-6976c323b8e2",
//       component: "navItem",
//       _editable:
//         '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "f1cfbabc-6777-426c-a14e-996ef7264290", "id": "131335571"}-->',
//     },
//     {
//       _uid: "0a8bd7ec-8134-4f59-b34c-fbd1e2fab4f2",
//       navItem: "62feefa9-ea8d-4589-b000-e84fb6746ce7",
//       component: "navItem",
//       _editable:
//         '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "0a8bd7ec-8134-4f59-b34c-fbd1e2fab4f2", "id": "131335571"}-->',
//     },
//     {
//       _uid: "b21535ae-c585-4a8a-aa8f-3f9bd8c58e88",
//       navItem: "f6fbe62a-fdc9-40f9-be5a-339fee265b6a",
//       component: "navItem",
//       _editable:
//         '<!--#storyblok#{"name": "navItem", "space": "154676", "uid": "b21535ae-c585-4a8a-aa8f-3f9bd8c58e88", "id": "131335571"}-->',
//     },
//   ],
//   navLinkArray: [
//     {
//       uuid: "b300f616-8281-4f57-8eff-52576b99d244",
//       name: "Research",
//       content: {
//         title: "Research",
//         url: "/about/faculties-and-schools/faculty-of-science/research",
//       },
//     },
//     {
//       uuid: "cdfed783-7776-40f1-8bde-3f0ec4f95c5f",
//       name: "Science Graduate School",
//       content: {
//         title: "Science Graduate School",
//         url: "/about/faculties-and-schools/faculty-of-science/science-graduate-school",
//       },
//     },
//     {
//       uuid: "8245d29c-3a54-46a0-9373-71940a0d0f2b",
//       name: "Vice-Chancellor's Office",
//       content: {
//         title: "Vice-Chancellor's Office",
//         url: "/about/university-information/vice-chancellors-office",
//       },
//     },
//     {
//       uuid: "4efd9dae-7fd0-4c1c-8dc1-c6fbe4293585",
//       name: "Work Here",
//       content: {
//         title: "Work Here",
//         url: "/about/faculties-and-schools/faculty-of-science/work-here",
//       },
//     },
//     {
//       uuid: "d0798247-cf81-4e4e-ab48-59aa3d3dcf07",
//       name: "Contact Us and Map",
//       content: {
//         title: "Contact Us and Map",
//         url: "/about/information-for-visitors/contact-information-and-map",
//       },
//     },
//     {
//       uuid: "d652dad0-840a-4a1d-bf37-deb6fbb54071",
//       name: "Governance",
//       content: {
//         title: "Governance",
//         url: "/about/university-information/governance",
//       },
//     },
//     {
//       uuid: "c13fb4d5-06ec-4e72-997e-622ee6ca71d6",
//       name: "Facilities",
//       content: {
//         title: "Facilities",
//         url: "/about/faculties-and-schools/faculty-of-science/facilities",
//       },
//     },
//     {
//       uuid: "3f64c73e-e0ae-4dad-8bed-efbbfad8d10b",
//       name: "Travel and Transport",
//       content: {
//         title: "Travel and Transport",
//         url: "/about/information-for-visitors/travel-and-transport",
//       },
//     },
//     {
//       uuid: "8f316eed-1e9e-49e0-9f6f-6cf39e9cd8a0",
//       name: "Facts and Figures",
//       content: {
//         title: "Facts and Figures",
//         url: "/about/university-information/facts-and-figures",
//       },
//     },
//     {
//       uuid: "79ff0656-83e2-4b86-a91f-08aa19b92f1f",
//       name: "School of Biological Sciences",
//       content: {
//         title: "School of Biological Sciences",
//         url: "/about/school-of-biological-sciences",
//       },
//     },
//     {
//       uuid: "fc514400-7761-4310-bc66-0f774fede80d",
//       name: "Food on Campus",
//       content: {
//         title: "Food on Campus",
//         url: "/about/information-for-visitors/eat-and-drink",
//       },
//     },
//     {
//       uuid: "560daae4-29b7-4c13-89e9-072e899cc947",
//       name: "Statutory, Legal and Policies",
//       content: {
//         title: "Statutory, Legal and Policies",
//         url: "/about/university-information/statutory-legal-policies",
//       },
//     },
//     {
//       uuid: "df088c1e-da38-46a0-9eec-e196dd653fa1",
//       name: "International Students",
//       content: {
//         title: "International Students Home",
//         url: "/study/international-students/",
//       },
//     },
//     {
//       uuid: "4043d15c-8fda-4d1a-b03c-ed6e73b68a51",
//       name: "Prospective Students",
//       content: {
//         title: "Prospective Students",
//         url: "/study/information-for/prospective-students",
//       },
//     },
//     {
//       uuid: "cfc76107-5bbd-4a41-9316-635767929a3f",
//       name: "Norwich Business School",
//       content: {
//         title: "Norwich Business School",
//         url: "/about/norwich-business-school",
//       },
//     },
//     {
//       uuid: "67ed8f64-3dbf-43a2-bde4-af874dca070a",
//       name: "School of Chemistry",
//       content: {
//         title: "School of Chemistry",
//         url: "/about/school-of-chemistry",
//       },
//     },
//     {
//       uuid: "35619d47-9f20-438b-8b4e-3f79dc2da4ac",
//       name: "Partnerships Hub",
//       content: {
//         title: "Partnerships Hub",
//         url: "/about/partnerships-hub",
//       },
//     },
//     {
//       uuid: "1a1e7d00-0508-4a69-bab3-ca6a1f4c2ca3",
//       name: "Visitor Accommodation",
//       content: {
//         title: "Visitor Accommodation",
//         url: "/about/information-for-visitors/visitor-accommodation",
//       },
//     },
//     {
//       uuid: "31fbc1a0-17ff-4508-a705-566a68e27dd3",
//       name: "Finance and Procurement",
//       content: {
//         title: "Finance and Procurement",
//         url: "/about/university-information/finance-and-procurement",
//       },
//     },
//     {
//       uuid: "78f93250-0808-4db3-bf7f-73499a26237a",
//       name: "Global UEA",
//       content: {
//         title: "Global UEA",
//         url: "/global",
//       },
//     },
//     {
//       uuid: "c8858397-127f-4ce3-9c1f-c460ee96271f",
//       name: "UEA for Business",
//       content: {
//         title: "UEA for Business",
//         url: "/business",
//       },
//     },
//     {
//       uuid: "bbd13d93-d66a-4743-a3dd-12f262a8e95a",
//       name: "Wellbeing",
//       content: {
//         title: "Wellbeing",
//         url: "/uea-life/student-support/wellbeing",
//       },
//     },
//     {
//       uuid: "7e27ba49-9964-4817-967a-f6fbb15a6ccc",
//       name: "Meet Us",
//       content: {
//         title: "Meet Us",
//         url: "/study/international-students/meet-with-us-online",
//       },
//     },
//     {
//       uuid: "b4632870-1a4f-4175-bfff-2efd93c3874c",
//       name: "Mature Students",
//       content: {
//         title: "Mature Students",
//         url: "/study/information-for/mature-students",
//       },
//     },
//     {
//       uuid: "082402b4-e6d2-42a3-b709-a0d2a070d97a",
//       name: "All Courses",
//       content: {
//         title: "All Courses",
//         url: "/course-finder",
//       },
//     },
//     {
//       uuid: "2f4ac7fd-f74c-4cd9-b923-d5640afdfa27",
//       name: "School of Economics",
//       content: {
//         title: "School of Economics",
//         url: "/about/school-of-economics",
//       },
//     },
//     {
//       uuid: "15e521bf-807c-4ce8-9168-9a144e4854e9",
//       name: "School of Computing Sciences",
//       content: {
//         title: "School of Computing Sciences",
//         url: "/about/school-of-computing-sciences",
//       },
//     },
//     {
//       uuid: "4adc3087-1651-490a-bb3e-4b7f623bd8e4",
//       name: "Faculty of Arts and Humanities",
//       content: {
//         title: "Faculty of Arts and Humanities",
//         url: "/about/faculties-and-schools/faculty-of-arts-and-humanities",
//       },
//     },
//     {
//       uuid: "85fac544-b6db-4b8b-8520-38599f130bde",
//       name: "Apprenticeships",
//       content: {
//         title: "Apprenticeships",
//         url: "/business/grow-your-business/apprenticeships",
//       },
//     },
//     {
//       uuid: "d1585714-3603-4f1c-87a1-dca107160b94",
//       name: "University Reception",
//       content: {
//         title: "University Reception",
//         url: "/about/information-for-visitors/reception",
//       },
//     },
//     {
//       uuid: "8fdb9998-27a4-4a5a-9255-8254d5306d96",
//       name: "IT Information",
//       content: {
//         title: "IT Information",
//         url: "/about/university-information/it-information",
//       },
//     },
//     {
//       uuid: "a7b30fab-fea0-4cd0-888a-ae7eebdb7eb9",
//       name: "Study at UEA",
//       content: {
//         title: "Study at UEA",
//         url: "/study/international-students",
//       },
//     },
//     {
//       uuid: "6ac66223-3435-4174-b062-df09602e4504",
//       name: "How We Can Work Together",
//       content: {
//         title: "How We Can Work Together",
//         url: "/business/how-we-can-work-together",
//       },
//     },
//     {
//       uuid: "0dd7c816-45bb-44b7-91ae-53aa28f30eb1",
//       name: "Disability Support",
//       content: {
//         title: "Disability Support",
//         url: "/uea-life/student-support/disability-support",
//       },
//     },
//     {
//       uuid: "aa88de01-35ab-4f51-946c-f90aa2bef0fd",
//       name: "Apply",
//       content: {
//         title: "Apply",
//         url: "/apply",
//       },
//     },
//     {
//       uuid: "2de5b204-b4ca-4925-a2ea-22965d556251",
//       name: "Your Country/Region",
//       content: {
//         title: "Your Country/Region",
//         url: "/study/international-students/country-map",
//       },
//     },
//     {
//       uuid: "f6f4e1c4-211d-40c3-bfb5-d0b1779aac22",
//       name: "Foundation Years",
//       content: {
//         title: "Foundation Years",
//         url: "/study/information-for/foundation-years",
//       },
//     },
//     {
//       uuid: "b2b688de-a876-4010-aa7f-aba659bda2dc",
//       name: "Undergraduate",
//       content: {
//         title: "Undergraduate",
//         url: "/course-finder?primaryFilter=Undergraduate",
//       },
//     },
//     {
//       uuid: "4a63b181-7738-4f5f-88a0-8118c72281e7",
//       name: "School of Education and Lifelong Learning",
//       content: {
//         title: "School of Education and Lifelong Learning",
//         url: "/about/school-of-education-and-lifelong-learning",
//       },
//     },
//     {
//       uuid: "de8e6982-080a-4321-b9d6-695c826612eb",
//       name: "School of Engineering",
//       content: {
//         title: "School of Engineering",
//         url: "/about/school-of-engineering",
//       },
//     },
//     {
//       uuid: "8bdbfb61-4b28-4c2c-bf25-4e816c7d5da6",
//       name: "School of Art Media and American Studies",
//       content: {
//         title: "School of Art Media and American Studies",
//         url: "/about/school-of-art-media-and-american-studies",
//       },
//     },
//     {
//       uuid: "91d55c80-9347-443d-9e34-9d9f23d0bf12",
//       name: "Staff Benefits",
//       content: {
//         title: "Staff Benefits",
//         url: "/about/working-at-uea/staff-benefits",
//       },
//     },
//     {
//       uuid: "7bb8e6e7-031a-4ea4-8a10-fddf2a8076b1",
//       name: "Enterprise Centre",
//       content: {
//         title: "Enterprise Centre",
//         url: "/business/grow-your-business/a-home-for-your-business",
//       },
//     },
//     {
//       uuid: "230d607b-b8a0-4023-ac69-9d1ee8e378c7",
//       name: "Visit UEA",
//       content: {
//         title: "Visit UEA",
//         url: "/visit",
//       },
//     },
//     {
//       uuid: "94575d23-c531-4323-be52-941c1aefbb4a",
//       name: "Sustainability",
//       content: {
//         title: "Sustainability",
//         url: "/about/university-information/sustainability",
//       },
//     },
//     {
//       uuid: "6a96d296-4f94-4991-b95d-caef010960c3",
//       name: "Sustainable Research",
//       content: {
//         title: "Sustainable Research",
//         url: "/research/about-uea-research-and-impact/research-for-sustainable-development",
//       },
//     },
//     {
//       uuid: "fc7b23b2-7d94-4288-a545-70d49899eb7f",
//       name: "Access Student Talent",
//       content: {
//         title: "Access Student Talent",
//         url: "/business/access-student-talent",
//       },
//     },
//     {
//       uuid: "5cc5f71f-6dfa-4261-85cd-818ceafa565d",
//       name: "Explore UEA Research",
//       content: {
//         title: "Explore UEA Research",
//         url: "/research/explore",
//       },
//     },
//     {
//       uuid: "ba7e6c19-858d-4313-892d-0a5642701c8c",
//       name: "Student Life",
//       content: {
//         title: "Student Life",
//         url: "/uea-life/student-support/student-life",
//       },
//     },
//     {
//       uuid: "2546351e-6a31-490a-b229-5d83c0209409",
//       name: "Undergraduate",
//       content: {
//         title: "Undergraduate",
//         url: "/apply/undergraduate",
//       },
//     },
//     {
//       uuid: "b9074755-9268-467e-aabc-59ae0bbe3785",
//       name: "Fees & Scholarships",
//       content: {
//         title: "Fees & Scholarships",
//         url: "/study/international-students/fees-and-scholarships",
//       },
//     },
//     {
//       uuid: "4adea32b-ae99-4603-9195-415a34aa6b82",
//       name: "Applicants and Offer Holders",
//       content: {
//         title: "Applicants and Offer Holders",
//         url: "/study/information-for/applicants-and-offer-holders",
//       },
//     },
//     {
//       uuid: "bda21e3c-bff2-464c-8cd4-50ec0a631175",
//       name: "Postgraduate",
//       content: {
//         title: "Postgraduate",
//         url: "/course-finder?primaryFilter=Postgraduate",
//       },
//     },
//     {
//       uuid: "1f9cc6b4-e02e-4506-9dfa-64d00ff9aa9b",
//       name: "School of International Development",
//       content: {
//         title: "School of International Development",
//         url: "/about/school-of-international-development",
//       },
//     },
//     {
//       uuid: "da7c68c7-56a1-49ea-a147-cf9d4e123d57",
//       name: "School of Environmental Sciences",
//       content: {
//         title: "School of Environmental Sciences",
//         url: "/about/school-of-environmental-sciences",
//       },
//     },
//     {
//       uuid: "18ff8ead-3aea-4008-be2d-5054d1ae6979",
//       name: "School of History",
//       content: {
//         title: "School of History",
//         url: "/about/school-of-history",
//       },
//     },
//     {
//       uuid: "99faf738-11a9-42cd-aa08-d86218a4eda4",
//       name: "Current Vacancies",
//       content: {
//         title: "Current Vacancies",
//         url: "https://myview.uea.ac.uk/webrecruitment/",
//       },
//     },
//     {
//       uuid: "7ce3d49e-2ce5-4a9e-b0da-7498b2e8f5d8",
//       name: "Alumni",
//       content: {
//         title: "Alumni",
//         url: "/about/alumni-and-supporters/",
//       },
//     },
//     {
//       uuid: "132b54f1-2bf0-4ecd-a2a0-ca4431bc508a",
//       name: "Global Engagement",
//       content: {
//         title: "Global Engagement",
//         url: "/about/partnerships-hub/global-engagement",
//       },
//     },
//     {
//       uuid: "4d2b92de-93df-43e7-8cda-7559786ccea5",
//       name: "IT Services for Visitors",
//       content: {
//         title: "IT Services for Visitors",
//         url: "/about/university-information/it-information/information-for-visitors",
//       },
//     },
//     {
//       uuid: "7ad7cc37-d737-4151-bfea-f8b317c37564",
//       name: "Corporate Social Responsibility",
//       content: {
//         title: "Corporate Social Responsibility",
//         url: "/about/university-information/corporate-social-responsibility",
//       },
//     },
//     {
//       uuid: "a9751b51-7f57-44c6-b819-1ce235862c83",
//       name: "Postgraduate Research",
//       content: {
//         title: "Postgraduate Research",
//         url: "/research/research-with-us/postgraduate-research",
//       },
//     },
//     {
//       uuid: "15e20977-8cb4-492a-ab73-b41b2bcb7a71",
//       name: "Grow Your Business",
//       content: {
//         title: "Grow Your Business",
//         url: "/business/grow-your-business",
//       },
//     },
//     {
//       uuid: "216bae1f-764d-4ebb-a180-2151418a7a95",
//       name: "Learning Enhancement",
//       content: {
//         title: "Learning Enhancement",
//         url: "/uea-life/student-support/learning-enhancement",
//       },
//     },
//     {
//       uuid: "13e6c8e3-4a68-4425-8899-50f943c19297",
//       name: "Campus Life",
//       content: {
//         title: "Campus Life",
//         url: "/uea-life/campus-life",
//       },
//     },
//     {
//       uuid: "c3559433-a45c-437f-b6b7-b74f32f614c3",
//       name: "Postgraduate",
//       content: {
//         title: "Postgraduate",
//         url: "/apply/postgraduate",
//       },
//     },
//     {
//       uuid: "f46975f6-6a3a-45c0-92db-22d866594b81",
//       name: "Visit Us",
//       content: {
//         title: "Visit Us",
//         url: "/study/visit/",
//       },
//     },
//     {
//       uuid: "a8c48c4f-8175-4b14-8747-3d1318d27cd2",
//       name: "Students from the EU",
//       content: {
//         title: "Students from the EU",
//         url: "/study/international-students/students-from-the-eu",
//       },
//     },
//     {
//       uuid: "36276c32-e4f2-4332-a26f-179ccd5d032a",
//       name: "New Students",
//       content: {
//         title: "New Students",
//         url: "/welcome",
//       },
//     },
//     {
//       uuid: "02da4b08-5a7c-484e-9933-c10d2468042a",
//       name: "PhD/Doctorate",
//       content: {
//         title: "PhD/Doctorate",
//         url: "/course-finder?primaryFilter=PhD%2FDoctorate",
//       },
//     },
//     {
//       uuid: "e525f761-fb58-4255-8a27-e7f193982b0b",
//       name: "Law School",
//       content: {
//         title: "Law School",
//         url: "/about/law-school",
//       },
//     },
//     {
//       uuid: "cdc3112a-099e-4f5b-85ce-2e631cbb3736",
//       name: "School of Mathematics",
//       content: {
//         title: "School of Mathematics",
//         url: "/about/school-of-mathematics",
//       },
//     },
//     {
//       uuid: "b23d4d43-f71a-4b30-ba9a-4dfd7b82c1ef",
//       name: "Interdisciplinary Institute for the Humanities",
//       content: {
//         title: "Interdisciplinary Institute for the Humanities",
//         url: "/about/interdisciplinary-institute-for-the-humanities",
//       },
//     },
//     {
//       uuid: "0fa015c6-f1be-4849-baa9-45fa913dd50a",
//       name: "Before You Join",
//       content: {
//         title: "Before You Join",
//         url: "/about/working-at-uea/before-you-join",
//       },
//     },
//     {
//       uuid: "731ded77-5b69-4504-9d5f-273560b36efb",
//       name: "Careers",
//       content: {
//         title: "Careers",
//         url: "/about/alumni-and-supporters/careers",
//       },
//     },
//     {
//       uuid: "305153c1-ad33-41a5-9352-1fba00eb6d52",
//       name: "Interns and Placements",
//       content: {
//         title: "Interns and Placements",
//         url: "/business/access-student-talent",
//       },
//     },
//     {
//       uuid: "5775b367-c102-434b-91a2-54629175a1a1",
//       name: "Sportspark",
//       content: {
//         title: "Sportspark",
//         url: "https://www.sportspark.co.uk/",
//       },
//     },
//     {
//       uuid: "9358ce86-8056-4690-8060-9f7cda4a08cf",
//       name: "Campus and Community",
//       content: {
//         title: "Campus and Community",
//         url: "/about/university-information/campus-and-community",
//       },
//     },
//     {
//       uuid: "bb535e35-4f5a-46c0-ad6d-3e52e5eff950",
//       name: "Global Engagement",
//       content: {
//         title: "Global Engagement",
//         url: "/about/partnerships-hub/global-engagement",
//       },
//     },
//     {
//       uuid: "0baf09c3-0d3c-495d-a0bf-75e45573a11d",
//       name: "Secure Funding",
//       content: {
//         title: "Secure Funding",
//         url: "/business/secure-funding",
//       },
//     },
//     {
//       uuid: "3d943cea-f8f4-48b8-a0f5-bde786f0b4ec",
//       name: "Research With Us",
//       content: {
//         title: "Research With Us",
//         url: "/research/research-with-us/",
//       },
//     },
//     {
//       uuid: "7d13e53b-36b1-43fb-8702-5023e80dc81e",
//       name: "About UEA Research and Impact",
//       content: {
//         title: "About UEA Research and Impact",
//         url: "/research/about-uea-research-and-impact",
//       },
//     },
//     {
//       uuid: "35d66fb1-94f0-46ca-925b-7a6ab1b4c202",
//       name: "International Students",
//       content: {
//         title: "International Students",
//         url: "/uea-life/student-support/international-student-support",
//       },
//     },
//     {
//       uuid: "2a243b90-075f-4c69-9bb6-8ecf11f08b4b",
//       name: "Norwich & Beyond",
//       content: {
//         title: "Norwich & Beyond",
//         url: "/uea-life/norwich-and-beyond",
//       },
//     },
//     {
//       uuid: "9b7deafe-dea8-4940-b7d1-c1c7380a51a8",
//       name: "Fees",
//       content: {
//         title: "Fees",
//         url: "/study/fees-and-funding/fees",
//       },
//     },
//     {
//       uuid: "a5a20d69-65ee-43c2-b056-c1e80aeb608a",
//       name: "Apprenticeships",
//       content: {
//         title: "Apprenticeships",
//         url: "/apply/apprenticeships",
//       },
//     },
//     {
//       uuid: "7d7165e3-e6f3-4a24-9073-2bb463e5b66f",
//       name: "Undergraduate Open Days",
//       content: {
//         title: "Undergraduate Open Days",
//         url: "/study/visit/undergraduate-open-days",
//       },
//     },
//     {
//       uuid: "3b6c1789-faaa-404a-ac3a-feb978ad5973",
//       name: "Inbound Study Abroad & Exchange",
//       content: {
//         title: "Inbound Study Abroad & Exchange",
//         url: "/study/study-abroad-and-exchange/inbound-study-abroad-and-exchange",
//       },
//     },
//     {
//       uuid: "6d356bcc-6ca0-4d3a-95a5-7f7a009104cc",
//       name: "INTO UEA",
//       content: {
//         title: "INTO UEA",
//         url: "/study/international-students/into-uea",
//       },
//     },
//     {
//       uuid: "b36a628a-b17d-4511-8e1e-6294961a3fbc",
//       name: "Graduates",
//       content: {
//         title: "Graduates",
//         url: "/study/information-for/graduates",
//       },
//     },
//     {
//       uuid: "b9045368-1ae1-4370-89de-daa002c55a6b",
//       name: "Foundation Year",
//       content: {
//         title: "Foundation Year",
//         url: "/course-finder?primaryFilter=Undergraduate&secondaryFilter=Foundation%20Year&year",
//       },
//     },
//     {
//       uuid: "359c2940-2440-44b9-bbf0-60ae6278b03d",
//       name: "School of Psychology",
//       content: {
//         title: "School of Psychology",
//         url: "/about/school-of-psychology",
//       },
//     },
//     {
//       uuid: "f65aa946-1033-43c6-b564-2172cc849366",
//       name: "Natural Sciences",
//       content: {
//         title: "Natural Sciences",
//         url: "/about/natural-sciences",
//       },
//     },
//     {
//       uuid: "a95e6541-0e99-4516-b53b-6091e34b7870",
//       name: "Faculty of Medicine and Health",
//       content: {
//         title: "Faculty of Medicine and Health",
//         url: "/about/faculties-and-schools/faculty-of-medicine-and-health",
//       },
//     },
//     {
//       uuid: "881545e2-2a1a-4a10-8659-ed096d333082",
//       name: "School of Literature, Drama and Creative Writing",
//       content: {
//         title: "School of Literature, Drama and Creative Writing",
//         url: "/about/school-of-literature-drama-and-creative-writing",
//       },
//     },
//     {
//       uuid: "ad6b083b-e169-4991-8a54-db7e4bae7340",
//       name: "Explore Norwich & Beyond",
//       content: {
//         title: "Explore Norwich & Beyond",
//         url: "/uea-life/norwich-and-beyond",
//       },
//     },
//     {
//       uuid: "186e145d-8c0e-481f-91f1-c7e0c5f22bfb",
//       name: "Giving-to-UEA",
//       content: {
//         title: "Giving-to-UEA",
//         url: "/about/giving-to-uea",
//       },
//     },
//     {
//       uuid: "e1a596f5-46e3-42a6-b03e-5ec2aaf8796f",
//       name: "Partnerships in Doctoral Training",
//       content: {
//         title: "Partnerships in Doctoral Training",
//         url: "/research/research-with-us/postgraduate-research/latest-phds-and-research-studentships/partnerships-in-doctoral-training",
//       },
//     },
//     {
//       uuid: "73075055-2961-4849-8ac5-499c383e7693",
//       name: "Sainsbury Centre",
//       content: {
//         title: "Sainsbury Centre",
//         url: "/about/information-for-visitors/sainsbury-centre",
//       },
//     },
//     {
//       uuid: "312997d2-fdda-41a5-affd-01cbba9ec6a0",
//       name: "UEA 2030 Vision",
//       content: {
//         title: "UEA 2030 Vision",
//         url: "/about/university-information/uea-2030-vision",
//       },
//     },
//     {
//       uuid: "9a1f0b42-d887-40a3-be52-b4d4cfd1ffec",
//       name: "University of Sanctuary",
//       content: {
//         title: "University of Sanctuary",
//         url: "/about/university-information/corporate-social-responsibility/university-of-sanctuary",
//       },
//     },
//     {
//       uuid: "e6f2e934-c3d5-4cd1-a29c-737ef2967a37",
//       name: "Access Entrepreneurship and Innovation",
//       content: {
//         title: "Access Entrepreneurship and Innovation",
//         url: "/business/access-entrepreneurship-and-innovation",
//       },
//     },
//     {
//       uuid: "1da3864f-9fa2-4737-a7c4-da7d9065fcd4",
//       name: "Postgraduate Research",
//       content: {
//         title: "Postgraduate Research",
//         url: "/research/research-with-us/postgraduate-research",
//       },
//     },
//     {
//       uuid: "6ee4bbe6-06ee-4601-8197-3890eb15db09",
//       name: "ClimateUEA",
//       content: {
//         title: "ClimateUEA",
//         url: "/climate",
//       },
//     },
//     {
//       uuid: "8c0853d4-ab99-4143-a11e-3fb317948ac0",
//       name: "Living on/off Campus",
//       content: {
//         title: "Living on/off Campus",
//         url: "/uea-life/accommodation/",
//       },
//     },
//     {
//       uuid: "9779f9b6-5a7e-4681-b4aa-f15a47e4af7f",
//       name: "Careers and Employability",
//       content: {
//         title: "Careers and Employability",
//         url: "/uea-life/student-support/careers",
//       },
//     },
//     {
//       uuid: "f768d918-f78e-4119-a6a3-04b5a6499b19",
//       name: "Funding Options",
//       content: {
//         title: "Funding Options",
//         url: "/study/fees-and-funding/funding-options",
//       },
//     },
//     {
//       uuid: "28a446f4-d44c-4aaa-880f-5b1bb72dc8b9",
//       name: "International",
//       content: {
//         title: "International",
//         url: "/apply/international",
//       },
//     },
//     {
//       uuid: "07410222-c457-4a17-89ad-a1a640960ee7",
//       name: "Postgraduate Open Days",
//       content: {
//         title: "Postgraduate Open Days",
//         url: "/study/visit/postgraduate-open-days",
//       },
//     },
//     {
//       uuid: "c5d7d8e6-be0f-47cd-b6ab-1b5d81fd2eef",
//       name: "Summer Study at UEA",
//       content: {
//         title: "Summer Study at UEA",
//         url: "/study/study-abroad-and-exchange/summer-study-and-short-courses-at-uea",
//       },
//     },
//     {
//       uuid: "c83bc6b1-5f77-4d46-be54-877a59c9f728",
//       name: "Accommodation for International Students",
//       content: {
//         title: "Accommodation for International Students",
//         url: "/study/international-students/accommodation-for-international-students",
//       },
//     },
//     {
//       uuid: "733b2f69-0a95-4f85-925a-a73d1d20c127",
//       name: "Young People",
//       content: {
//         title: "Young People",
//         url: "/study/information-for/young-people",
//       },
//     },
//     {
//       uuid: "1ad43f5a-9ef3-4f2e-bffc-b4ab6b411077",
//       name: "Short Course/Professional Development",
//       content: {
//         title: "Short Course/Professional Development",
//         url: "/course-finder?primaryFilter=Short%20Course%20%2F%20Professional%20Development",
//       },
//     },
//     {
//       uuid: "6b8234ab-6966-4628-baab-62d6d6798362",
//       name: "School of Social Work",
//       content: {
//         title: "School of Social Work",
//         url: "/about/school-of-social-work",
//       },
//     },
//     {
//       uuid: "b172c458-d17f-4966-863f-7af0856f3a92",
//       name: "School of Pharmacy",
//       content: {
//         title: "School of Pharmacy",
//         url: "/about/school-of-pharmacy",
//       },
//     },
//     {
//       uuid: "6178240b-539c-409a-a5c0-6227b5706d51",
//       name: "Norwich Medical School",
//       content: {
//         title: "Norwich Medical School",
//         url: "/about/norwich-medical-school",
//       },
//     },
//     {
//       uuid: "4e74db4d-de35-4229-9f77-c0a9a043efcb",
//       name: "School of Politics, Philosophy and Communication Studies",
//       content: {
//         title: "School of Politics, Philosophy and Communication Studies",
//         url: "/about/school-of-politics-philosophy-and-communication-studies",
//       },
//     },
//     {
//       uuid: "87c83877-fb81-4c3c-979d-a7b229b290af",
//       name: "Explore the Library",
//       content: {
//         title: "Explore the Library",
//         url: "/about/library-and-archives/explore-the-library",
//       },
//     },
//     {
//       uuid: "9dacc093-1958-4f2e-ad97-559627811c4f",
//       name: "Nursery",
//       content: {
//         title: "Nursery",
//         url: "/uea-life/campus-life/campus-facilities/nursery",
//       },
//     },
//     {
//       uuid: "b39712ec-8400-46b4-83c3-5c2cd5812324",
//       name: "Graduation",
//       content: {
//         title: "Graduation",
//         url: "/about/alumni-and-supporters/graduation",
//       },
//     },
//     {
//       uuid: "77e5d230-0beb-4e4a-9b63-01b51579615a",
//       name: "Schools",
//       content: {
//         title: "Schools",
//         url: "/about/partnerships-hub/schools",
//       },
//     },
//     {
//       uuid: "00230285-6ec1-4605-a45d-3c3772fc6f69",
//       name: "Norwich Research Park",
//       content: {
//         title: "Norwich Research Park",
//         url: "/about/information-for-visitors/norwich-research-park",
//       },
//     },
//     {
//       uuid: "b20bc260-8a44-4803-b74e-39d2393799e0",
//       name: "UEA Values",
//       content: {
//         title: "UEA Values",
//         url: "/about/university-information/vice-chancellors-office/uea-values",
//       },
//     },
//     {
//       uuid: "13d92467-9f26-438b-a2aa-17a74006e593",
//       name: "UEA for Business",
//       content: {
//         title: "UEA for Business",
//         url: "/business/how-we-can-work-together",
//       },
//     },
//     {
//       uuid: "b919247c-f0a6-4a1a-8861-ec7719daedab",
//       name: "Use Our Facilities",
//       content: {
//         title: "Use Our Facilities",
//         url: "/business/use-our-facilities",
//       },
//     },
//     {
//       uuid: "54c8e57a-3d21-43cc-bfd9-a534e5c63f7f",
//       name: "Fellowships",
//       content: {
//         title: "Fellowships",
//         url: "/research/research-with-us/fellowships",
//       },
//     },
//     {
//       uuid: "7bce6a8c-d040-4a8c-bff5-85005f270c38",
//       name: "CreativeUEA",
//       content: {
//         title: "CreativeUEA",
//         url: "/creative",
//       },
//     },
//     {
//       uuid: "c8c74014-678a-46c4-836b-f15fc56b61e5",
//       name: "Prospective Students",
//       content: {
//         title: "Prospective Students",
//         url: "/uea-life/accommodation/prospective-students",
//       },
//     },
//     {
//       uuid: "74d991fe-dc08-4004-9496-26ffd5dd4e8b",
//       name: "Support After UEA",
//       content: {
//         title: "Support After UEA",
//         url: "/uea-life/student-support/support-after-uea",
//       },
//     },
//     {
//       uuid: "34dff977-464f-402a-849a-029b99d6cb3b",
//       name: "Scholarship Finder",
//       content: {
//         title: "Scholarship Finder",
//         url: "/study/fees-and-funding/scholarship-finder",
//       },
//     },
//     {
//       uuid: "0da8928c-829a-47fb-a6fe-7d51ea99845f",
//       name: "Register Interest",
//       content: {
//         title: "Register Interest",
//         url: "/apply/register-interest",
//       },
//     },
//     {
//       uuid: "fcaf0dbc-32dc-4e54-95f5-d6696c386d7d",
//       name: "Campus Tours",
//       content: {
//         title: "Campus Tours",
//         url: "/study/visit/campus-tours",
//       },
//     },
//     {
//       uuid: "54330666-26e9-4980-a82b-3feecd24ed11",
//       name: "Outgoing Study Abroad",
//       content: {
//         title: "Outgoing Study Abroad",
//         url: "/study/study-abroad-and-exchange/outgoing-study-abroad",
//       },
//     },
//     {
//       uuid: "f22ea6cc-b963-4d8e-a3dd-33fec50d966c",
//       name: "Visa Advice",
//       content: {
//         title: "Visa Advice",
//         url: "/study/international-students/visa-advice",
//       },
//     },
//     {
//       uuid: "3dc07490-2a65-4c6d-bba9-5491d784b463",
//       name: "Parents and Carers",
//       content: {
//         title: "Parents and Carers",
//         url: "/study/information-for/parents",
//       },
//     },
//     {
//       uuid: "9dbff00f-4224-4b3c-949e-38d9cbd93267",
//       name: "Summer School",
//       content: {
//         title: "Summer School",
//         url: "/course-finder?primaryFilter=Summer%20School",
//       },
//     },
//     {
//       uuid: "8127b58d-3646-4b41-8e44-0db12ff2b518",
//       name: "Sociology",
//       content: {
//         title: "Sociology",
//         url: "/about/sociology",
//       },
//     },
//     {
//       uuid: "43003844-9012-4755-b4ba-a4075dec6adc",
//       name: "Physics",
//       content: {
//         title: "Physics",
//         url: "/about/physics",
//       },
//     },
//     {
//       uuid: "5d03d9df-4309-4c6f-a80b-178511e9c6bd",
//       name: "School of Health Sciences",
//       content: {
//         title: "School of Health Sciences",
//         url: "/about/school-of-health-sciences",
//       },
//     },
//     {
//       uuid: "5c792102-c249-4746-bd37-3cf5f345fa09",
//       name: "Liberal Arts",
//       content: {
//         title: "Liberal Arts",
//         url: "/about/liberal-arts",
//       },
//     },
//     {
//       uuid: "eec2b027-1f1c-4da6-809d-39af36c0acae",
//       name: "Archives and Special Collections",
//       content: {
//         title: "Archives and Special Collections",
//         url: "/about/library-and-archives/archives-and-special-collections",
//       },
//     },
//     {
//       uuid: "ff7e5cd6-9f22-4d2c-a73d-3555ff1d9086",
//       name: "Retirement Association",
//       content: {
//         title: "Retirement Association",
//         url: "/about/working-at-uea/retirement-association",
//       },
//     },
//     {
//       uuid: "4d09f1f8-fcbf-44db-b27f-abe3cc5467c8",
//       name: "Student Records",
//       content: {
//         title: "Student Records",
//         url: "/about/alumni-and-supporters/student-records",
//       },
//     },
//     {
//       uuid: "fd305ec9-6faa-4c48-9244-94c10b5cfb13",
//       name: "Sponsors and Donors",
//       content: {
//         title: "Sponsors and Donors",
//         url: "/about/giving-to-uea",
//       },
//     },
//     {
//       uuid: "a40606f8-93b6-49a2-be2f-a5072a82042b",
//       name: "Norwich & Beyond",
//       content: {
//         title: "Norwich & Beyond",
//         url: "/uea-life/norwich-and-beyond",
//       },
//     },
//     {
//       uuid: "41a3c81d-ccd6-48b2-9478-9d37b810f652",
//       name: "UEA Plan 2016-2020",
//       content: {
//         title: "UEA Plan 2016-2020",
//         url: "/about/university-information/uea-plan-2016-2020",
//       },
//     },
//     {
//       uuid: "ad5f9e93-cbc6-49a1-90ab-e48e64a97241",
//       name: "Alumni Activities",
//       content: {
//         title: "Alumni Activities",
//         url: "/about/alumni-and-supporters/alumni/get-involved/events/global-gathering",
//       },
//     },
//     {
//       uuid: "f9ed0dbe-04cc-47d8-8d5f-a434667548ac",
//       name: "Publications",
//       content: {
//         title: "Publications",
//         url: "/business/publications",
//       },
//     },
//     {
//       uuid: "422fb32b-b057-4b75-9e33-4066f7069cfc",
//       name: "Working at UEA",
//       content: {
//         title: "Working at UEA",
//         url: "/about/working-at-uea",
//       },
//     },
//     {
//       uuid: "6779adb2-83a5-4b40-89e2-5a7912fe260e",
//       name: "Research Groups and Centres",
//       content: {
//         title: "Research Groups and Centres",
//         url: "/groups-and-centres",
//       },
//     },
//     {
//       uuid: "40115fad-2c11-43fd-9a27-d3802465b176",
//       name: "Application Process",
//       content: {
//         title: "Application Process",
//         url: "/uea-life/accommodation/application-process",
//       },
//     },
//     {
//       uuid: "d3448b3e-37e1-4415-a1a4-92b405fac044",
//       name: "Student Services Live Chat",
//       content: {
//         title: "Student Services Live Chat",
//         url: "/uea-life/student-support/live-chat",
//       },
//     },
//     {
//       uuid: "4fa621b5-4087-47b7-841d-5b5efddd552f",
//       name: "Events",
//       content: {
//         title: "Events",
//         url: "/uea-life/events",
//       },
//     },
//     {
//       uuid: "10cb63bf-4f93-4059-89fb-10c6ad6eb885",
//       name: "Bursaries",
//       content: {
//         title: "Bursaries",
//         url: "/study/fees-and-funding/bursaries",
//       },
//     },
//     {
//       uuid: "f09f4cb3-89df-400a-b41b-654b9be44f31",
//       name: "Find a Course",
//       content: {
//         title: "Find a Course",
//         url: "/course-finder",
//       },
//     },
//     {
//       uuid: "2d0b806f-6650-43a2-b5c4-d1068a07ff2f",
//       name: "Plan Your Visit",
//       content: {
//         title: "Plan Your Visit",
//         url: "/study/visit/plan-your-visit",
//       },
//     },
//     {
//       uuid: "ccae13be-e87c-4ad2-8f0c-dc1bbbe0bc34",
//       name: "Erasmus Programme",
//       content: {
//         title: "Erasmus Programme",
//         url: "/study/study-abroad-and-exchange/erasmus-programme",
//       },
//     },
//     {
//       uuid: "23cb8f2c-543b-4408-85db-45ff3d8a37e2",
//       name: "How to Apply",
//       content: {
//         title: "How to Apply",
//         url: "/apply/international",
//       },
//     },
//     {
//       uuid: "c3fa4f4a-29cb-431d-9e1e-e94ef82926dd",
//       name: "Teachers",
//       content: {
//         title: "Teachers",
//         url: "/study/information-for/teachers",
//       },
//     },
//     {
//       uuid: "7d6a5f3c-aa63-4481-a044-eadc803dd08f",
//       name: "International Preparation",
//       content: {
//         title: "International Preparation",
//         url: "/course-finder?primaryFilter=International%20Preparation",
//       },
//     },
//     {
//       uuid: "4ec1f4d3-44d5-428f-a906-3ded546156d8",
//       name: "Accessibility",
//       content: {
//         title: "Accessibility",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/website",
//       },
//     },
//     {
//       uuid: "08d76fe9-6d3d-4f56-800c-6e6c7e562508",
//       name: "Welcome",
//       content: {
//         title: "Welcome",
//         url: "/welcome",
//       },
//     },
//     {
//       uuid: "9d3a6616-87be-40a1-9ca7-129c99cf46f1",
//       name: "News",
//       content: {
//         title: "News",
//         url: "/about/news",
//       },
//     },
//     {
//       uuid: "0926acf0-1a95-4a7f-9b38-a5813b9e4d49",
//       name: "Apprenticeships",
//       content: {
//         title: "Apprenticeships",
//         url: "/apprenticeships",
//       },
//     },
//     {
//       uuid: "166faf7f-6c56-4588-a143-58bf14f6c9fe",
//       name: "Legal Statements",
//       content: {
//         title: "Legal Statements",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-legal-policies",
//       },
//     },
//     {
//       uuid: "47076cb7-f6fa-4ae8-a02f-5c8981826c2b",
//       name: "New Students",
//       content: {
//         title: "New Students",
//         url: "https://www.uea.ac.uk/welcome",
//       },
//     },
//     {
//       uuid: "313ff16a-21e5-48b5-9e88-8528f45da2b6",
//       name: "Contact Us and Map",
//       content: {
//         title: "Contact Us and Map",
//         url: "/about/information-for-visitors/contact-information-and-map",
//       },
//     },
//     {
//       uuid: "ab9992b5-d7f9-43f6-b757-36576c6aa966",
//       name: "Incoming Study Abroad",
//       content: {
//         title: "Incoming Study Abroad",
//         url: "/study/study-abroad-and-exchange/incoming-study-abroad-and-exchange",
//       },
//     },
//     {
//       uuid: "46b3adbe-c273-4fb8-b67d-7c3a13382b45",
//       name: "Statement on Modern Slavery",
//       content: {
//         title: "Statement on Modern Slavery",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-legal-policies/modern-slavery-statement",
//       },
//     },
//     {
//       uuid: "1fab50a3-264e-4062-ae41-8e3a9e515672",
//       name: "Cookie Policy",
//       content: {
//         title: "Cookie Policy",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/website",
//       },
//     },
//     {
//       uuid: "cc6f86ec-a212-4f47-8b8c-22e2150290f0",
//       name: "Data Protection",
//       content: {
//         title: "Data Protection",
//         url: "https://www.uea.ac.uk/about/university-information/statutory-and-legal/data-protection",
//       },
//     },
//     {
//       uuid: "a218248b-dcef-4596-8af9-00a27ec322c2",
//       name: "Equality, Diversity and Inclusion",
//       content: {
//         title: "Equality, Diversity and Inclusion",
//         url: "/about/equality-diversity-and-inclusion",
//       },
//     },
//     {
//       uuid: "d00892d0-ce36-44d5-acba-6976c323b8e2",
//       name: "Donate",
//       content: {
//         title: "Donate",
//         url: "/donate",
//       },
//     },
//     {
//       uuid: "62feefa9-ea8d-4589-b000-e84fb6746ce7",
//       name: "Ukraine: How you can help",
//       content: {
//         title: "Ukraine: How you can help",
//         url: "/about/news/statements/ukraine",
//       },
//     },
//     {
//       uuid: "f6fbe62a-fdc9-40f9-be5a-339fee265b6a",
//       name: "COVID-19 appeal",
//       content: {
//         title: "COVID-19 appeal",
//         url: "covid-19-appeal",
//       },
//     },
//   ],
// };