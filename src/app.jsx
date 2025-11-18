import { useState } from 'preact/hooks'
import list from "./list.json"

export function App() {
  const [active, setActive] = useState({"opened": -1, "section": ""})

  function activate_item( index, section, active = active){
    if (active.opened == index && active.section == section){
      setActive((active) => {
        active.opened = -1;
        active.section = ""
      })
    } 
    else if (
      active.opened == index && active.section != section ||
      active.opened != index && active.section == section ||
      active.opened != index && active.section != section
    ){
      setActive((active) => {
        active.opened = index;
        active.section = section
      })
    }
  }

  return (
    <>
      <h1>Anti-Ai</h1>
      <div class="app-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque quaerat corporis quibusdam explicabo exercitationem, rem eos reiciendis facilis consectetur dolor accusamus mollitia ad. Earum tempora corporis beatae consequuntur at! Accusantium totam rerum odio, veniam, maxime dolorem pariatur necessitatibus recusandae expedita nostrum cupiditate. Labore vitae laudantium eligendi cupiditate. Illum, aliquam?
        </p>
      </div>
      <div>
        <div class="contents">
          <h2>Table of Content</h2>
          <ul>
            <li>Musicians</li>
          </ul>
        </div>
        <div>
          <h3 id="musicians">Musicians</h3>
          <div>
            {list && list.musicians.map((musician, index) => (
              <div class="item">
                <h4 class="clickable" onClick={activate_item(index, "musicians")}>
                  {active.opened != index && active.section != "musicians" &&
                    <span class="nf nf-md-chevron_right chevron"></span>
                  }
                  {active.opened == index && active.section == "musicians" &&
                    <span class="nf nf-md-chevron_down chevron"></span>
                  }
                  {musician.name}
                </h4>
                {active.opened == index && active.section == "musicians" &&
                  <div>{musician.description}</div> 
                }
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}
