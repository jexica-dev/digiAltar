import { useState, useCallback } from 'react';
import { DragContainer } from './DragContainer';
import Layout from '../Layout/Layout';
  
export const DragExample = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [hideSourceOnDrag]);
  return (<div>

			<DragContainer className="-mb-20" hideSourceOnDrag={hideSourceOnDrag}/>
    
		</div>);
};
