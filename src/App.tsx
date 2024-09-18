import { Button } from './components/common/button';
import { Input } from './components/common/input/input';

const App = () => {
	return (
		<div className='p-5'>
			<form className='max-w-lg mx-auto flex flex-col gap-5 p-4 rounded-xl items-start border'>
				<Input size='large' placeholder='enter your name...' type='email' />
				<Button size='full'>Submit</Button>
			</form>
		</div>
	);
};

export default App;
