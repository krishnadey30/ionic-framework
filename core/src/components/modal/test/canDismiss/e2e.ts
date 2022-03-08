import { newE2EPage } from '@stencil/core/testing';
import { dragElementBy } from '@utils/test';

describe('modal - canDismiss handler', () => {
  let page;

  describe('regular modal', () => {
    beforeEach(async () => {
      page = await newE2EPage({ url: '/src/components/modal/test/canDismiss?ionic:_testing=true' });
    });

    it('should dismiss when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(true);
    });
    it('should not dismiss when canDismiss is false', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(false);
    });
    it('should dismiss when canDismiss is Promise<true>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-promise-true');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(true);
    });
    it('should not dismiss when canDismiss is Promise<false>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-promise-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(false);
    });
  });

  describe('card modal', () => {
    beforeEach(async () => {
      page = await newE2EPage({ url: '/src/components/modal/test/canDismiss?ionic:_testing=true&ionic:mode=ios' });
      await page.click('#radio-card');
    });

    it('should dismiss when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(true);
    });
    it('should not dismiss when canDismiss is false', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(false);
    });
    it('should dismiss when canDismiss is Promise<true>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-promise-true');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(true);
    });
    it('should not dismiss when canDismiss is Promise<false>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-promise-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(false);
    });
    it('should dismiss on swipe when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');
      const ionModalDidDismiss = await page.spyOnEvent('ionModalDidDismiss');

      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      await ionModalDidDismiss.next();
    });
    it('should not dismiss on swipe when canDismiss is false', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      const modal = await page.find('ion-modal');
      expect(modal).not.toBe(null);
    });
    it('should dismiss on swipe when canDismiss is Promise<true>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');
      const ionModalDidDismiss = await page.spyOnEvent('ionModalDidDismiss');

      await page.click('#radio-promise-true');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      await ionModalDidDismiss.next();
    });
    it('should not dismiss on swipe when canDismiss is Promise<false>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent')
      const ionHandlerDone = await page.spyOnEvent('ionHandlerDone');

      await page.click('#radio-promise-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      await ionHandlerDone.next();

      const modal = await page.find('ion-modal');
      expect(modal).not.toBe(null);
    });
  });

  describe('sheet modal', () => {
    beforeEach(async () => {
      page = await newE2EPage({ url: '/src/components/modal/test/canDismiss?ionic:_testing=true' });
      await page.click('#radio-sheet');
    });

    it('should dismiss when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(true);
    });
    it('should not dismiss when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(false);
    });
    it('should dismiss when canDismiss is Promise<true>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-promise-true');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(true);
    });
    it('should not dismiss when canDismiss is Promise<false>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-promise-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modal = await page.find('ion-modal');
      const returnValue = await modal.callMethod('dismiss');

      expect(returnValue).toBe(false);
    });
    it('should dismiss on swipe when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');
      const ionModalDidDismiss = await page.spyOnEvent('ionModalDidDismiss');

      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      await ionModalDidDismiss.next();
    });
    it('should not dismiss on swipe when canDismiss is true', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');

      await page.click('#radio-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      const modal = await page.find('ion-modal');
      expect(modal).not.toBe(null);
    });
    it('should dismiss on swipe when canDismiss is Promise<true>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');
      const ionModalDidDismiss = await page.spyOnEvent('ionModalDidDismiss');

      await page.click('#radio-promise-true');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      await ionModalDidDismiss.next();
    });
    it('should not dismiss on swipe when canDismiss is Promise<false>', async () => {
      const ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');
      const ionHandlerDone = await page.spyOnEvent('ionHandlerDone');

      await page.click('#radio-promise-false');
      await page.click('#show-modal');

      await ionModalDidPresent.next();

      const modalHeader = await page.$('#modal-header');
      await dragElementBy(modalHeader, page, 0, 500);

      await ionHandlerDone.next();

      const modal = await page.find('ion-modal');
      expect(modal).not.toBe(null);
    });
  });
});