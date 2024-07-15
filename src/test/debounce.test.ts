import { debounce } from "../app/debounce";

describe ("Debounce testing", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test("Should work properly", () => {
        const callback = jest.fn();
        const debounced = debounce(callback, 500);
        debounced();
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(100);
        debounced();
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(499);
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);
        expect(callback).toHaveBeenCalledTimes(1);

        debounced();
        jest.advanceTimersByTime(500);
        expect(callback).toHaveBeenCalledTimes(2);
    });

    test("Should be called only twice", () => {
        const callback = jest.fn();
        const debounced = debounce(callback, 500);

        debounced();
        debounced();
        debounced();
        jest.advanceTimersByTime(500);
        debounced();
        debounced();
        jest.advanceTimersByTime(500);

        expect(callback).toHaveBeenCalledTimes(2);
    });
});