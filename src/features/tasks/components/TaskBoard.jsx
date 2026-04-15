import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"


export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])

  const SectionTag = HTML_TAGS.SECTION
  const H2Tag = HTML_TAGS.H2
  
  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  return (
    <SECTION>
      <H2>{TASK_UI_TEXT.BOARD_TITLE}</H2>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList tasks={tasks} />
    </SECTION>
  )
}