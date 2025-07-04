import {type PropsWithChildren, createContext, useContext, useEffect, useState} from 'react'
import {useLocale} from './useLocale'

const DEFAULT = {}

const CONTEXT = createContext(DEFAULT)

export const useWordingContext = () => useContext(CONTEXT)

type WordingResolver = (locale: string) => Promise<any>

type Props = PropsWithChildren & {
    wordingResolver: WordingResolver
}

export function WordingContextProvider({children, wordingResolver}: Props) {
    const locale = useLocale()
    const [value, setValue] = useState<any>(DEFAULT)
    useEffect(() => {
        let resultHandler = (result: any) => setValue(result.default)
        let errorHandler = (reason: any) => {
            console.log(`Failed to load wordings for locale ${locale}. Reason:`, reason)
            setValue(DEFAULT)
        }
        wordingResolver(locale)
            .then(resultHandler)
            .catch(errorHandler)
        return () => {
            resultHandler = () => { }
            errorHandler = () => { }
        }
    }, [locale, wordingResolver])
    const Provider = CONTEXT.Provider
    return <Provider value={value}>
        {value !== DEFAULT && children}
    </Provider>
}