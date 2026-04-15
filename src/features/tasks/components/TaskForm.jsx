  
export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  const SectionTag = HTML_TAGS.SECTION
  const H3Tag = HTML_TAGS.H3
  const PTag = HTML_TAGS.P
  const ButtonTag = HTML_TAGS.BUTTON
  return (
    <SECTION>
      <H3>{TASK_UI_TEXT.FORM_TITLE}</H3>

      <input
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
      />

      <BUTTON onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</BUTTON>
    </SECTION>
  )
}