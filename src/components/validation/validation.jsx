import * as yup from 'yup'

export const schema=yup.object().shape({
    location: yup.string().min(0,"location is invalid").required('Required')
})