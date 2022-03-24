import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import './arc-hero.js';

export default {
  title: 'Components/ArcHero',
  component: 'arc-hero',
  argTypes: {
    customTitle: {
      name: 'title',
      control: 'text',
      description: 'The title of the hero. Alternatively, the title slot can be used.',
      table: {
        category: 'properties',
      },
    },
    customSubTitle: {
      name: 'subtitle',
      control: 'text',
      description: 'The subtitle of the hero. Alternatively, the subtitle slot can be used.',
      table: {
        category: 'properties',
      },
    },
  },
} as Meta;

const Template: Story = ({ background, fullscreen, customTitle, customSubTitle }) => html`
  <arc-hero
    background=${ifDefined(background || undefined)}
    title=${ifDefined(customTitle || undefined)}
    subtitle=${ifDefined(customSubTitle || undefined)}
    ?fullscreen=${fullscreen}
    style=${ifDefined(background ? `color: white;` : undefined)}
  >
    <span>
      Creating a prototype website that also contains copy and images is the best way to help the client understand what
      the concept behind your design is.
    </span>
  </arc-hero>
`;

const defaultArgs = {
  fullscreen: false,
  customTitle: 'Callisto',
  customSubTitle: '25888 Entries | 11/06/1922',
  background: '',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const BackgroundImg = Template.bind({});
BackgroundImg.args = {
  ...defaultArgs,
  background:
    'https://images.adsttc.com/media/images/5231/c740/e8e4/4efe/3a00/0090/large_jpg/gherkin_shaundunmall.jpg?1378993979',
};
