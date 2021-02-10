// import { createContext } from 'react';
// export const { Provider, Consumer } = createContext({
//     Last_name: '',
//     First_name: '',
//     Phone: '',
//     Company: '',
//     Department: '',
//     Job_title: '',
//     Email: '',
//     Company_size: '',
//     Email_verification: false,
//     Phone_verification: false,
//     data: '',
//     swipeItem: [],
//     videoIdx: 0,
//     videoItem: [],
//     changeVideo: ()=>{},
//     onLastName: ()=>{},
//     onFirstName: ()=>{},
//     onPhone: ()=>{},
//     onCompany: ()=>{},
//     onDept: ()=>{},
//     onJob: ()=>{},
//     onEmail: ()=>{},
//     onScale: ()=>{},
//     valid: ()=>{},
//     download: ()=>{},
//     ChangeEmail: ()=>{},
//     ChangePhone: ()=>{},
// })
import { createContext } from 'react';
const context = createContext();
export const { Provider, Consumer } = context;
export default context;
