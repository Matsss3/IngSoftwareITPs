import { useState } from "react";

export const useForm = ( objectoInicial = {} ) => {
    const [formulario, setFormulario] = useState(objectoInicial);

    const serializarFormulario = (formulario) => {
        const formData = new FormData(formulario);

        const objectoCompleto = {};

        for (let [name, value] of formData) {
            objectoCompleto[name] = value;
        }

        return objectoCompleto;
    }

    const enviado = (e) => {
        e.preventDefault();
        let curso = serializarFormulario(e.target);
        setFormulario(curso);
    }

    const cambiado = ({target}) => {
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    return {
        formulario,
        enviado,
        cambiado
    }
}
