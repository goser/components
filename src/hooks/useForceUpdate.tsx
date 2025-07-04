import {useCallback, useState} from 'react'

/**
 * Returns a function that triggers component update.
 */
export function useForceUpdate() {
    const [, dispatch] = useState<{}>(Object.create(null))

    return useCallback(
        () => {
            dispatch(Object.create(null))
        },
        [dispatch],
    )
}
