interface Carro {
    color: 'red' | 'yellow';
    modelo: number;
    placa: string;
    plazas: number;
    avanzar: () => void;
    frenar: (marca: string) => void;
}

export const Desestructuracion = () => {

    const carro: Carro = {
        color: 'red',
        modelo: 2020,
        placa: 'YBP304',
        plazas: 4,
        avanzar: () => console.log('Avanza'),
        frenar: (marca) => console.log('Frena, ', marca)
    };

    const { avanzar, color } = carro;

    console.log(`Color: ${color}`);
    avanzar();
    carro.frenar('Ferrari');

  return (
    <div>Desestructuracion</div>
  )
}
