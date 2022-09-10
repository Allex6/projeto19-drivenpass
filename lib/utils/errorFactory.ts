function errorFactory(type: string | number, messagetype: string){

    return {
        type,
        message
    }

};
    
export default errorFactory;