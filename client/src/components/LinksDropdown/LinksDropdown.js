import './LinksDropdown.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Overlay from 'react-bootstrap/Overlay'
import { Popover, OverlayTrigger, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap/'
import { forwardRef, useEffect, useState } from 'react'

const LinksDropdown = () => {


    const [links, setLinks] = useState({
        url: [
            {
                linkName: 'Google',
                link: "https://www.google.com/"
            },
            {
                linkName: 'React Booststrap',
                link: "https://react-bootstrap.netlify.app/components/alerts/"
            }

        ],
        addUrl: false,
        newLink:{
            name: '',
            link: ''
        }
    })
    const handleAddLink = () => {
        console.log('clicking add link')
        setLinks({ ...links, addUrl: true })
    }

    const UpdatingPopover = forwardRef(
        ({ popper, children, show: _, ...props }, ref) => {
            useEffect(() => {
                console.log('updating!');
                popper.scheduleUpdate();
            }, [children, popper]);

            return (
                <Popover ref={ref} body {...props}>
                    {children}
                </Popover>
            );
        },
    );
    const popover = (
        <Popover style={{ backgroundColor: 'white', color: "black" }} id="popover-basic" className='links '>
            {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
            <Popover.Body>

                {
                    links.url.map(link => (
                        <Dropdown.Item href={link.link} className=''>{link.linkName}</Dropdown.Item>
                    ))

                }
                {
                    links.addUrl ? <Row>
                        <Col className='col-9'>

                            <InputGroup className="mt-2">
                                <FormControl
                                    placeholder="Add Link Name"
                                    aria-label="link"
                                    aria-describedby="link"
                                />

                            </InputGroup>
                            <InputGroup className="mt-2">
                                <FormControl
                                    placeholder="Add Link"
                                    aria-label="link"
                                    aria-describedby="link"
                                />

                            </InputGroup>



                        </Col>
                        <Col className='col-3 m-0 '>
                            <Button  className ='links'>+</Button>
                        </Col>

                    </Row> : <Button  className=' links' onClick={() => handleAddLink()}>+</Button>
                }





            </Popover.Body>
        </Popover>
    );


    return (
        <>
            <div className="linkContainer">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button  className=' linkButton'>Links</Button>
                </OverlayTrigger>
                {/* <Dropdown className="d-inline mx-2 links" autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Links
    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        
                       
                    </Dropdown.Menu>
    </Dropdown> */}

            </div>
        </>
    )
}

export default LinksDropdown