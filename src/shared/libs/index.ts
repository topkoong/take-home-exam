import { Data } from '../types'
import faker from 'faker'

export const createData = (
  contact: string,
  tel: string,
  company: string,
  updatedAt: string,
  action?: any,
): Data => ({ contact, tel, company, updatedAt, action })

export const createData2 = (
  contact: string,
  tel: string,
  company: string,
  updatedAt: string,
) => ({ contact, tel, company, updatedAt })

const d = faker.date.between('2021-02-01', '2021-10-05')

export const formattedDate = d.toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export const formattedTime = d.toLocaleTimeString('th-TH')

export const formattedDateTime = `${formattedDate} ${formattedTime} น.`

export const mockDateTime = `${faker.date
  .between('2021-02-01', '2021-12-25')
  .toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })} ${faker.date
  .between('2021-02-01', '2021-10-05')
  .toLocaleTimeString('th-TH')}`

export const reorder = (
  list: any[],
  startIndex: number,
  endIndex: number,
): any[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const setLocalStorage = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

export const getLocalStorage = (key: string, initialValue: any) => {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : initialValue
  } catch (e) {
    // if error, return initial value
    return initialValue
  }
}
