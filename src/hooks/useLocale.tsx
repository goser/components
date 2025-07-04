import {type PropsWithChildren, createContext, useContext} from 'react'

const DEFAULT_VALUE = 'en'

const CONTEXT = createContext(DEFAULT_VALUE)

export const useLocale = () => useContext(CONTEXT)

type Props = {
    locale: string
} & PropsWithChildren

export function LocaleContextProvider({children, locale}: Props) {
    const Provider = CONTEXT.Provider
    return <Provider value={locale}>
        {children}
    </Provider>
}
