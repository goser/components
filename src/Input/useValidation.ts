import {useRef} from 'react';
import {useForceUpdate} from '../hooks';

type ValidationField = {
    isValid: boolean;
    reasons: string[];
};

type ValidationFieldMap<T extends ValidationMapProvider> = {
    [P in keyof ReturnType<T>]: ValidationField;
};

type ReasonMap = {[reason: string]: boolean;};

type ValidationMapProvider = () => {[field: string]: ReasonMap;};

type ValidationState<T extends ValidationMapProvider> = {
    isValidating: boolean;
    isValid: boolean;
    fields: {[P in keyof ReturnType<T>]: ValidationField;};
};

type Validation<T extends ValidationMapProvider> = ValidationState<T> & {
    validate: () => boolean;
};

export const useValidation = <P extends ValidationMapProvider>(validationMapProvider: P): Validation<P> => {
    const forceUpdate = useForceUpdate();
    const state = useRef<ValidationState<P>>();

    // TODO useCallback?

    const validateInternal = (activate: boolean) => {
        const validationMap = validationMapProvider();
        const fields: ValidationFieldMap<P> = {} as any;
        const isValidating = state.current?.isValidating || activate;
        let allValid = true;
        Object.entries(validationMap).forEach(([key, reasonMap]) => {
            const reasons: string[] = [];
            let isValid = true;
            Object.entries(reasonMap).forEach(([reason, active]) => {
                if (active) {
                    reasons.push(reason);
                    isValid = false;
                }
            });
            (fields as any)[key] = {
                isValid: isValid || !isValidating,
                reasons,
            };
            allValid = (allValid && isValid) || !isValidating;
        });
        state.current = {
            isValid: allValid,
            isValidating,
            fields
        };
    };

    if (!state.current) {
        console.log("initial validate");
        validateInternal(false);
    }

    if (state.current!.isValidating) {
        console.log("autovalidate ");
        validateInternal(false);
    }

    const validate = () => {
        validateInternal(true);
        forceUpdate();
        return state.current!.isValid;
    };

    return {
        ...state.current!,
        validate
    };
};