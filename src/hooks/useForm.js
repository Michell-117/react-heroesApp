import { useState } from "react"


export const useForm = (formulario = {})=>{
    const [formState, setFormState] = useState(formulario)

    const actualizarFormulario = ({target})=>{
        // console.log(target);
        const {name,value}=target
        setFormState({
            ...formState,
            [name]: value
        })
        // console.log(formState);
    }

    const resetearFormulario=()=>{
        setFormState({...formulario})
    }

    return {
        ...formState,
        formState,
        actualizarFormulario,
        resetearFormulario
    }
}