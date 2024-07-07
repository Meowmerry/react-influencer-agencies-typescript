import create from 'zustand';

interface CounterProps {
    count: number;
    increase: () => void;
    decrease: () => void;
}

export const useCounter = create<CounterProps>((set) => ({
    count: 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
}));
