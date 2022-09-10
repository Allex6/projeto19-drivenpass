export default function(error: { details: [] }){

    const result = error.details.map((item: { message: string }) => item.message);
    return result;
    
};