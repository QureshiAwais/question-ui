import { fnValidate } from "./Validation";
export const onChange=(eve,input)=>{
    const {value,name}=eve.target;
    const _input=[...input]
    const _inputObj=_input.find((obj)=>name===obj.name);
    _inputObj.value=value;
    if(_inputObj.required){
      fnValidate(_inputObj);
    }
    return _input;
};

export const fnValidateForm=(input)=>{
    const _input=[...input];
    const dataObj={}
    _input.forEach((obj)=>{
        dataObj[obj.name]=obj.value
      if(obj.required){
        fnValidate(obj);
      }
    })
    const isInValid=_input.some((obj)=>obj.errorMsg);
    return[isInValid,_input,dataObj]
}

export const fnClearForm=(input)=>{
  const _inp=[...input]
  _inp.forEach((obj)=>{
    obj.value=''
  })
}