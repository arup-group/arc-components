import { expect } from '@open-wc/testing';
import { AccountInfo } from '@azure/msal-browser';
import { isExpired } from './auth.js';

describe('auth', () => {
  const accountInfo: AccountInfo = {
    homeAccountId: 'test',
    environment: 'login.windows.net',
    tenantId: 'test',
    username: 'Test.User@test.com',
    localAccountId: 'test',
    name: 'Test User',
    idTokenClaims: {
      exp: 0,
    },
  };

  it('isExpired should return true when the date is set to the beginning of the epoch', () => {
    (accountInfo.idTokenClaims as any).exp = Number(new Date(0));
    expect(isExpired(accountInfo)).to.be.true;
  });

  it('isExpired should return true when no expiration is given', () => {
    (accountInfo.idTokenClaims as any).exp = null;
    expect(isExpired(accountInfo)).to.be.true;
  });

  it('isExpired should return false', () => {
    (accountInfo.idTokenClaims as any).exp = Number(new Date());
    expect(isExpired(accountInfo)).to.be.false;
  });
});
