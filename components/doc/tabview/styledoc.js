import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-tabview</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-nav</td>
                                <td>Container of headers.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-selected</td>
                                <td>Selected tab header.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-panels</td>
                                <td>Container panels.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-panel</td>
                                <td>Content of a tab.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}