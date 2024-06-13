import { useId } from 'react';

export default  function UserId(){
const id = useId()

    return (

       <form>
        <label htmlFor={ id + '-firtName'}> FirstName: </label>
        <input id ={id + '-firstName'} type ="text" />


        <labe2 htmlFor={ id + '-LastName'}> LastName: </labe2>
       <input id ={id + '-LasttName'} type ="text" />
 
        
        </form>
    );
}
