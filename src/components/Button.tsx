import {useState} from 'react';

type ButtonProps = {
    title: string;
    onClick:() => void;
    disabled?: boolean;
    onChange?: (id:number) => void;
    objArray?: objArray[];
    setState?:React.Dispatch<React.SetStateAction<string>>;
}
interface objArray{
    id:string;
    title:string;
 }




export function Button({title, onClick, disabled, setState}:ButtonProps): JSX.Element{
    console.log(title);
    const [counter, setCounter] = useState<number>(0);
    const string = disabled ? "disabled": title +"number of clicks:" + counter;
    
    function handleClick(){ 
        onClick();
        setCounter(counter + 1); 
        if(setState){
            setState("")
        } 
        
    }
 return <button disabled={disabled} onClick={handleClick}>{string}</button>

}    


