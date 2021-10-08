import { useDrop } from 'react-dnd';
import { ItemTypes } from '../DragMain/ItemTypes';
const style = {
    height: '20rem',
    width: '30rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const CreateDrop = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Altar' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = 'black';
    if (isActive) {
        backgroundColor = 'yellow';
    }
    else if (canDrop) {
        backgroundColor = '#9395ff';
    }
    return (<div ref={drop} role={'Altar'} style={{ ...style, backgroundColor }}>
			{isActive ? 'Release to drop' : 'Drag item here'}
		</div>);
};
