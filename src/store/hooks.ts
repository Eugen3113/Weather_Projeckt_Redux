// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// Этот файл служит центральным узлом для повторного экспорта предварительно типизированных хуков Redux.

// These imports are restricted elsewhere to ensure consistent
// Этот импорт ограничен в других местах для обеспечения согласованности

// usage of typed hooks throughout the application.
// использование типизированных хуков во всем приложении.

// We disable the ESLint rule here because this is the designated place
// Мы отключаем здесь правило ESLint, потому что это назначенное место

// for importing and re-exporting the typed versions of hooks.
// для импорта и реэкспорта типизированных версий хуков.
/* eslint-disable no-restricted-imports */
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Используйте во всем приложении вместо простых `useDispatch` и `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
