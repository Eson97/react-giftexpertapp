import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('test on hook useFetchGifs', () => {

    test('should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('cats'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    })

    test('should return an array of imgs and loading false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('cats'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(5);
        expect(loading).toBeFalsy();

    })


})
