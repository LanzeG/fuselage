import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Document, TextSection, PropsVariationSection, createPropsFromKnobs } from '../../helpers/storybook';
import { Input } from './index';


const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  + 'incididunt ut labore et dolore magna aliqua.';

storiesOf('Elements|Input', module)
  .addParameters({ jest: ['Input/spec'] })
  .lokiSkip('Input', () => <Document>
    <TextSection>
      <h1>Input</h1>
      <p>The purpose of the <code>Input</code> component is to allow user input.</p>
    </TextSection>
    <TextSection>
      <h2>Input types</h2>
      <p>The <code>type</code> property defines how and whick kind of user input will be collected on <code>Input</code>.</p>
    </TextSection>
    <TextSection>
      <h3><code>type='text'</code></h3>
    </TextSection>
    <PropsVariationSection
      component={Input}
      common={{
        type: 'text',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: loremIpsum },
        'with icon': { icon: 'at', value: loremIpsum },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        invalid: { invalid: true },
        'invalid + hover': { invalid: true, className: 'hover' },
        'invalid + active': { invalid: true, className: 'active' },
        'invalid + focus': { invalid: true, className: 'focus' },
      }}
    />
    <TextSection>
      <h3><code>type='password'</code></h3>
    </TextSection>
    <PropsVariationSection
      component={Input}
      common={{
        type: 'password',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: loremIpsum },
        'with icon': { icon: 'key', value: loremIpsum },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        invalid: { invalid: true },
        'invalid + hover': { invalid: true, className: 'hover' },
        'invalid + active': { invalid: true, className: 'active' },
        'invalid + focus': { invalid: true, className: 'focus' },
      }}
    />
    <TextSection>
      <h3><code>type='textarea'</code></h3>
    </TextSection>
    <PropsVariationSection
      component={Input}
      common={{
        type: 'textarea',
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: loremIpsum },
        'with icon': { icon: 'edit', value: loremIpsum },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        invalid: { invalid: true },
        'invalid + hover': { invalid: true, className: 'hover' },
        'invalid + active': { invalid: true, className: 'active' },
        'invalid + focus': { invalid: true, className: 'focus' },
      }}
    />
    <TextSection>
      <h3><code>type='select'</code></h3>
    </TextSection>
    <PropsVariationSection
      component={Input}
      common={{
        type: 'select',
        children: <>
          <option value='A'>Item A</option>
          <option value='B'>Item B</option>
          <option value='C'>Item C</option>
        </>,
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'B' },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        invalid: { invalid: true },
        'invalid + hover': { invalid: true, className: 'hover' },
        'invalid + active': { invalid: true, className: 'active' },
        'invalid + focus': { invalid: true, className: 'focus' },
      }}
    />
  </Document>);

const types = ['text', 'password', 'url', 'search', 'email', 'tel', 'url', 'textarea', 'select'];
const props = createPropsFromKnobs({
  disabled: false,
  invalid: false,
  hidden: false,
  icon: '',
  invisible: false,
  label: '',
  placeholder: '',
  required: false,
  type: ['text', types],
  value: '',
  onChange: action('change'),
});

storiesOf('Elements|Input', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Input/spec'] })
  .add('default', () => <Input {...props()} />)
  .add('with placeholder', () => <Input {...props({ placeholder: 'Placeholder' })} />)
  .add('with value', () => <Input {...props({ value: 'Value' })} />)
  .add('disabled', () => <Input {...props({ disabled: true })} />)
  .add('invalid', () => <Input {...props({ invalid: true })} />)
  .add('with icon', () => <Input {...props({ icon: 'mail' })} />)
  .add('of textarea type', () => <Input {...props({ type: ['textarea', types] })} />)
  .add('of select type', () => <Input {...props({
    type: ['select', types],
    children: <>
      <option value='A'>Item A</option>
      <option value='B'>Item B</option>
      <option value='C'>Item C</option>
    </>,
  })} />)
  .add('hidden', () => <Input {...props({ hidden: true })} />)
  .add('invisible', () => <Input {...props({ invisible: true })} />);