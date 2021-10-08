
	import { render } from 'react-dom'
	import { DragExample } from './DragExample'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'

	export default function DragApp(props) {
		return (
			<div className="DragApp">
				<DndProvider backend={HTML5Backend}>
					<DragExample />
				</DndProvider>
			</div>
		)
	}


