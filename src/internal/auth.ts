import { isAfter } from 'date-fns';
import { AccountInfo } from '@azure/msal-browser';

/* Checks whether the token of the signed in account is expired. */
function isExpired(accountInfo: AccountInfo) {
  const expiration: number = (accountInfo.idTokenClaims as any).exp;
  const expiryDate = expiration ? new Date(expiration * 1000) : new Date(0);

  return !isAfter(expiryDate, new Date());
}

export { isExpired };
