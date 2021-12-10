import './LinksDropdown.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Overlay from 'react-bootstrap/Overlay'
import {Popover, OverlayTrigger, Button, InputGroup, FormControl, Row, Col} from 'react-bootstrap/'
import {forwardRef, useEffect, useState} from 'react'

const LinksDropdown = () => {


    const [links, setLinks]= useState({
        url:[
            {
                linkName: 'Google',
                link: "https://www.google.com/"
            },
            {
                linkName: 'React Booststrap',
                link: "https://react-bootstrap.netlify.app/components/alerts/"
            }
        
        ]
    })

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
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>

                {
                    links.url.map(link=>(
                        <Dropdown.Item href={link.link}>{link.linkName}</Dropdown.Item>
                    ))

                }
               
                
                
                    <Row>
                        <Col className ='col-9'>
                        <InputGroup className="mt-2">
                            <FormControl
                                placeholder="Add Link"
                                aria-label="link"
                                aria-describedby="link"
                                />
                        
                        </InputGroup>
                                </Col>
                    <Col className= 'col-1 mt-2'>
                    <Button variant="success" className='links'>+</Button>
                                </Col>
                    </Row>
                
            </Popover.Body>
        </Popover>
    );


    return (
        <> 
            <div className="linkContainer">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success" className='links'>Links</Button>
                </OverlayTrigger>
                 <Dropdown className="d-inline mx-2 links" autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Links
    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        
                       
                    </Dropdown.Menu>
    </Dropdown>

        </div>
        </>
    )
}

export default LinksDropdown