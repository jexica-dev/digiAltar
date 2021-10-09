import { useState, useCallback } from 'react';
import { ACContainer } from './ACContainer';

export const ACExample = (props) => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [hideSourceOnDrag]);
    return (<div>
      <ACContainer hideSourceOnDrag={hideSourceOnDrag} dragDisabled={props.dragDisabled}/>

		</div>);
};
