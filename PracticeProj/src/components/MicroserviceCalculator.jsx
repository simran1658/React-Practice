import {useState} from "react"

function MicroserviceCalculator(){
    const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const[operation,setOperation]=useState("add");
    const[result,setResult]=useStet(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    const handleSubmit=async(e)=>{
        e.preventDeafult();
        setLoading(true);
        setError(null);
        setResult(null);

        try{
            let data;
             if(operation==="add"){
                data={result:factorial(Number(num1)) };
             }else if(operation==="prime"){
                data={result:isPrime}
             }

        }catch(err){

        }finally{
            setLoading(false);
        };
    };
        return(
            <div>
                <h2>Calculator</h2>
            </div>
        );
}
export default MicroserviceCalculator;



