import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IAppState {
	headerHeight: number;
	set: (newState: Partial<IAppState>) => void;
}

const appState = create<IAppState>()(
	devtools((set) => ({
		headerHeight: 0,
		set: (newState) => set((state) => ({ ...state, ...newState })),
	})),
);

export { appState };
