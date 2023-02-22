import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'Employees', path: '/', flAuth: false, flAdmin: false },
        { label: 'Add Employees', path: '/add', flAuth: true, flAdmin: true  },
        { label: 'Age Statistics', path: '/statistics/age',  flAuth: false, flAdmin: false, },
        { label: 'Salary Statistics', path: '/statistics/salary',  flAuth: false, flAdmin: false },
        { label: 'Login', path: '/login', flAuth: false, flAdmin: false },
        { label: 'Logout', path: '/logout', flAuth: false, flAdmin: false }
    ]
}