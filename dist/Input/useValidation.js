import { useRef } from 'react';
import { useForceUpdate } from '../hooks';
export const useValidation = (validationMapProvider) => {
    const forceUpdate = useForceUpdate();
    const state = useRef(null);
    // TODO useCallback?
    const validateInternal = (activate) => {
        const validationMap = validationMapProvider();
        const fields = {};
        let isValidating = state.current?.isValidating || activate;
        let allValid = true;
        Object.entries(validationMap).forEach(([key, reasonMap]) => {
            const reasons = [];
            let fieldIsValid = true;
            Object.entries(reasonMap).forEach(([reason, active]) => {
                if (active) {
                    reasons.push(reason);
                    fieldIsValid = false;
                }
            });
            fields[key] = {
                isValid: fieldIsValid || !isValidating,
                reasons,
            };
            allValid = (allValid && fieldIsValid) || !isValidating;
        });
        if (allValid) {
            isValidating = false;
        }
        state.current = {
            isValid: allValid,
            isValidating,
            fields
        };
    };
    if (!state.current) {
        validateInternal(false);
    }
    if (state.current.isValidating) {
        validateInternal(false);
    }
    const validate = () => {
        validateInternal(true);
        forceUpdate();
        return state.current.isValid;
    };
    const getValidationResult = () => {
        return { ...state.current };
    };
    return {
        ...state.current,
        validate,
        getValidationResult,
    };
};
