import './LinksDropdown.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { Popover, OverlayTrigger, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap/'
import { forwardRef, useEffect, useState } from 'react'
import LinkAPI from '../../utils/LinkAPI'
const LinksDropdown = () => {


    const [links, setLinks] = useState({
        url: [],
        addUrl: false,
        
        name: '',
        link: ''
        
    })
    const [missingInput, setMissingInput] = useState({
        missingName: false,
        missingLink: false
    })

    const handleInputChange = ({ target: { name, value } }) => {

        // Change the state of missing input dynamically on input change.
        if (name === 'name') {
            setMissingInput({ ...missingInput, missingName: false })
        }
        else if (name === 'link') {
            setMissingInput({ ...missingInput, missingLink: false })
            
        }

        setLinks({ ...links, [name]: value })

    }
    useEffect(()=>{
        LinkAPI.getLinks()
            .then(({ data }) => {
                setLinks({ ...links, url: data })
            })
    },[])

    
   
    const handleAddLink = () => {
        console.log('clicking add link')
        setLinks({ ...links, addUrl: true })
    }

    const handleAddNewLink=event=>{
        if(event){
            event.preventDefault()
        }
        if(links.name !='' && links.link != ''){


            let newLink = {
                 linkName :links.name,
                 link :links.link
                }
            
            let newLinks = links.url
            newLinks.push(newLink)
            setLinks({ ...links,url:newLinks, name: '', link: '', addUrl: false })
                
            LinkAPI.create(newLink)
            .then((res)=>{
                console.log('link created')
            })
            .catch(err=>console.log(err))




        }else{
            if(links.name = ' '){
                setMissingInput({...missingInput, missingName:true})
            }
            if (links.link = ' ') {
                setMissingInput({ ...missingInput, missinglink: true })
            }
        }
            
        
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
                                    aria-label="name"
                                    aria-describedby="name"
                                    name ='name'
                                    value={links.name}
                                    onChange={handleInputChange}
                                />
                                {(missingInput.missingName ) ? <p className="err mt-2">⚠️ Please enter a name for the link</p> : <></>}

                            </InputGroup>
                            <InputGroup className="mt-2">
                                <FormControl
                                    placeholder="Add Link"
                                    aria-label="link"
                                    aria-describedby="link"
                                    name='link'
                                    value = {links.link}
                                    onChange={handleInputChange}
                                />

                            </InputGroup>



                        </Col>
                        <Col className='col-3 m-0 '>
                            <Button className='links' onClick={handleAddNewLink}>+</Button>
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