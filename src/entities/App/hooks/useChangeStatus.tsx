import { useCallback, useMemo } from 'react';
import { useToast } from '@shared/hooks/useToast';
import { localStorageVars } from '@shared/const/localStorage';
import { AppStatus } from '../model/types/App.types';
import { appState } from '../model/state/appState';

export const useChangeStatus = () => {
	const { set } = appState();
	const { error } = useToast();

	const handlers = useMemo(
		() => ({
			[AppStatus.DEFAULT]: (to: AppStatus) => {
				set({ status: to });
			},
			[AppStatus.FORM]: (to: AppStatus) => {
				const isLoggedIn = localStorage.getItem(localStorageVars.LOGGED_IN);

				if (isLoggedIn) {
					alert('Already logged in');
				} else {
					set({ status: to });
				}
			},
		}),
		[set]
	);

	const change = useCallback(
		({ to }: { to: AppStatus }) => {
			const handler = handlers[to];

			if (!handler) {
				console.error(`Handler for status "${to}" is not defined`);
				error('Щось пішло не так!');
				return;
			}

			handler(to);
		},
		[error, handlers]
	);

	return { change };
};