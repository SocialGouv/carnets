import { useFormikContext } from "formik"
import { debounce } from "lodash"
import React, { useCallback, useEffect, useRef } from "react"

function useDebounce(callback, delay) {
  const memoizedCallback = useCallback(callback, [callback])
  const debouncedFn = useRef(debounce(memoizedCallback, delay))

  useEffect(() => {
    debouncedFn.current = debounce(memoizedCallback, delay)
  }, [memoizedCallback, debouncedFn, delay])

  return debouncedFn.current
}

const Autosave = ({ debounceMs = 500 }) => {
  const formik = useFormikContext()
  const { dirty, isValid, isSubmitting, values } = formik
  const submit = useDebounce(formik.submitForm, debounceMs)
  const submitCallback = useCallback(submit, [submit])

  useEffect(() => {
    if (isValid && dirty && !isSubmitting) {
      submitCallback()
    }
  }, [dirty, isValid, isSubmitting, submitCallback, values])

  // return <p className="text-center text-success">toto</p>
  return <></>
}

export default Autosave
