import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import { PasswordInput } from 'linode-components';

describe('components/forms/PasswordInput', () => {
  const sandbox = sinon.sandbox.create();

  afterEach(() => {
    sandbox.restore();
  });

  it('calls onChange when appropriate', () => {
    const change = sandbox.spy();
    const input = shallow(
      <PasswordInput
        onChange={change}
        name="password"
        value=""
        name="password"
      />
    );

    input.find('Input').simulate('change', { target: { value: 'password' } });
    expect(change.callCount).toBe(1);
  });

  it('should calculate password strength', () => {
    const input = mount(
      <PasswordInput
        value="correct horse battery staple"
        onChange={() => {}}
        name="password"
      />
    );

    expect(input.find('.PasswordInput-strength--4').length).toBe(1);
    expect(input.find('.PasswordInput-strength-text').length).toBe(1);
    expect(input.find('.PasswordInput-strength-text').text())
      .toBe('This is a very strong password.');
  });
});
