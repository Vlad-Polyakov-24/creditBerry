import { useCallback } from 'react';
import Cookies from 'js-cookie';
import { getDomain } from '@shared/lib/getDomain';

type CookieOptions = {
	domain?: string;
	expires?: number | Date;
};

export const useCookies = () => {
	const setCookie = useCallback(
		(key: string, value: string, options: CookieOptions = {}) => {
			Cookies.set(key, value, {
				expires: options.expires ?? 365 * 10,
				domain: options.domain ?? getDomain(),
			});
		},
		[]
	);

	const getCookie = useCallback(
		(key: string): string | undefined => {
			return Cookies.get(key);
		},
		[]
	);

	const removeCookie = useCallback(
		(key: string, options: { path?: string; domain?: string } = {}) => {
			Cookies.remove(key, {
				domain: options.domain ?? getDomain(),
			});
		},
		[]
	);

	return { setCookie, getCookie, removeCookie };
};