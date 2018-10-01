import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hub-sidebar/sidebar-outlet', 'Integration | Component | hub sidebar/sidebar outlet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hub-sidebar/sidebar-outlet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hub-sidebar/sidebar-outlet}}
      template block text
    {{/hub-sidebar/sidebar-outlet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
