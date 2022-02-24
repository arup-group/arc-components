import { html, TemplateResult } from 'lit';


interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  bgImg?: string;
  textColor?: string;
}

const Template: Story<ArgTypes> = ({ bgImg, textColor }: ArgTypes) => html`
  <arc-hero bgImg="${bgImg}" textColor="${textColor}">
  <span slot="title">WebComponents</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </arc-hero>
`;

const defaultArgs: ArgTypes = {
  bgImg: undefined,
  textColor: undefined,
}

export const Hero = Template.bind({});
export const BackgroundedHero = Template.bind({});


Hero.args = { ...defaultArgs };
BackgroundedHero.args = { ...defaultArgs,bgImg:"https://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg", textColor:"white"};
