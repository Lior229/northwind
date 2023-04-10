export default {
    name:{
        require:{value:true,message:"Missing name"},
        minLength:{value:3,message:"Name too short"},
        maxLength:{value:30,message:"Name too long"}
    },
    stock:{
        require:{value:true,message:"Missing stock"},
        min:{value:0,message:"stock cant be negative"},
        max:{value:100,message:"stock cant exceed 100"}
    },
    price:{
        require:{value:true,message:"price name"},
        min:{value:0,message:"price cant be negative"},
        max:{value:100,message:"price cant exceed 100"}
    }
}

// typing and enum exsmpale

// type Validation = {
//     require: {[x: string]: {}},
//     minLength?: {[x: string]: {}},
//     maxLength?: {[x: string]: {}},
//     min?: {[x: string]: {}},
//     max?: {[x: string]: {}}
//  }
 
//  const validation: Record<string, Validation> = 

// export default validation;

// export const getValidationByFieldName = (fieldName: string) => {
//     return validation[fieldName];
// }