import React, { useState } from 'react';
import './FormCampa.css';

function FormCampa() {
    const [isAllergic, setIsAllergic] = useState(false);
    const [isMedicado, setIsMedicado] = useState(false);

    const handleAllergyChange = (event) => {
        setIsAllergic(event.target.value === "Si");
    };
    const handleMedicadoChange = (event) => {
        setIsMedicado(event.target.value === "Si");
    };

    return (
        <div className='formularioCampa'>
            <form action=''>
            <img src='public\Logo Oficial CitaMonte.png' width="100"/>
                <h3>Campamento 2025</h3>
               
                <span>¡Te esperamos para disfrutar junto a Dios un verano inolvidable!</span>
           
                <input type='text' placeholder='Nombre Completo' />
                <input type='email' placeholder='example@example.com' />
                <input type='number' placeholder='DNI' />
                <input type="date" placeholder='DD/MM/AAAA' />
                <select name='selectCert' className='select-cert' onChange={handleAllergyChange}>
                    <option>¿Es alérgico?</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
                {isAllergic && (
                    <input type='text' placeholder='A qué es alérgico/a?' />
                )}
                <select name='selectCert' className='select-cert' onChange={handleMedicadoChange}>
                    <option>¿Está medicado/a?</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
                {isMedicado && (
                    <input type='text' placeholder='¿Que medicamento?' />
                )}
                <input type='text' placeholder='Teléfono de contacto' />
                <input type='text' placeholder='Nombre - Responsable' />
                <select name='selectCert' className='select-cert'>
                    <option>Vínculo del responsable</option>
                    <option value="Madre">Madre</option>
                    <option value="Padre">Padre</option>
                    <option value="Tutor">Tutor</option>
                </select>
            </form>
        </div>
    );
}

export default FormCampa;
