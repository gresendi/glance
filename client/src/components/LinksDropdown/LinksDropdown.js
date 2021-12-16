import './LinksDropdown.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { forwardRef, useEffect, useState } from 'react'
import LinkAPI from '../../utils/LinkAPI'


import { Popover, OverlayTrigger, Button, InputGroup, FormControl, Row, Col, DropdownButton, ButtonToolbar } from 'react-bootstrap/'
import TaskAPI from '../../utils/TaskAPI'
import ButtonGroup from "react-bootstrap/ButtonGroup";


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
        renderLinks()
    },[])

    const renderLinks =() =>{
        LinkAPI.getLinks()
            .then(({ data }) => {
                setLinks({ ...links, url: data })
            })

        
    }
   
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
   
    const handleDelete = (id) => {
        console.log(id)
        LinkAPI.delete(id)
            .then(() => {
                renderLinks()
            })
    }


    const popover = (
        <Popover style={{ backgroundColor: 'white', color: "black" }} id="popover-basic" className='links '>
            {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
            <Popover.Body>

                {
                    links.url.map(link => (
                        <Row >

                            <Col >
                                <Dropdown.Item href={link.link} className=''><span className="taskBreak" >{link.linkName}</span></Dropdown.Item>
                            
                            </Col>
                            <Col  >
                                <OverlayTrigger
                                    rootClose trigger="click" placement="left" overlay={<Popover id="popover-basic">
                                        <Popover.Header as="h3">action</Popover.Header>
                                        <Popover.Body >

                                            {/* <Dropdown.Header>Dropdown header</Dropdown.Header> */}
                                            <Dropdown.Item name='delete' onClick={() => { handleDelete(link._id) }}>Delete</Dropdown.Item>
                                            {/* <Dropdown.Item name='inbox' onClick={handleChangePopover}>Inbox</Dropdown.Item> */}
                                           

                                        </Popover.Body>
                                    </Popover>}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                    </svg>
                                </OverlayTrigger>
                            </Col>
                        
                </Row>
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