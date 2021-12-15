import Dropdown from 'react-bootstrap/Dropdown'
import { Popover, OverlayTrigger, Button, InputGroup, FormControl, Row, Col, DropdownButton } from 'react-bootstrap/'
import { forwardRef, useEffect, useState } from 'react'
import TaskAPI from '../../utils/TaskAPI'
import ButtonGroup from "react-bootstrap/ButtonGroup";


const ToDo = () => {

  const [tasks, setTasks] = useState({
    tasks: [],
    task: '',
    addTask: false,
    inbox: false,
    today: true,
    done: false,
    location: 'Today'
  })

  const [missingInput, setMissingInput] = useState({
    missingTask: false,
  })

  const handleInputChange = ({ target: { name, value } }) => {



    setTasks({ ...tasks, [name]: value })

  }

  useEffect(() => {
    renderTasks()
  }, [])


  const renderTasks = ()=>{
    TaskAPI.getTasks()
      .then(({ data }) => {
        console.log(data)
        setTasks({ ...tasks, tasks: data })
      })
  }


  const handleAddLink = () => {
    console.log('clicking add link')
    setTasks({ ...tasks, addTask: true })
  }

  const handleAddNewLink = event => {
    if (event) {
      event.preventDefault()
    }
    if (tasks.task !== '') {


      let newTask = {
        task: tasks.task,
        isDone: false,
        location: 'today'
      }

      let newTasks = tasks.tasks
      newTasks.push(newTask)
      setTasks({ ...tasks, tasks: newTasks, task: '', addTask: false })

      TaskAPI.create(newTask)
        .then((res) => {
          console.log('task created')
        })
        .catch(err => console.log(err))




    } else {
      if (tasks.task === '') {
        setMissingInput({ ...missingInput, missingTask: true })
      }

    }


  }
  const modifiers = {
    preventOverflow: {
      enabled: false,
    },
    flip: {
      enabled: false,
    },
  };

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
  const handleChangePopover = event => {
    if (event) {
      event.preventDefault()
    }
    switch (event.target.name) {
      case 'today':
        setTasks({ ...tasks, today: true, done: false, inbox: false, location: 'Today' })
        break
      case 'inbox':
        setTasks({ ...tasks, today: false, done: false, inbox: true, location: 'Inbox' })
        break
      case 'done':
        setTasks({ ...tasks, today: false, done: true, inbox: false, location: 'Done' })
        break
      default:
        break
    }


  }
  //get task, change task status and location, update task status,render tasks
  const handleDone= (id) =>{
    
    let task = ''
    TaskAPI.getTask(id)
    .then(({data})=>{
      task= data
      console.log(task._id)
      if(task.isDone===false){
        task.isDone = !task.isDone
        task.location='done'
        TaskAPI.update(id,task)
        renderTasks()
      }else{
        task.isDone = !task.isDone
        task.location = 'today'
        TaskAPI.update(id, task)
        renderTasks()
      }
    })
    

    
  }
  
  const popover = (
    <Popover
      style={{ backgroundColor: 'white', color: "black" }}
      id="popover-basic" className='links'
      modifiers={modifiers}>
      <Popover.Header as="div">
        <Row className='tasksHeader'>
          <Col>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="" className=' '>View</Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Header>Dropdown header</Dropdown.Header> */}
                <Dropdown.Item name='today' onClick={handleChangePopover}>Today</Dropdown.Item>
                <Dropdown.Item name='inbox' onClick={handleChangePopover}>Inbox</Dropdown.Item>
                <Dropdown.Item name='done' onClick={handleChangePopover}>Done</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Col>
          <Col className='d-flex justify-content-center p-1 '>
            {tasks.location}

          </Col>


        </Row>

      </Popover.Header>
      <Popover.Body>


        {
          tasks.tasks.map(task => (

            tasks.today ? !task.isDone && task.location === 'today' ? <Row>
              <Col xs={1} md={1}>
                <svg onClick={()=>{
                  let id = task._id
                  handleDone(id)
                }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                </svg>
              </Col>
              <Col xs={9} md={9}>
                <span className="taskBreak" >{' ' + task.task}</span>
              </Col>
              <Col xs={1} md={1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </Col>
            </Row> : <></> : tasks.done ? task.isDone && task.location === 'done' ?
              <Row>

                <Col xs={1} md={1}>
                    <svg onClick={() => {
                      let id = task._id
                      handleDone(id)
                    }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                  </svg>
                </Col>
                <Col xs={9} md={9}>
                  <span className="taskBreak" >{' ' + task.task}</span>
                </Col>
                <Col xs={1} md={1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </Col>
              </Row>
              : <></> : task.location === 'inbox' ?
        <Row>
          <Col xs={1}>

          </Col>
          <Col xs={9}>
            {' ' + task.task}
          </Col>
          <Col xs={1}>

          </Col>

        </Row>:<></>
        
          ))

        }
        {
          <Row>
            <Col className='col-9'>

              <InputGroup className="mt-2">
                <FormControl
                  placeholder="Add new task"
                  aria-label="task"
                  aria-describedby="task"
                  name='task'
                  value={tasks.task}
                  onChange={handleInputChange}
                />
                {(missingInput.missingName) ? <p className="err mt-2">⚠️ Please enter a task</p> : <></>}

              </InputGroup>




            </Col>
            <Col className='col-3 m-0 '>
              <Button className='links' onClick={handleAddNewLink}>+</Button>
            </Col>

          </Row>
        }





      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className="taskContainer">
        <OverlayTrigger
          trigger="click" placement="top" overlay={popover}>
          <Button className=' linkButton taskContainer'>Tasks</Button>
        </OverlayTrigger>

      </div>
    </>
  )
}

export default ToDo