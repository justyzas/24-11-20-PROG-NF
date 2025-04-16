export function generateUpdateSegment(obj)
{
    const fieldSegments = Object.keys(obj).map((key)=>{
        return `${key} = ?`;
    });
    const fieldsString = fieldSegments.join(", ");
    const fieldValuesArray = Object.values(obj);
    
    return [fieldsString, fieldValuesArray]
}