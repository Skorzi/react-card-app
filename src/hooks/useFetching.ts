import { useState } from "react";

// Данная функция нужна для обработки ошибок
// А также для вызова анимации загрузки

export const useFetching = (callback: any) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('')

    const fetching = async () => {
        try{
            setLoading(true)
            await callback()
        } catch(e: any){
            setError(e.message);
        } finally {
            setLoading(false)
        }
    }

    return [fetching, isLoading, error] as const
}