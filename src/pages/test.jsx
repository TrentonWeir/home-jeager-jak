import {Details } from "../components/buttons/tjwDetails";
import tjw_Section from "../components/containers/tjwSection";
import Text, { TextTypes } from "../components/text/tjwText";

import '../styles/details.css'


export default function Test() {

    const stuff = {
        title:"Title",
        items: [
            {text:"Item 1", action: () => console.log("Item 1")},
            {text:"Item 2", action: () => console.log("Item 2")},
            {text:"Item 3", action: () => console.log("Item 3")},
            {text:"Item 4", action: () => console.log("Item 5")},
        ]
    }

    return (
        <>
            <nav>
                Nav
            </nav>
            <header>
                <Text type={TextTypes.P}>
                    Header
                </Text>
            </header>
            <main>
                <Text type={TextTypes.H1}>
                    Main
                </Text>
            </main>
            <footer>
                Footer
            </footer>
            <article>
                Article
            </article>
            <tjw_Section title={"Section Summary"} element={<p>An H1 element</p>}/>
            <section>
                Section
            </section>

            <Details/>
            <details>
                <summary>Summary</summary>
                <ul>
                    <li><button>BTN</button></li>
                    <li><button>BTN</button></li>
                    <li><button>BTN</button></li>
                    <li><button>BTN</button></li>
                    <li><button>BTN</button></li>
                </ul>
            </details>

        </>
    )
}