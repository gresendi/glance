import './LinksDropdown.css'
import Dropdown from 'react-bootstrap/Dropdown'


const LinksDropdown = () => {



    return (
        <> 
            <div className="linkContainer">
                 <Dropdown className="d-inline mx-2 links" autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Links
    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="https://www.google.com/">Google</Dropdown.Item>
                        <Dropdown.Item href="https://react-bootstrap.netlify.app/components/alerts/">React Bootstrap</Dropdown.Item>
                        <Dropdown.Item href="#">+ Link</Dropdown.Item>
                    </Dropdown.Menu>
    </Dropdown>

        </div>
        </>
    )
}

export default LinksDropdown