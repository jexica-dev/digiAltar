import CreateExample from './CreateExample'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function CreateApp(props) {
  return (
    <div className="CreateApp">
      <DndProvider backend={HTML5Backend}>
        <CreateExample />
      </DndProvider>
    </div>
  )
}
