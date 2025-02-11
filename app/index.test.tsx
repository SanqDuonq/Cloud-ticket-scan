import {render} from '@testing-library/react-native';
import Index from '../app/index';

describe('Index Screen',() => {
    test('should render welcome text correctly', () => {
        const {getByText} = render(<Index/>);

        expect(getByText('Welcome to ExpGo!')).toBeTruthy();
    })
})