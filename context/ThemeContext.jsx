// 'use client'
// import { createContext} from "react";
// export default ThemeContext=createContext();
// const getThemeLocalStorage=()=>{
//     if (typeof window!=="undefined") {
//         return localStorage.getItem("theme")||"light"
//     }
// }
// export const ThemeContextProvider=({children})=>{
//     // const[theme,setTheme]=useState(()=>getThemeLocalStorage())
//     // const toggleTheme=()=>{
//     //     setTheme((theme)=>{
//     //         if (theme==="light") {
//     //             localStorage.setItem("theme", "dark");
//     //             return "dark";
//     //         } else {
//     //             localStorage.setItem("theme", "light");
//     //             return "light";
//     //         }
//     //     });
//     // }

//     return <ThemeContext.Provider value={{}}>
//         {children}
//     </ThemeContext.Provider>;
// };