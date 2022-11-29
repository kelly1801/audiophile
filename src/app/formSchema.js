import * as yup from 'yup';

export const checkoutEschema = yup.object().shape({

    email: yup.string().email('Invalid email').required('email required'),
    name: yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phoneNumber: yup.number('just numbers allowed').required('required'),
    address:  yup.string().min('too short').required('required'),
    zipCode: yup.number().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    emoneyNumber: yup.number().required(),
    emoneyPin: yup.string().required(),
    emonyMethod: yup.boolean()
})


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
    maximumSignificantDigits: 1,
})