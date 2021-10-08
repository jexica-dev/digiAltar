import { useState, useCallback } from 'react';
import { ACContainer } from './ACContainer';

export const ACExample = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [hideSourceOnDrag]);
    return (<div>
			<ACContainer hideSourceOnDrag={hideSourceOnDrag}/>

		</div>);
};
