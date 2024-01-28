import { useEffect, useState } from "react";

interface objetoAlumno {
    name: string,
    age: number,
    nota: number
}
export const Alumno = () => {
    const [alumnos, setAlumnos] = useState<objetoAlumno[]>([
        {
            name: 'Viviana',
            age: 19,
            nota: 10,
        },
        {
            name: 'Wendy',
            age: 20,
            nota: 8,
        },
        {
            name: 'Gerson',
            age: 18,
            nota: 9,
        },
    ]);

    const [promedioCalificaciones, setPromedioCalificaciones] = useState<number | null>(null);

    useEffect(() => {
        const calificaciones = alumnos.map((alumno) => alumno.nota);
        const sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
        const promedio = calificaciones.length > 0 ? sumaCalificaciones / calificaciones.length : null;

        setPromedioCalificaciones(promedio);
    }, []);

    return (
        <div>
            <h3 className="text-center">ALUMNOS</h3>
            <ul className="text-center">
                {alumnos.map((alumno) => (
                    <li>
                        {alumno.name} - {alumno.nota}
                    </li>
                ))}
            </ul>
            {promedioCalificaciones !== null && (
                <p className="text-center">Promedio: {promedioCalificaciones.toFixed(2)}</p>
            )}
        </div>
    )
}
