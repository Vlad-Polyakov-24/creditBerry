import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AppStatus } from '../types/App.types';

interface IAppState {
	status: AppStatus;
	headerHeight: number;
	set: (newState: Partial<IAppState>) => void;
}

const appState = create<IAppState>()(
	devtools((set) => ({
		status: AppStatus.DEFAULT,
		headerHeight: 0,
		set: (newState) => set((state) => ({ ...state, ...newState })),
	})),
);

export { appState };
