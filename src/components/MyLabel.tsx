import { formatDiagnosticsWithColorAndContext } from 'typescript';
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

export const MyLabel = ( { 
    label = 'No Label', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgrondColor = 'trasnparent'
}: MyLabelProps ) => {
  return (
    <span 
      className={ `label ${ size } text-${color}`}
      style={{ color: fontColor, backgroundColor: backgrondColor } 
      }>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;
