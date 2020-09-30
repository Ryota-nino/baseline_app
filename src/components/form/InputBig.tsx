import React,{useEffect} from 'react';

interface Props {
    type: string;
    labelTxt: string;
    isRequired: boolean;
    placeholderTxt: string;
    isError: any;
    isIcon: boolean;
    iconUrl?: string;
    className?: string;
    value?: string;
}

const InsertBig:React.FC<Props> = props => {
    let txt:string;
    const hasErrorCheck = (()=> {
        Object.values(props.isError).forEach((value:any)=> {
            if(value.isEmpty1) {
                txt = '項目を入力してください1';
            } else if(value.isEmpty2) {
                txt = '項目を入力してください2';
            } else if(value.isEmpty3) {
                txt = '項目を入力してください3';
            }
        });
        return <p>{txt}</p> ;
    });
    
    return (
        <label className={`input--big ${props.className}`}>
            <div className="input--big__wrap">
                {props.isIcon && <img src={props.iconUrl} alt="" />}
                <span className="input--big__label">{props.labelTxt}</span>{props.isRequired && <span className="cAttention">*</span>}
            </div>
            <input 
                type={props.type} 
                required={props.isRequired} 
                placeholder={props.placeholderTxt}
                value={props.value}
            />
            {hasErrorCheck()}
        </label>
    );
}

export default InsertBig;
