
import Dropdown from "react-bootstrap/dropdown"


export default function Dropdow(){

    return (
<>
        <Dropdown>

            <Dropdown.Toggle variant="success"  id="dropdown- Botton">
                 Button
            </Dropdown.Toggle>

            <Dropdown.menu>

                <Dropdown.item href="#/action-1">
                    Action
                    </Dropdown.item>

                <Dropdown.item href="#/action-2">
                    rollcamera
                    </Dropdown.item>

               <Dropdown.item href="#/action-1">
                capture
                </Dropdown.item>
                
                </Dropdown.menu>
                </Dropdown>
    
    </>
    )

}