import { html, TemplateResult } from 'lit';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  bgImg: string | undefined,
  customColor: string | undefined,
}

const Template: Story<ArgTypes> = ({ bgImg, customColor }: ArgTypes) => html`
  <arc-hero style="--custom-color:${customColor};" bgImg="${bgImg}"

  >
  <span slot='title'>Generative Design & the Built Environment...</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  </arc-hero>
`;
const ImgTemplate: Story<ArgTypes> = ({ customColor }: ArgTypes) => html`
  <arc-hero style="--custom-color:${customColor};"  >
  <span slot='title'>Generative design and the built environment</span>
  <img  src="https://random.imagecdn.app/500/150"/>
  </arc-hero>
`;

const defaultArgs: ArgTypes = {
  bgImg: undefined,
  customColor: undefined,
};

/* TYPES */
export const Default = Template.bind({});
export const CustomColor = Template.bind({});
export const BackgroundImg = Template.bind({});
export const ImgDisplay = ImgTemplate.bind({});
Default.args = { ...defaultArgs };
CustomColor.args = { ...defaultArgs, customColor: 'blue' };
BackgroundImg.args = { ...defaultArgs, bgImg: "https://random.imagecdn.app/500/150"};
ImgDisplay.args = { ...defaultArgs };
