import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { parseObject, stringToHyphenSeparated } from '../../internal/string.js';
import { setRootValue, getRootValue } from '../../utilities/style-utils.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { CONTAINER_THEMES } from '../container/constants/ContainerConstants.js';
import { FONT_SIZES, FONT_SPACING } from '../../internal/constants/styleConstants.js';
import ArcAccessibility, { UserPreferences } from './ArcAccessibility.js';
import { ContentPreference } from './constants/AccessibilityConstants.js';
import type ArcContainer from '../container/ArcContainer.js';
import type ArcDrawer from '../drawer/ArcDrawer.js';
import type ArcRadioGroup from '../radio-group/ArcRadioGroup.js';
import type ArcRadio from '../radio/ArcRadio.js';
import '../container/arc-container.js';
import './arc-accessibility.js';

describe('ArcAccessibility', () => {
  const isOpen = (element: ArcAccessibility) => {
    const drawer: ArcDrawer = element.shadowRoot?.getElementById('drawer') as ArcDrawer;
    return element.hasAttribute('open') && drawer.hasAttribute('open');
  };

  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcAccessibility;
    beforeEach(async () => {
      element = await fixture(html`<arc-accessibility></arc-accessibility>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-accessibility></arc-accessibility>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('activates the accessibility panel when the open state is set', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility open></arc-accessibility>`);
      expect(element.open).to.be.true;
      expect(isOpen(element)).to.be.true;
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcAccessibility;

    beforeEach(async () => {
      element = await fixture(html`<arc-accessibility></arc-accessibility>`);
    });

    it('renders the component in an open state', async () => {
      expect(element.open).to.be.false;
      expect(isOpen(element)).to.be.false;

      element.open = true;
      await elementUpdated(element);

      expect(element.open).to.be.true;
      expect(isOpen(element)).to.be.true;
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    const testPreference: ContentPreference = 'fontSize';
    const testPreferenceTwo: ContentPreference = 'lineHeight';

    beforeEach(async () => {
      /* Add some default :root arc css variables */
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES['xx-small']}`, '0.625rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES['x-small']}`, '0.75rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.small}`, '0.875rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.medium}`, '1rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.large}`, '1.25rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES['x-large']}`, '1.5rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES['xx-large']}`, '2.25rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES['xxx-large']}`, '3rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES['xxxx-large']}`, '4.5rem');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreferenceTwo)}-${FONT_SPACING.dense}`, '1.4');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreferenceTwo)}-${FONT_SPACING.normal}`, '1.8');
      setRootValue(`--arc-${stringToHyphenSeparated(testPreferenceTwo)}-${FONT_SPACING.loose}`, '2.2');
    });

    it('should return the custom theme property of a parent arc-container', async () => {
      /* Clear the user preferences first */
      localStorage.clear();

      const container: ArcContainer = await fixture(
        html`<arc-container theme=${CONTAINER_THEMES.dark}></arc-container>`
      );
      const accessibility = container.shadowRoot?.getElementById('accessibility') as ArcAccessibility;

      expect(accessibility.getTheme()).to.equal(CONTAINER_THEMES.dark);
    });

    it('should return the default theme property when no parent arc-container is present', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);
      expect(element.getTheme()).to.equal(CONTAINER_THEMES.auto);
    });

    it('should update arc css root variables', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);

      /* Test whether the root values were defined properly */
      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.medium}`)).to.equal('1rem');

      /*
      Turn all font-sizes to large (index 4). The default font-size is medium (index 3).
      All font-sizes will therefore increase with an index of 1 (newIndex - currentIndex)
      small will become medium, medium will become large etc.
      */
      element.updateRootValue(testPreference as keyof UserPreferences, FONT_SIZES.large);
      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.medium}`)).to.equal('1.25rem');
    });

    it('throws an error when trying to update an invalid user preference', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);
      expect(() => element.updateRootValue('testVal' as keyof UserPreferences, 'someNewValue')).to.throw(
        'The provided key is not a valid UserPreference'
      );
    });

    it('throws an error when trying to update a none existing arc css root variable', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);
      const contentPreference: ContentPreference = 'lineHeight';

      /* Turn the font-size to xxxx-large */
      expect(() => element.updateRootValue(contentPreference as keyof UserPreferences, 'testVal')).to.throw(
        'The provided value does not exist as an available root value'
      );
    });

    it('does nothing when the theme property is being updated', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);
      element.updateRootValue('theme' as keyof UserPreferences, CONTAINER_THEMES.dark);
      expect('nothing happened').to.equal('nothing happened');
    });

    it('should restore an arc css root variable', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);

      /* Increase each fontsize with an index of 1 */
      element.updateRootValue(testPreference as keyof UserPreferences, FONT_SIZES.large);

      /* Restore the default values */
      element.restoreRootValues(testPreference as keyof UserPreferences);
      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.medium}`)).to.equal('1rem');
    });

    it('should restore all the default arc css root variables', async () => {
      const element: ArcAccessibility = await fixture(html`<arc-accessibility></arc-accessibility>`);
      element.updateRootValue(testPreference as keyof UserPreferences, FONT_SIZES.large);
      element.updateRootValue(testPreferenceTwo as keyof UserPreferences, FONT_SPACING.loose);

      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.medium}`)).to.equal('1.25rem');
      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreferenceTwo)}-${FONT_SPACING.normal}`)).to.equal(
        '2.2'
      );

      element.restoreRootDefaults();

      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreference)}-${FONT_SIZES.medium}`)).to.equal('1rem');
      expect(getRootValue(`--arc-${stringToHyphenSeparated(testPreferenceTwo)}-${FONT_SPACING.normal}`)).to.equal(
        '1.8'
      );
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcAccessibility;
    let themeRadioGroup: ArcRadioGroup;
    const accessibilityChangeHandler: SinonSpy = sinon.spy();

    /* Grab the user preferences from the localStore */
    const getCachedPreferences = () => {
      const cachedPreferences = localStorage.getItem(ArcAccessibility.tag);
      let validateObject: UserPreferences = {} as any;

      if (cachedPreferences) {
        validateObject = parseObject(cachedPreferences);
      }
      return validateObject;
    };

    beforeEach(async () => {
      element = await fixture(html`<arc-accessibility></arc-accessibility>`);
      themeRadioGroup = element.shadowRoot?.getElementById('theme') as ArcRadioGroup;
    });

    afterEach(() => {
      element.open = false;
      accessibilityChangeHandler.resetHistory();
    });

    it('should open the accessibility panel when calling the show() method', async () => {
      expect(isOpen(element)).to.be.false;

      element.show();
      await elementUpdated(element);

      expect(isOpen(element)).to.be.true;
    });

    it('should hide the accessibility panel when calling the hide() method', async () => {
      element.show();
      await elementUpdated(element);

      element.hide();
      await elementUpdated(element);

      expect(isOpen(element)).to.be.false;
    });

    it('should emit arc-accessibility-change when the user preferences change', async () => {
      element.addEventListener(ARC_EVENTS.accessibilityChange, accessibilityChangeHandler);

      /* The accessibility component stores default preferences in the localStore once connected */
      const currentPreferences = getCachedPreferences();

      /* Open the accessibility panel */
      element.show();
      await elementUpdated(element);

      /* Change a personal preference. Ensure that the element is an arc-radio and is not already checked */
      const unselectedOptions = [...themeRadioGroup.children].filter(
        child => child.tagName === 'ARC-RADIO' && !child.hasAttribute('checked')
      );
      (unselectedOptions[0] as ArcRadio).click();

      /* After a radio button is `clicked` the accessibility component fires of the change handler and updates the localStore */
      await waitUntil(() => accessibilityChangeHandler.calledOnce);
      expect(accessibilityChangeHandler).to.have.been.calledOnce;

      const newPreferences = getCachedPreferences();
      expect((currentPreferences as any).theme).to.not.equal((newPreferences as any).theme);
    });
  });
});
