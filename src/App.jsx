import { TaskBoard } from "features/tasks/components/TaskBoard"
import { TASK_UI_TEXT } from "features/tasks/constants/task-ui.constants"
import { HTML_TAGS } from "../shared/html-tags.constants"

function App() {
  const MainTag = HTML_TAGS.MAIN
  const H1Tag = HTML_TAGS.H1  
  
  return (
    <MAIN>
      <H1>{TASK_UI_TEXT.BOARD_TITLE}</H1>
      <TaskBoard />
    </MAIN>
  )
}

export default App