import { useState, useCallback } from 'react';
import { DragContainer } from './DragContainer';
  
export const DragExample = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [hideSourceOnDrag]);
    return (<div>
			<DragContainer hideSourceOnDrag={hideSourceOnDrag}/>

		</div>);
};
