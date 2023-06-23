type ValidationField = {
    isValid: boolean;
    reasons: string[];
};
type ReasonMap = {
    [reason: string]: boolean;
};
type ValidationMapProvider = () => {
    [field: string]: ReasonMap;
};
type ValidationState<T extends ValidationMapProvider> = {
    isValidating: boolean;
    isValid: boolean;
    fields: {
        [P in keyof ReturnType<T>]: ValidationField;
    };
};
type Validation<T extends ValidationMapProvider> = ValidationState<T> & {
    validate: () => boolean;
    getValidationResult: () => ValidationState<T>;
};
export declare const useValidation: <P extends ValidationMapProvider>(validationMapProvider: P) => Validation<P>;
export {};
