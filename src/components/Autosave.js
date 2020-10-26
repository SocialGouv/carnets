import { useFormikContext } from "formik"
import { debounce } from "lodash"
import React, { useCallback, useEffect, useRef, useState } from "react"

function useDebounce(callback, delay) {
  // Memoizing the callback because if it's an arrow function
  // it would be different on each render
  const memoizedCallback = useCallback(callback, [callback])
  const debouncedFn = useRef(debounce(memoizedCallback, delay))

  useEffect(() => {
    debouncedFn.current = debounce(memoizedCallback, delay)
  }, [memoizedCallback, debouncedFn, delay])

  return debouncedFn.current
}

// function useDebounce(callback, delay) {
//   const debouncedFn = useCallback(
//     debounce((...args) => callback(...args), delay),
//     [delay] // will recreate if delay changes
//   )
//   return debouncedFn
// }

const Autosave = ({ debounceMs = 500 }) => {
  console.log("AUTOSAVE::create")
  const formik = useFormikContext()
  const [isSaved, setIsSaved] = useState()
  const [isSaving, setIsSaving] = useState()
  const { dirty, isValid, isSubmitting } = formik
  // const debouncedSubmit = useCallback(
  //   debounce(() => {
  //     return formik.submitForm().then(() => setIsSaved(true))
  //   }, debounceMs),
  //   [formik.submitForm, debounceMs]
  // )

  // useEffect(() => debouncedSubmit, [debouncedSubmit, formik.values])

  const submit = useDebounce(async () => {
    console.log("AUTOSAVE:submit start")
    const res = await formik.submitForm()
    console.log("AUTOSAVE:submit end")
    return res
  }, debounceMs)

  // useEffect(() => {
  //   console.log("Autosave useEffect", isValid, dirty, isSubmitting)
  //   // const submit = debounce(async () => {
  //   //   console.log("debounce submit")
  //   //   return await formik.submitForm()
  //   // }, 5000)
  //   if (isValid && dirty && !isSubmitting) {
  //     submit()
  //   }
  // }, [dirty, isValid, isSubmitting, submit])

  useEffect(() => {
    if (isSaving) {
      console.log("AUTOSAVE::saving start", isSaving)
      const doit = async () => {
        await submit()
        console.log("AUTOSAVE::saving end", isSaving)
      }
      doit()
      setIsSaving(false)
    }
  }, [isSaving, submit])

  useEffect(() => {
    console.log("AUTOSAVE::render")
  }, [])

  useEffect(() => {
    console.log("AUTOSAVE::change", isValid, dirty, isSubmitting)
    // const doit = async () => await submit()
    if (isValid && dirty && !isSubmitting) {
      // doit()
      setIsSaving(true)
    }
    // console.log("isValid:", isValid)
    // console.log("dirty:", dirty)
    // console.log("isSubmitting:", isSubmitting)
  }, [dirty, isValid, isSubmitting])

  return (
    <p className="text-center text-success">
      {isSaving ? "Saving..." : isSaved ? "Your changes saved." : null}
    </p>
  )
}

export default Autosave
