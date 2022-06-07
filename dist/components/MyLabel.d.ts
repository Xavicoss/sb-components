/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
     * Este es el tamano a mostrar en la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Este es la capitalizacion de la etiqueta
    */
    allCaps?: boolean;
    /**
     * Este es el color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
    */
    fontColor?: string;
    /**
      * Color de rellenado
    */
    backgrondColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgrondColor }: MyLabelProps) => JSX.Element;
