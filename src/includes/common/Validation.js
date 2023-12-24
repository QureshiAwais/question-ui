 const validationregex={
    Min5Chars:{
        regex:/.{5,}/,
        errorMsg:"Should min 5 chars"
    },
    Exaxt10Digits:{
        regex:/^[0-9]{10}$/,
        errorMsg:"Exactly 10 digits"
    },
    Alphabets:{
        regex:/^[a-zA-z]+$/,
        errorMsg:"Alphabates only"
    },
    Email:{
        regex:"/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,5}\.[a-z]{2,3}$/",
        errorMsg:"Should be in the Email formate"
    },
    OnlyDigits:{
        regex:/^[0-9]+$/,
        errorMsg:"Enter Digits only"
    },
    SpecialCharNotAllowed:{
        regex:/^[a-zA-Z0-9]+$/,
        errorMsg:"Special Chars not Allowed"
    },
    ShouldNotAllowSpaces:{
        regex:/^\S*$/,
        errorMsg:"Should not allow spaces"
    },
    Required:{
        regex:/./,
        errorMsg:"Please Enter value"
    },
    Password:{
        regex:/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
        errorMsg:"Min 8 chars (1U,1L,1D,1Sp)"
    }
};

export const fnValidate=(inputObj)=>{
    inputObj.errorMsg="";
    const {value,criteria}=inputObj;
    for(let i=0;i<criteria?.length;i++)
    {
        const {regex,errorMsg}=validationregex[criteria[i]];
        if(!regex.test(value||""))
        {
            inputObj.errorMsg=errorMsg;
            break;
        }
    }
};
