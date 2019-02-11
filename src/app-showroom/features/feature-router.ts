import { html, TemplateResult } from "lit-html";
import { ShowroomService } from "../../cornerstone/showroom/app/showroom.service";
import { ShowroomExample } from "../../cornerstone/showroom/components/stn-shrm-example";


export const RouterFeature = {template: template, properties: properties};

function template(element: ShowroomExample, srv:ShowroomService): TemplateResult {
  function jumpTo(route: string) {
    srv.routeTo(route)
  }

  return html`
<ul>
    <li><button @click=${() => jumpTo('a')}>View A</button></li>
    <li><button @click=${() => jumpTo('b')}>View B</button></li>
    <li><button @click=${() => jumpTo('c')}>View C</button></li>
</ul>
<span>You last pressed: ${element.get('msg')}</span>
      `
}

function properties(element: ShowroomExample, srv:ShowroomService): Map<string, any> {
  let properties = new Map<string, any>();
  
  properties.set('msg', "N/A");
  
  srv.addRoute('a', () => {element.set('msg', 'Content A');});
  srv.addRoute('b', () => {element.set('msg', 'Content B');});
  srv.addRoute('c', () => {element.set('msg', 'Content C');});

  return properties;
}





