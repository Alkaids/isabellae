import { useState, useMemo } from 'react'

type BoundMethods<T> = { [K in keyof T]: (...args: any[]) => void }

const useMethod = <TV, TM>(initialValue: TV, methods: TM): [TV, BoundMethods<TM>] => {
  const [value, setValue] = useState(initialValue)
  const boundMethods = useMemo(
    () =>
      Object.entries(methods).reduce((bMethods, [name, fn]) => {
        const method = (...args) => {
          setValue(val => fn(val, ...args))
        }
        bMethods[name] = method
        return bMethods
      }, {} as BoundMethods<TM>),
    [methods]
  )
  return [value, boundMethods]
}

export { useMethod }
export default useMethod
