import { useCallback, useMemo } from 'react';
import { useToast } from '@shared/hooks/useToast';
import { useLocalStorage } from '@entities/User';
import { localStorageVars } from '@shared/const/localStorage';
import { AppStatus } from '../model/types/App.types';
import { appState } from '../model/state/appState';

export const useChangeStatus = () => {
	const { set } = appState();
	const { error } = useToast();
	const { getStorage } = useLocalStorage();

	const handlers = useMemo(
		() => ({
			[AppStatus.DEFAULT]: (to: AppStatus) => {
				set({ status: to });
			},
			[AppStatus.FORM]: (to: AppStatus) => {
				const isVisitedBefore = getStorage(localStorageVars.LOGGED_IN);

				if (isVisitedBefore) {
					window.location.href = 'https://1zaim.com/BRC/1/';
				} else {
					set({ status: to });
				}
			},
		}),
		[getStorage, set]
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