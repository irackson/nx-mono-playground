import { render } from '@testing-library/react';

import Mycomps from './Mycomps';

describe('Mycomps', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Mycomps />);
        expect(baseElement).toBeTruthy();
    });
});
