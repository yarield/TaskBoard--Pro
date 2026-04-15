import { TaskForm } from "./TaskForm"

export function TaskList({ tasks }) {
  const SectionTag = HTML_TAGS.SECTION
  const H3Tag = HTML_TAGS.H3
  const PTag = HTML_TAGS.P
  const ULTag = HTML_TAGS.UL
  const LITag = HTML_TAGS.LI
  
  return (
    <SECTION>
      <H3>{TASK_UI_TEXT.LIST_TITLE}</H3>

      {tasks.length === 0 ? (
        <P>{TASK_UI_TEXT.EMPTY_MESSAGE}</P>
      ) : (
        <UL>
          {tasks.map((task) => (
            <LI key={task.id}>{task.title}</LI>
          ))}
        </UL>
      )}
    </SECTION>
  )
}