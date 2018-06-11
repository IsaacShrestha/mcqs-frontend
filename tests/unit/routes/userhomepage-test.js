import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | userhomepage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:userhomepage');
    assert.ok(route);
  });
});
