import { curryN, identity, lensProp, mergeAll } from "ramda"
import { Success } from "data.validation"
import { validate, isRequired, emailFormat } from "Utils"

const Validate = Success(curryN(2, identity))

const dateLense = lensProp("shortDate")
const startTimeLense = lensProp("startTime")
const endTimeLense = lensProp("endTime")
const locationLense = lensProp("location")
const latLongLense = lensProp("latlong")
const titleLense = lensProp("title")

const REQUIRED_FIELD_MSG = (field) => `${field} is required`
const INVALID_END_DATE_MSG = "Start time must be before end time"

const isChronological = (startTime) => (endTime) => {
  console.log("start", startTime)
  console.log("end".endTime)
  return true
}

const validateDate = (data) =>
  Success(data).apLeft(
    validate(isRequired, dateLense, FIELD_REQUIRED_MSG("Date"), data)
  )

const validateStartTime = (data) =>
  Success(data).apLeft(
    validate(isRequired, startTimeLense, FIELD_REQUIRED_MSG("Start Time"), data)
  )

const validateEndTime = (data) =>
  Success(data)
    .apLeft(
      validate(isRequired, endTimeLense, FIELD_REQUIRED_MSG("End Time"), data)
    )
    .apLeft(
      validate(
        isChronological(data.startTime),
        endTimeLense,
        INVALID_END_DATE_MSG,
        data
      )
    )

const validateAddress = (data) =>
  Success(data).apLeft(
    validate(isRequired, locationLense, FIELD_REQUIRED_MSG("Location"), data)
  )

const validateTitle = (data) =>
  Success(data).apLeft(
    validate(isRequired, titleLense, FIELD_REQUIRED_MSG("Title"), data)
  )

export const validateTask = (data) =>
  Validate.ap(validateDate(data))
    .ap(validateStartTime(data))
    .ap(validateEndTime(data))
    .ap(validateAddress(data))
    .ap(validateTitle(data))
    .failureMap(mergeAll)
    .toTask()
