import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioBtn } from './RadioBtn';

export default {
  title: 'UI/Controls/RadioBtn',
  component: RadioBtn,
} as ComponentMeta<typeof RadioBtn>;

const Template: ComponentStory<typeof RadioBtn> = (args) => (
  <>
    <RadioBtn {...args} />
  </>
);

//story
export const RadioBtnExmpl = Template.bind({});
RadioBtnExmpl.args = {
  boxColor: 'blue',
  textColor: 'blue',
  label: 'Boolean',
  isSelected: true,
  value: 'Boolean',
};

// how to use radiobtn
export const RadioBtnGroupExample = () => {
  const [type, setType] = React.useState('Boolean');

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setType(event.target.value);
  };

  return (
    <div className="w-80 flex items-center justify-between">
      <RadioBtn
        boxColor="blue"
        textColor="blue"
        label="Boolean"
        isSelected={type === 'Boolean'}
        value="Boolean"
        onChange={onChangeHandler}
      />
      <RadioBtn
        boxColor="red"
        textColor="red"
        label="String"
        isSelected={type === 'String'}
        value="String"
        onChange={onChangeHandler}
      />
      <RadioBtn
        boxColor="green"
        textColor="green"
        label="Number"
        disabled={true}
        isSelected={type === 'Number'}
        value="Number"
        onChange={onChangeHandler}
      />
    </div>
  );
};
