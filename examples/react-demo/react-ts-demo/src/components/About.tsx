import * as React from 'react';
import { Article } from './Article';
import { Menu } from './Menu';

interface State {

};
interface Props {

};

export class About extends React.Component<Props, State> {
    public render() {
        <div>
        <Article title="Title1">
            <Menu>
                <ul>
                    <li>Previous Article</li>
                </ul>
            </Menu>
        </Article>
        <Article title="Title2">
            <Menu>
                <ul>
                    <li>Previous Article</li>
                    <li>Next Article</li>
                </ul>
            </Menu>
        </Article>
        <Article title="Title3">
            <Menu>
                <ul>
                    <li>Next Article</li>
                </ul>
            </Menu>
        </Article>
    </div>
    }
};