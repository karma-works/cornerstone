import { Selector } from "testcafe";
import { ShadowSelector } from "./shadow-selector";

fixture`Getting Started`
  .page`http://localhost:8080`
  .beforeEach(async t => {
    await t.navigateTo('#stn-card');
  })
;

test('card feature should show three cards', async t => {
  await t
    .expect(await ShadowSelector(t).countComponents('stn-card'))
    .eql(3)
});

test('card should show an h2 title', async t => {
  let actual = await ShadowSelector(t).findElementText(['stn-card'],'h2');
  await t
    .expect(actual)
    .contains('The First')
  
});
