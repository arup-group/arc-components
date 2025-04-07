import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import Events from '@storybook/core-events';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import arcLogo from '../assets/arc-storybook.svg';

const THEME = create({
  base: 'light',
  fontBase: '"Arial", sans-serif',
  textColor: 'rgb(28, 28, 28)',
  barTextColor: 'rgb(239, 79, 79)',
  barSelectedColor: 'rgb(239, 79, 79)',
  barBg: 'rgb(239, 239, 239)',
  appBg: 'rgb(239, 239, 239)',
  brandTitle: 'ARC Design System',
  brandImage: arcLogo,
  brandUrl: 'https://arc.arup.com',
});

addons.setConfig({
  theme: THEME,
  showPanel: false,
});

addons.register('application-insights', (api) => {
  if (process.env.NODE_ENV === 'development') return;
  const APP_INSIGHTS = new ApplicationInsights({
    config: {
      ingestionEndpoint: 'https://uksouth-0.in.applicationinsights.azure.com',
      instrumentationKey: 'c77ad0b6-1dc7-433d-99df-e164c2b2a11f',
    },
  });
  APP_INSIGHTS.loadAppInsights();
  const uri = window.location.pathname;
  APP_INSIGHTS.trackPageView({ name: 'ARC Design System', uri });
  api.on(Events.SET_CURRENT_STORY, (eventData) => {
    const uri = window.location.pathname;
    const storyId = eventData.storyId;
    const storyName = eventData.viewMode;
    APP_INSIGHTS.trackPageView({
      name: storyName,
      uri: `${uri}/${storyId}/${storyName}`,
      properties: { storyId, storyName },
    });
  });
});
