import { memo } from 'react';
import { CreateDrop } from './CreateDrop';
import { CreateBox } from './CreateBox';
export const CreateContainer = memo(function CreateContainer() {
    return (<div className="flex flex-col">
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<CreateDrop />
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<CreateBox name="Image1"/>
				<CreateBox name="Image2"/>
				<CreateBox name="Image3"/>
			</div>
		</div>);
});
